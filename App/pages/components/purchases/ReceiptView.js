import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CoffeeDisplay from './CoffeeDisplay';

class componentName extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.rubrik}>Tack för din beställning!</Text>
                <View style={styles.infoBox}>
                    <Text style={styles.underrubrik}>Varor</Text>
                    <View style={styles.spaceing}>
                        <Text style={styles.boldtext}>Antal</Text>
                        <Text style={styles.boldtext}>Kaffesort</Text>
                        <Text style={styles.boldtext}>Muggtyp</Text>
                        <Text style={styles.boldtext}>Pris</Text>
                    </View>
                    <ScrollView style={{ flex: 8 }}>
                        <CoffeeDisplay
                            coffees={this.props.receipt[0].coffees}
                        />
                    </ScrollView>
                    <View style={{ flex: 7 }}>
                        <Text style={styles.underrubrik2}>
                            Upphämtningsställe
                        </Text>
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
            </View>
        );
    }
}
export default componentName;

const styles = StyleSheet.create({
    container: {
        top: 40,
        flex: 1,
        backgroundColor: '#57454B',
        width: '100%',
        height: '50%',
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
    },
    spaceing: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    underrubrik: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
    },
    underrubrik2: {
        top: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
    },
    text: {
        top: 0,
        color: 'white',
    },
    boldtext: {
        top: 0,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'space-between',
    },
});
