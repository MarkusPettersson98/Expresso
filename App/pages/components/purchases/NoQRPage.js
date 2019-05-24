import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

/**
 * This view shows the emptycart-icon and text, perhaps this view could benefit from recommending the customer a purchase
 * that s/he has done before.
 * This view does not have navigation, the navigation lies within the header folder.
 */
const NoQRPage = () => {
    return (
        <View style={styles.app}>
            <View style={styles.content}>
                <AntDesign name="qrcode" size={128 + 64} color="#57454B" />
                <Text style={styles.textTitle}>Du har ingen aktiv order.</Text>
                <Text style={styles.textDesc}>
                    Om du köper en kaffe kommer din QR-kod finnas här!
                </Text>
            </View>
        </View>
    );
};

export default NoQRPage;

const styles = StyleSheet.create({
    app: {
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
    },
    textTitle: {
        fontSize: 26,
        fontWeight: '600',
        color: '#57454B',
        marginTop: 30,
        marginBottom: 10,
    },
    textDesc: {
        fontSize: 16,
        fontWeight: '400',
        width: '60%',
        color: '#7C6A70',
        textAlign: 'center',
    },
});
