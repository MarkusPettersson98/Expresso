import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getReceiptLink, getReceipt } from '../../../API/expressoAPI';
import QRCode from 'react-native-qrcode';

import ReceiptView from './ReceiptView';

/**
 * Här ser jag att vi 'kör igång' vår page och hämtar in objektet från backend för att sedan styra komponenterna.
 * I props tar vi in userID genom mapStateToProps och skickar sedan vidare uniqueID för att få en QR kod och
 * rätt attribut som ska visas som information om köpet för användaren.
 */

export default class Purchases extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ReceiptView: [] };
    }

    async componentDidMount() {
        const receipt = await getReceipt();

        Promise.all(receipt).then(receipt => {
            const receiptView = <ReceiptView receipt={receipt} />;

            this.setState({
                ReceiptView: receiptView,
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.qr}>
                        <QRCode
                            value={getReceiptLink(0)} // Link to the receipt TODO: replace 0 with receipt id
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
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        width: '100%',
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
    tc: {
        backgroundColor: 'black',
        width: '100%',
        height: '30%',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
    },
});
