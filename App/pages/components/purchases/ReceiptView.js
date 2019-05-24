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
import MiniMap from './MiniMap';

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

    componentDidMount() {
        this.setState({
            receipt: this.props.receipt,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // const wantedReceipt = await getReceipt(this.props.receiptId);
        if (prevProps.receipt !== this.props.receipt) {
            this.setState({
                receipt: this.props.receipt,
            });
        }
    }

    createBanner = () => {
        const list = [];

        for (let i = 0; i < 8; i++) {
            list.push(<View key={i} style={styles.bottomBanner} />);
        }

        return list;
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoBox}>
                    <View>
                        <Text style={styles.textRubrik}> Kvitto </Text>
                    </View>
                    <Text style={styles.textUnderrubrik1} />

                    <View style={styles.varorTable}>
                        <Text
                            style={{
                                color: '#57454B',
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
                                color: '#57454B',
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
                            borderBottomWidth: 3,
                            borderColor: '#FAFAFA',
                        }}
                    />
                    <View style={styles.botContainer}>
                        <View style={styles.bot}>
                            <Text style={styles.textUnderrubrik2}>
                                
                            
                                {this.state.receipt.shop.name}{', '}{this.state.receipt.shop.street}{'\n'}
                            </Text>

                            <Text style={styles.text}>
                                Totalpris: {this.state.receipt.totalPrice}{'kr '}
                                
                            </Text>
                            <Text style={styles.text}>
                                {new Date(
                                    this.state.receipt.date,
                                ).toString()}{' '}
                                {'\n'}
                            </Text>
                        </View>

                        <View style={styles.botMap}>
                            <MiniMap
                                shop={this.state.receipt.shop}
                                style={styles.map2}
                            />
                        </View>
                    </View>

                    <View style={styles.bannerContainer}>
                        {this.createBanner()}
                    </View>
                </View>

                <View style={styles.hardKod} />
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
        paddingHorizontal: 10,
    },
    textRubrik: {
        top: 5,
        color: '#57454B',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    infoBox: {
        flex: 1,
        top: 20,
        backgroundColor: '#C4DEE5',
        borderRadius: 10,
        paddingHorizontal: 14,
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
        color: '#57454B',
        alignSelf: 'center',
        bottom: 10,
    },
    textUnderrubrik2: {
        top: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#57454B',
        marginLeft: 10,
        bottom: 60,
    },
    text: {
        top: '3%',
        color: '#57454B',
        marginLeft: 10,
    },
    boldtext: {
        color: '#57454B',
        fontWeight: 'bold',
        width: 110,
    },
    hardKod: {
        width: '100%',
        height: 50,
        backgroundColor: '#FAFAFA',
        top: 40,
    },
    botContainer: {
        width: '100%',
        height: '100%',
        flex: 7,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    bot: {
        width: '50%',
        height: '100%',
        justifyContent: 'space-evenly',
    },
    botMap: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9,
    },
    bannerContainer: {
        flex: 1,
        top: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: -14,
    },
    bottomBanner: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FAFAFA',
        width: '11%',
        height: '100%',
    },
});

export default withNavigation(ReceiptView);
