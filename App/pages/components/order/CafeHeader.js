import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const CafeHeader = ({ picture }) => {
    return (
        <View style={styles.item}>
            <ImageBackground
                source={picture}
                resizeMode="cover"
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        justifyContent: 'flex-start',
        height: 175,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default CafeHeader;
