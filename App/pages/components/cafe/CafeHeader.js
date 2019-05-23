import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import BackArrow from './../header/BackArrow'

/**
 * @file This is the header for the order page, which is a purely presentational component.
 *
 * @param picture OrderHeader.js expects to receive a picture which is should render onto itself
 *
 */

const CafeHeader = ({ picture, name, address }) => {
    return (
        <View style={styles.item}>
            <ImageBackground
                source={picture}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.backarrow}><BackArrow/></View>  
                
            </ImageBackground>
            <View style={styles.textcontainer}>
                    <Text style={styles.cafename}>{name}</Text>
                    <Text style={styles.cafeaddress}>{address}</Text>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        justifyContent: 'flex-start',
        height: "35%",
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black',
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },
    backarrow: {
        marginLeft: "5%",
        marginTop: "12%",
        width: 30,
        height: 30,
        zIndex: 999,
    },
    textcontainer: {
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
    },
    cafename: {
        color: 'white',
        fontSize: 40,
    },
    cafeaddress: {
        color: 'white',
        fontSize: 20,
    }
});

export default CafeHeader;
