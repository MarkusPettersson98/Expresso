import React from 'react';
import NoQRPage from './NoQRPage';
import QRPage from './QRPage';
import LoadingScreen from '../loading/loadingCoffee';
import ScanModal from './ScanModal';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { View } from 'react-native';

/**
 * Här ser jag att vi 'kör igång' vår page och hämtar in objektet från backend för att sedan styra komponenterna.
 * I props tar vi in userID genom mapStateToProps och skickar sedan vidare uniqueID för att få en QR kod och
 * rätt attribut som ska visas som information om köpet för användaren.
 */

class Purchases extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeReceipt: undefined,
            firebaseLoading: true,
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const fbUserId = firebase.database().ref('users/' + user.uid);
                fbUserId.on('value', snapshot => {
                    // fbUserId.on('child_changed', snapshot => {
                    const activeReceipt =
                        (snapshot.val() && snapshot.val().active) || '';
                    console.log('Purchases: active receipt', activeReceipt);
                    if (!activeReceipt && this.state.activeReceipt) {
                        // Visa modal
                        console.log('if: visa modal');
                        this.setState({
                            modalVisible: true,
                            firebaseLoading: false,
                        });
                    } else {
                        console.log('else: lagra firebase receipt');
                        this.setState({
                            activeReceipt,
                            firebaseLoading: false,
                        });
                    }
                });
            } else {
                this.setState({ firebaseLoading: false });
            }
        });
    }

    //Changes state to false, hiding ModalComp
    hideModal = () => {
        this.setState({ modalVisible: false, activeReceipt: undefined });
    };

    // const { params } = props.navigation.state;
    // If there is an orderID, render QR code.
    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                {this.state.firebaseLoading ? (
                    <LoadingScreen />
                ) : this.state.activeReceipt ? (
                    <QRPage receipt={this.state.activeReceipt} />
                ) : (
                    <NoQRPage />
                )}

                <ScanModal
                    isVisible={this.state.modalVisible}
                    hideModal={() => this.hideModal()}
                />
            </View>
        );
    }
}

export default Purchases;
