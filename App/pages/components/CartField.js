import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {
    calculateCartPrice,
    calculateCartAmount,
} from './redux/cartFunctions';
import { withNavigation } from 'react-navigation';
import CafeCartIcon from './cafe/CafeCartIcon';

const CartField = props =>{
    
    const totalPrice = calculateCartPrice(props.cart);
    const totalAmount = calculateCartAmount(props.cart);
    if(totalAmount > 0){
        return(
            <View style = {styles.container}> 
                <View style = {styles.item}>
                    <TouchableOpacity style = {styles.to} 
                        onPress={() => props.navigation.navigate('Checkout')}
                        hitSlop={{ top: 20, bottom: 20, left: 200, right: 200 }}
                    >
                        <CafeCartIcon cart={props.cart} style={styles.cartIcon}/>
                        <Text style={styles.cartText}>Till varukorgen</Text>
                        <Text style={styles.sumText}>{totalPrice} kr</Text>
                    </TouchableOpacity>
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
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        bottom: 0,
    },
    item: {
        height: '100%',
        width: '100%',
        backgroundColor: '#5AA3B7',
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    to: {
        width: '100%',
    },
    cartText:{
        color: "white",
        fontSize: 18,
        opacity: 1,
        textAlign: 'center',
    },
    sumText:{
        color: "white",
        fontSize: 17,
        opacity: 1,
        position: 'absolute',
        right: 10,
    },

})

export default withNavigation(connect(
    mapStateToProps
)(CartField));