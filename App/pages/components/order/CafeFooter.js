import React from 'react';
import { View, StyleSheet } from 'react-native';

import CafeCart from './CafeCart';
import CafeCheckoutButton from './CafeCheckoutButton';

const CafeFooter = ({ cart }) => {
    return (
        <View style={styles.footer}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <CafeCart cart={cart} />

                <CafeCheckoutButton />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: '#57454B',
        maxHeight: 100,
g    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
});

export default CafeFooter;
