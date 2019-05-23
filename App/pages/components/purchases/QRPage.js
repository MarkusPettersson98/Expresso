import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode';
import ReceiptView from './ReceiptView';

import { getScanReceiptLink } from '../../../API/expressoAPI';

/**
 * This view shows the emptycart-icon and text, perhaps this view could benefit from recommending the customer a purchase
 * that s/he has done before.
 * This view does not have navigation, the navigation lies within the header folder.
 */
const QRPage = ({ receiptId }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.qr}>
                    <QRCode
                        value={getScanReceiptLink(receiptId)} //Ska vara en länk till den beställning som man gjort
                        size={260}
                        bgColor="black"
                        fgColor="white"
                    />
                </View>
            </View>
            <ReceiptView receiptId={receiptId} />
        </View>
    );
};

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

export default QRPage;
