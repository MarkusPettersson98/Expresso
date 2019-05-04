import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {
    calculateCartPrice,
    calculateCartAmount,
} from './redux/cartFunctions';
import { withNavigation } from 'react-navigation';
import OrderCartIconCounter from './cafe/OrderCartIconCounter';


const CartField = props =>{
    const totalPrice = calculateCartPrice(props.cart);
    const totalAmount = calculateCartAmount(props.cart);
    if(totalAmount > 0){
        return( 
            <View style = {styles.container}> 
                <OrderCartIconCounter cartAmount={totalAmount} style = {styles.cart}/>
                <Text style={styles.cartPriceText}>{`${totalPrice} kr`}</Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Checkout')}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    style = {styles.opacity}
                >
                    <Text style = {styles.text}> Checkout ></Text>
                </TouchableOpacity>
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
        height: 60,
        width: '100%',
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        backgroundColor: "#57454B",
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute', 
        bottom: 0,
    },

    opacity: {
        flex: 1,   
    },
    text:{
        color: "white",
        fontSize: 24,
        
    },
    cartPriceText: {
        fontSize: 30,
        color: 'white',
        marginLeft: 30,
        marginRight: 40,

    },
    cart:{
        marginTop: 0,
        marginLeft: 10
    },

})

export default withNavigation(connect(
    mapStateToProps
)(CartField));