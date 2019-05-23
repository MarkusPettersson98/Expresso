import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import CoffeeDisplay from './CoffeeDisplay';
import { getReceipt } from '../../../API/expressoAPI';

class ReceiptView extends Component {
    /*Kvittot som hämtas sparas bak i customer för att minska kodduplicering
        
        Är just nu hårdkodat både här, man hämtar endast kvitto #7, även kunden 
        hämtas hårdkodat genom funktionen getReceiptUser i Purchases.js detta borde
        göras dynamiskt istället.
        */

    constructor(props) {
        super(props);

        this.state = {
            receipt: {
                totalPrice: 0,
                shop: {},
                coffees: [],
                date: 0,
            },
        };
    }

    async componentDidMount() {
        const wantedReceipt = await getReceipt(this.props.receiptId);

        this.setState({
            receipt: wantedReceipt,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textRubrik}>Tack för din beställning!</Text>

                <View style={styles.infoBox}>
                    <View>
                        <Text style={styles.textUnderrubrik1}> Kvitto </Text>
                    </View>
                    <Text style={styles.textUnderrubrik1} />

                    <View style={styles.varorTable}>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                width: 40,
                                marginLeft: 8,
                            }}
                        >
                            Antal
                        </Text>
                        <Text style={styles.boldtext}>Kaffesort</Text>
                        <Text style={styles.boldtext}>Muggtyp</Text>
                        <Text
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                width: 35,
                                marginRight: 10,
                            }}
                        >
                            Pris
                        </Text>
                    </View>
                    <ScrollView>
                        <CoffeeDisplay coffees={this.state.receipt.coffees} />
                    </ScrollView>

                    <View
                        style={{
                            width: '90%',
                            height: '1%',
                            alignSelf: 'center',
                            borderBottomWidth: 1,
                            borderColor: 'black',
                        }}
                    />
                    <View style={{ flex: 7 }}>
                        <Text style={styles.textUnderrubrik2}>
                            Upphämtningsställe
                        </Text>

                        <Text style={styles.text}>
                            {this.state.receipt.shop.name}
                        </Text>

                        {/* Klickar nu endast vidare till kartan, borde visa vilket affär
                            med någon typ av markering */}
                        <Text style={styles.text}>
                            Totalpris: {this.state.receipt.totalPrice}
                        </Text>
                        <Text style={styles.text}>
                            {new Date(this.state.receipt.date).toDateString()}
                        </Text>

                        <View
                            style={{
                                flex: 1,
                                top: '25%',
                                justifyContent: 'space-between',
                                backgroundColor: '#FAFAFA',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                            }}
                        >
                            <View style={styles.bottomBanner} />
                            <View style={styles.bottomBanner} />
                            <View style={styles.bottomBanner} />
                            <View style={styles.bottomBanner} />
                            <View style={styles.bottomBanner} />
                            <View style={styles.bottomBanner} />
                            <View style={styles.bottomBanner} />
                            <View style={styles.bottomBanner} />
                            <View style={styles.bottomBanner} />
                            <View style={styles.bottomBanner} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        width: '100%',
        backgroundColor: '#FAFAFA',
        paddingLeft: 10,
        paddingRight: 10,
    },
    textRubrik: {
        top: 10,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        alignSelf: 'center',
    },
    infoBox: {
        flex: 1,
        top: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    varorTable: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textUnderrubrik1: {
        top: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',
        alignSelf: 'center',
        bottom: 10,
    },
    textUnderrubrik2: {
        top: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline',
        marginLeft: 10,
        bottom: 20,
    },
    text: {
        top: '3%',
        color: 'black',
        marginLeft: 10,
    },
    boldtext: {
        color: 'black',
        fontWeight: 'bold',
        width: 110,
    },
    table: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    map: {
        width: '47%',
        height: '50%',
        alignSelf: 'flex-end',
    },
    knapp: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    bottomBanner: {
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: 'white',
        width: '10%',
        height: '10%',
    },
});

export default withNavigation(ReceiptView);
