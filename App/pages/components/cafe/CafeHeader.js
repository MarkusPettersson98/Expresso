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
                
            </ImageBackground>
            <View style={styles.contentcontainer}>
                <View style={styles.arrowcontainer}>
                    <View style={styles.backarrow}><BackArrow/></View>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.cafename}>{name}</Text>
                    <Text style={styles.cafeaddress}>{address}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        height: "35%",
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black',
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.75,
    },
    arrowcontainer: {
        width: "100%",
        height: "30%",
    },
    backarrow: {
        marginLeft: "5%",
        marginTop: "12%",
        width: 30,
        height: 30,
    },
    contentcontainer: {
        margin: 'auto',
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
    },
    textcontainer: {
        height: "70%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: "20%",
    },
    cafename: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
    cafeaddress: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        opacity: 0.9,

    }
});

export default CafeHeader;
