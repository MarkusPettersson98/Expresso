import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const OrderHeader = ({ picture }) => {
    return (
        <View style={styles.item}>
            <ImageBackground
                source={picture}
                resizeMode="cover"
                style={styles.image}>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        justifyContent: 'flex-start',
        height: 250,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default OrderHeader;