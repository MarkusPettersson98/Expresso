import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CafeCheckoutButton = () => {
    const clickAction = () =>
        console.log('CafeCheckoutButton: Klickade på betala');

    return (
        <View style={styles.CafeButton}>
            <TouchableOpacity
                onPress={clickAction}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                <Text style={styles.CafeButtonText}>BETALA ></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    CafeButton: {
        marginRight: 25,
        marginTop: 25,
        color: 'white',
    },
    CafeButtonText: {
        fontWeight: '500',
        letterSpacing: 2,
        fontSize: 20,
        color: 'white',
    },
});

export default CafeCheckoutButton;
