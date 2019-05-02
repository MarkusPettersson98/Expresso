import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {
    calculateCartPrice,
    calculateCartAmount,
} from './redux/cartFunctions';
import CafeCartIcon from './cafe/CafeCartIcon';
import CafeCheckoutButton from './cafe/CafeCheckoutButton';

const CartField = props =>{
    
    const totalPrice = calculateCartPrice(props.cart);
    const totalAmount = calculateCartAmount(props.cart);
    if(totalAmount > 0){
        return(
            <View style = {styles.container}> 
                <View style = {styles.item}>
                    
                </View>
            </View>
        );
    }

    return(
        null
    );
    
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

const styles = StyleSheet.create({
    container:{
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        bottom: 0,
    },
    item: {
        height: '100%',
        width: '93%',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        backgroundColor: "green",
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: "white",
        fontSize: 14,
        opacity: 1,
    }

})

export default connect(mapStateToProps)(CartField);