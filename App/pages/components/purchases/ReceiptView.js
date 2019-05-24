import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CoffeeDisplay from './CoffeeDisplay';
import MiniMap from './MiniMap';

class ReceiptView extends Component {
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

    componentDidUpdate(prevProps) {
        if (prevProps.receipt !== this.props.receipt) {
            this.setState({
                receipt: this.props.receipt,
            });
        }
    }

    createBanner = () => {
        const banners = [];

        for (let i = 0; i < 8; i++) {
            banners.push(<View key={i} style={styles.bottomBanner} />);
        }

        return banners;
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoBox}>
                    <View style={styles.content}>
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
                            <CoffeeDisplay
                                coffees={this.state.receipt.coffees}
                            />
                        </ScrollView>
                    </View>
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
                                {this.state.receipt.shop.name}
                            </Text>
                            <Text style={styles.text}>
                                {this.state.receipt.shop.street}
                            </Text>
                            <Text style={styles.text}>
                                Totalpris: {this.state.receipt.totalPrice}
                                {'kr '}
                            </Text>
                            <Text style={styles.text}>
                                {new Date(this.state.receipt.date).toString()}{' '}
                                {'\n'}
                            </Text>
                        </View>

                        <View style={styles.botMap}>
                            <MiniMap
                                shop={this.state.receipt.shop}
                                style={styles.map2}
                            />
                            <View style={styles.overlay} />
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
    content: {
        height: '30%',
        paddingBottom: 3,
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
        height: '60%',
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
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 100,
        opacity: 1,
    },
});

export default ReceiptView;
