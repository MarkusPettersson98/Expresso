import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class componentName extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.rubrik}>Tack för din beställning!</Text>
                <View style={styles.infoBox}>
                    <Text style={styles.underrubrik}>Varor</Text>
                    <Text style={styles.text}>
                        {this.props.receipt[0].coffees[0].coffee.name}:{' '}
                        {this.props.receipt[0].coffees[0].amount} {'\n'}
                    </Text>
                    <Text style={styles.underrubrik}>Upphämtningsställe</Text>
                    <Text style={styles.text}>
                        {this.props.receipt[0].shop} {'\n'}
                    </Text>
                    <Text style={styles.text}>
                        Totalpris: {this.props.receipt[0].totalPrice} {'\n'}
                    </Text>
                    <Text style={styles.text}>
                        Datum: {this.props.receipt[0].date} {'\n'}
                    </Text>
                </View>
            </View>
        );
    }
}
export default componentName;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#57454B',
        width: '100%',
        height: '30%',
        bottom: 0,
        alignItems: 'center',
    },
    rubrik: {
        top: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    infoBox: {
        width: '95%',
        height: '100%',
        top: 20,
        textAlign: 'left',
        paddingBottom: 20,
    },
    underrubrik: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
    },
    text: {
        top: 0,
        color: 'white',
    },
});
