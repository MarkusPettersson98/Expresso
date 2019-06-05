import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode';
import ReceiptView from './ReceiptView';

import { getScanReceiptLink } from '../../../API/expressoAPI';

/**
 * This view shows the emptycart-icon and text, perhaps this view could benefit from recommending the customer a purchase
 * that s/he has done before.
 * This view does not have navigation, the navigation lies within the header folder.
 */
const QRPage = ({ receipt }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.qr}>
                    <QRCode
                        value={getScanReceiptLink(receipt.user + receipt.date)} //Ska vara en länk till den beställning som man gjort
                        size={260}
                        bgColor="black"
                        fgColor="#FAFAFA"
                    />
                </View>
            </View>
            <ScrollView style={styles.receiptbox}>
                <ReceiptView receipt={receipt} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 320,
        backgroundColor: '#FAFAFA',
        borderRadius: 40,
        top: 20,
    },
    receiptcontainer: {
        width: '100%',
        height: '100%',
    },
    receiptbox: {
        marginTop: 20,
        flexGrow: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
    },
    qr: {
        width: 320,
        height: 320,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 7,
        borderColor: '#57454B',
        borderRadius: 40,
        opacity: 1,
    },
});

export default QRPage;
