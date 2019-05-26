import React, { Component } from 'react';
import { View, Text, StyleSheet   } from 'react-native';

export default class ListCoffees extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.subcontainer}>
                    <Text style = {styles.header}>Antal</Text>
                    <Text style = {styles.header2}>Kaffe</Text>
                    <Text style = {styles.header}>Storlek</Text>
                    <Text style = {styles.header}>Mugg</Text>
                    <Text style = {styles.header}>Pris</Text>
                </View>
                {this.props.item.map((receiptItem, i) =>
                    <View key = {i} style = {styles.subcontainer}>
                        <Text style = {styles.text}>{receiptItem.amount}</Text>
                        <Text style = {styles.text2}>{receiptItem.coffee.name}</Text>
                        <Text style = {styles.text}>{receiptItem.coffee.volume}ml</Text>
                        { receiptItem.coffee.ownMug 
                            ? <Text style = {styles.text}>Egen</Text>
                            : <Text style = {styles.text}>Låna</Text>
                        }
                        <Text style = {styles.text}>{receiptItem.coffee.price} kr</Text>
                    </View>
                    )    
                }      
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    subcontainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    header: {
        fontWeight: 'bold', 
        flex: 1,
        color: 'black',
        fontSize: 12,

    },
    header2: {
        fontWeight: 'bold', 
        flex: 2,
        color: 'black',
        fontSize: 12
    },
    text: {
        flex: 1,
        color: 'black',
        fontSize: 14,
    },
    text2: {
        flex: 2,
        color: 'black',
        fontSize: 14
    }
});

