import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getReceipt, getScanReceiptLink } from '../../../API/expressoAPI';
import QRCode from 'react-native-qrcode';
import NoQRPage from './NoQRPage';

import ReceiptView from './ReceiptView';

/**
 * Här ser jag att vi 'kör igång' vår page och hämtar in objektet från backend för att sedan styra komponenterna.
 * I props tar vi in userID genom mapStateToProps och skickar sedan vidare uniqueID för att få en QR kod och
 * rätt attribut som ska visas som information om köpet för användaren.
 */

export default class Purchases extends React.Component {
    constructor(props) {
        console.log('PARAMSUTOMORDERID', props.navigation.state)
        super(props);
        this.state = {
            ReceiptView: [],
            receiptId: props.navigation.state.params
                ? props.navigation.state.params.orderID
                : false,
        };
    }

    async componentDidMount() {
        const receiptId = this.state.receiptId;

        // const receipt = await getReceipt('-LfYMIYIpnqfHjs3Lxdw'); //TODO: Get receipt id dynamically
        if (receiptId) {
            const receipt = await getReceipt(receiptId); //TODO: Get receipt id dynamically
            const receiptView = <ReceiptView receipt={receipt} />;
        } else {
            const receiptView = <NoQRPage />;
        }

        this.setState({
            ReceiptView: receiptView,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.qr}>
                        <QRCode
                            value={getScanReceiptLink(this.state.receiptId)} //Ska vara en länk till den beställning som man gjort
                            size={260}
                            bgColor="black"
                            fgColor="white"
                        />
                    </View>
                </View>
                {this.state.ReceiptView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#57454B',
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 320,
        backgroundColor: 'white',
        borderRadius: 40,
        top: 20,
    },
    qr: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#57454B',
        borderRadius: 40,
        opacity: 1,
    },
});
