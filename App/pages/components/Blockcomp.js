import React, {Component} from 'react';
import {AppRegistry, ScrollView, StyleSheet, ImageBackground, Text, View} from 'react-native';


export default class Blockcomp extends Component{
    render(){
        return(
            <ScrollView contentContainerStyle = {styles.container}>
                <View style = {styles.innerC}>
                    <View style = {styles.item} onPress = {console.log('pressed biblan')}>
                        <ImageBackground source = {require('./resources/biblan.jpg')} resizeMode = 'cover' style={{width: '100%', height: '100%', borderRadius: 20}}>
                            <Text style={styles.text}>Biblioteket</Text>
                        </ImageBackground>
                    </View>    
                    <View style = {styles.item}>
                        <ImageBackground source = {require('./resources/bulten.jpg')} resizeMode = 'cover' style={{width: '100%', height: '100%', borderRadius: 20}}>
                            <Text style={styles.text}>Bulten</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style = {styles.innerC}>
                    <View style = {styles.item}>
                        <ImageBackground source = {require('./resources/linsen.jpg')} resizeMode = 'cover' style={{width: '100%', height: '100%', borderRadius: 20}}>
                            <Text style={styles.text}>Linsen</Text>
                        </ImageBackground>
                    </View>
                    <View style = {styles.item}>
                        <ImageBackground source = {require('./resources/vera.jpg')} resizeMode = 'cover' style={{width: '100%', height: '100%', borderRadius: 20}}>
                            <Text style={styles.text}>Veras café</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style = {styles.innerC}>
                    <View style = {styles.item}>
                        <ImageBackground source = {require('./resources/wijkanders.jpg')} resizeMode = 'cover' style={{width: '100%', height: '100%', borderRadius: 20}}>
                            <Text style={styles.text}>Wijkanders</Text>
                        </ImageBackground>
                    </View>
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
        alignItems: 'center',
    },
    innerC: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#F0F7F4',
        alignItems: 'flex-start',
    },
    item: {
        height: 200,
        width: '50%',
        //borderRadius: 20,
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
})

AppRegistry.registerComponent('Blockcomp', () => Blockcomp);