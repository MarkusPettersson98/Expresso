import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {
    calculateCartPrice,
    calculateCartAmount,
} from './redux/cartFunctions';

const CartField = props =>{
    
    const total = calculateCartPrice(props.cart);
    const amount = calculateCartAmount(props.cart);
    if(total == 0){
        return(
        <View style = {styles.container}> 
            <View style = {styles.item}>
                <Text style = {styles.text}>
                    This is the cart field
                </Text>
            </View>
        </View>
        );
    }
    return (
        <Text>
            else this happens
        </Text>
    );
    
    
}

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
        height: '80%',
        width: '98%',
        borderRadius: 6,
        backgroundColor: "red",
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: "white",
        fontSize: 14,
        opacity: 1,
    }

})

export default connect(mapStateToProps)(CartField);