import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import BackArrow from './../header/BackArrow';

/**
 * @file This is the header for the order page, which is a purely presentational component.
 *
 * @param picture OrderHeader.js expects to receive a picture which is should render onto itself
 *
 */

const CafeHeader = ({ picture, name, address }) => {
    return (
        <View style={styles.item}>
            <View style={styles.bgcontainer}>
                <ImageBackground
                    source={picture}
                    resizeMode="cover"
                    style={styles.image}
                />
                <View style={styles.selectionparent}>
                    <View style={styles.selection}>
                        <Text style={styles.selectiontext}> Kaffemeny </Text>
                    </View>
                </View>
            </View>
            <View style={styles.contentcontainer}>
                <View style={styles.arrowcontainer}>
                    <View style={styles.backarrow}>
                        <BackArrow />
                    </View>
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
        height: '35%',
        justifyContent: 'center',
        borderColor: '#FAFAFA',
        backgroundColor: 'black',
        zIndex: 10,
    },
    bgcontainer: {
        width: '100%',
        height: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 7.49,
    },
    selectionparent: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginBottom: -25,
    },
    selection: {
        backgroundColor: '#FAFAFA',
        width: '35%',
        height: '100%',
        
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,

        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectiontext: {
        fontWeight: '300',
        color: '#57454B',
        fontSize: 26,
        letterSpacing: 2,
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.75,
    },
    arrowcontainer: {
        width: '100%',
        height: '30%',
    },
    backarrow: {
        marginLeft: '5%',
        marginTop: '12%',
        width: 30,
        height: 30,
    },
    contentcontainer: {
        margin: 'auto',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
    },
    textcontainer: {
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '20%',
    },
    cafename: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
    cafeaddress: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        opacity: 0.95,
    },
});

export default CafeHeader;