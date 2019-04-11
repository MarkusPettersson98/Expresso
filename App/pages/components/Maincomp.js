import React, {Component} from 'react';
import {AppRegistry, ScrollView, StyleSheet, ImageBackground, Image, Text, View} from 'react-native';


export default class Maincomp extends Component{

    render(){
        return(
            <ScrollView contentContainerStyle = {styles.container}>
                <View style = {styles.item}>
                    <ImageBackground source = {require('./resources/biblan.jpg')} resizeMode = 'cover' style={styles.image}>
                        <Text style={styles.text}>Biblioteket</Text>
                    </ImageBackground>
                </View>    
                <View style = {styles.item}>
                    <ImageBackground source = {require('./resources/bulten.jpg')} resizeMode = 'center' style={styles.image}>
                        <Text style={styles.text}>Bulten</Text>
                    </ImageBackground>
                </View>
                <View style = {styles.item}>
                    <ImageBackground source = {require('./resources/linsen.jpg')} resizeMode = 'center' style={styles.image}>
                        <Text style={styles.text}>Linsen</Text>
                    </ImageBackground>
                </View>
                <View style = {styles.item}>
                    <ImageBackground source = {require('./resources/vera.jpg')} resizeMode = 'center' style={styles.image}>
                        <Text style={styles.text}>Veras café</Text>
                    </ImageBackground>
                </View>
                <View style = {styles.item}>
                    <ImageBackground source = {require('./resources/wijkanders.jpg')} resizeMode = 'center' style={{width: '100%', height: '100%', borderRadius: 20, borderColor: '#F0F7F4'}}>
                        <Text style={styles.text}>Wijkanders</Text>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#F0F7F4',
        //alignItems: 'center',
        justifyContent: 'center', 
    },
    item: {
        height: 200,
        //width: '90%',
        //borderRadius: 20,
        borderTopWidth: 7,
        borderLeftWidth: 14,
        borderBottomWidth: 7,
        borderRightWidth: 14,
        justifyContent: 'center', 
        borderColor: '#F0F7F4',
        backgroundColor: 'black'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    image: {
        width: '100%', 
        height: '100%', 
        //borderRadius: 20,
        //borderWidth: 20,
        //borderColor: '#F0F7F4',
    }
    
})

AppRegistry.registerComponent('Maincomp', () => Maincomp);