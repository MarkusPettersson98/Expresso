import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
} from 'react-native';
import Modal from 'react-native-modal';

export default class RNF extends Component {
    constructor(props) {
        super(props);
    }

    onClose = () => {
        this.props.hideModal();
        this.props.navFunc();
        this.props.clearCart();
    };

    render() {
        return (
            <Modal
                isVisible={this.props.isVisible}
                onBackdropPress={() => this.props.hideModal()}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.thank_you}>Tack för ditt köp!</Text>
                    <Text style={styles.press_text}>
                        Tryck på visa order för att visa din QR-kod.
                    </Text>
                    <Text
                        onPress={this.onClose}
                        style={styles.show_order_container}
                    >
                        VISA ORDER
                    </Text>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    modalContainer: {
        flex: 1,
        bottom: 0,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        width: 370,
        backgroundColor: '#F5FCFF',
        marginTop: 10,
        paddingTop: 15,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#fff',
    },
    thank_you: {
        fontSize: 20,
        top: 200,
        position: 'absolute',
        fontWeight: 'bold',
        textAlign: 'top',
        color: '#7C6A70',
        margin: 10,
    },
    press_text: {
        fontSize: 17,
        top: 280,
        position: 'absolute',
        textAlign: 'center',
        color: '#7C6A70',
        margin: 10,
    },
    show_order_container: {
        justifyContent: 'center',
        backgroundColor: '#5AA3B7',
        bottom: 60,
        position: 'absolute',
        color: '#FFFFFF',
        width: 200,
        height: 40,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: 'hidden',
    },
});
