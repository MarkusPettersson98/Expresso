import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CoffeeDisplay from './CoffeeDisplay';

class componentName extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textRubrik}>Tack för din beställning!</Text>

                <View style={styles.infoBox}>
                    <Text style={styles.textUnderrubrik1}>Varor</Text>

                    <View style={styles.varorTable}>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                width: 40,
                            }}
                        >
                            Antal
                        </Text>
                        <Text style={styles.boldtext}>Kaffesort</Text>
                        <Text style={styles.boldtext}>Muggtyp</Text>
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                width: 35,
                            }}
                        >
                            Pris
                        </Text>
                    </View>

                    <ScrollView>
                        <CoffeeDisplay
                            coffees={this.props.receipt[0].coffees}
                        />
                    </ScrollView>

                    <View style={{ flex: 7 }}>
                        <Text style={styles.textUnderrubrik2}>
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
        flex: 1,
        top: 20,
        width: '100%',
        backgroundColor: '#57454B',
    },
    textRubrik: {
        top: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        alignSelf: 'center',
    },
    infoBox: {
        flex: 1,
        top: 20,
    },
    varorTable: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textUnderrubrik1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
    },
    textUnderrubrik2: {
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
        color: 'white',
        fontWeight: 'bold',
        width: 140,
    },
    table: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
});
