import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    innerC: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#F0F7F4',
        alignItems: 'flex-start',
    },
    item: {
        height: 200,
        width: '50%',
        borderWidth: 10,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    }
});


const BlockShopView = ({index, name, picture}) => {
    return (
        <View style = {styles.innerC}>
            <View style = {styles.item}>
                <ImageBackground key = {index}
                                 source = {picture}
                                 style={
                                     {width: '100%',
                                      height: '100%',
                                      borderRadius: 20}}
                                 resizeMode = 'cover' >
                    <Text style={styles.text}>{name}</Text>
                </ImageBackground>
            </View>
        </View>
    );
};

export default BlockShopView;
