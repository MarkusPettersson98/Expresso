import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

const props = 0;

const Field = (props) =>{
    if(props == 0){
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

class CartField extends Component{
    render() {
        return(
            Field(props)
        );
    }
} 

const styles = StyleSheet.create({
    container:{
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        marginTop: 470,

    },
    item: {
        height: '80%',
        width: '80%',
        borderRadius: 20,
        backgroundColor: "red",
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: "white",
        fontSize: 14,
        opacity: 1,
    }

})
export default connect()(CartField);