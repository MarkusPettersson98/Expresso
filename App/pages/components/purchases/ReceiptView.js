import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CoffeeDisplay from './CoffeeDisplay';
import MiniMap from './MiniMap';
import LottieView from 'lottie-react-native';

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
        setTimeout(() => {
            this.animation.play();
        }, 2000);
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

        for (let i = 0; i < 9; i++) {
            banners.push(<View key={i} style={styles.bottomBanner} />);
        }

        return banners;
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.receipt}>
                    <View style={styles.lottiecontainer}>
                        <LottieView
                            style={styles.lottieview}
                            ref={animation => {
                                this.animation = animation;
                            }}
                            source={require('../resources/swipeup.json')}
                            speed={0.5}
                            loop={false}
                        />
                    </View>
                    <View style={styles.content}>
                        <View style={{ marginTop: 10, marginBottom: 20 }}>
                            <Text style={styles.textRubrik}> Kvitto </Text>
                        </View>

                        <View style={styles.varorTable}>
                            <View style={styles.outerLeft}>
                                <Text style={styles.boldtext}>Antal</Text>
                            </View>
                            <View style={styles.innerLeft}>
                                <Text style={styles.boldtext}>Kaffetyp</Text>
                            </View>
                            <View style={styles.innerRight}>
                                <Text style={styles.boldtext}>Muggval</Text>
                            </View>
                            <View style={styles.outerRight}>
                                <Text style={styles.boldtext}>Pris</Text>
                            </View>
                        </View>
                        <CoffeeDisplay coffees={this.state.receipt.coffees} />
                        <View style={styles.totalcontainer}>
                            <View style={styles.totaltext}>
                                <Text style={styles.subtext}>Total:</Text>
                            </View>
                            <View style={styles.totalprice}>
                                <Text style={styles.subtext}>
                                    {this.state.receipt.totalPrice}
                                    {' kr '}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.locationheader}>
                        <Text style={styles.locationheadertext}>
                            Här hittar du din order
                        </Text>
                    </View>
                    <View style={styles.botContainer}>
                        <View style={styles.location}>
                            <Text style={styles.boldtext}>
                                {this.state.receipt.shop.name}
                            </Text>
                            <Text style={styles.subtext}>
                                {this.state.receipt.shop.street}
                            </Text>
                            <View style={styles.datecont}>
                                <Text style={styles.datetext}>
                                    {new Date(
                                        this.state.receipt.date,
                                    ).toString()}{' '}
                                    {'\n'}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.map}>
                            <MiniMap shop={this.state.receipt.shop} />
                            <View style={styles.overlay} />
                        </View>
                    </View>

                    <View style={styles.goodbye}>
                        <Text style={styles.subtext}>
                            Tack för ditt köp! Välkommen åter.
                        </Text>
                    </View>

                    <View style={styles.bannerContainer}>
                        {this.createBanner()}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        width: '100%',
        backgroundColor: '#FAFAFA',
        paddingHorizontal: 10,
    },
    lottiecontainer: {
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 300,
        zIndex: 10,
    },
    lottieview: {
        width: '100%',
        height: 250,
        marginTop: 20,
        zIndex: 10,
    },
    textRubrik: {
        top: 5,
        color: '#57454B',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    receipt: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#C4DEE5',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        width: '100%',
        marginBottom: 20,
    },
    content: {
        marginBottom: 20,
        marginHorizontal: 10,
    },
    varorTable: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    },
    locationheader: {
        alignSelf: 'center',
        marginBottom: 20,
    },
    locationheadertext: {
        color: '#57454B',
        fontSize: 22,
        fontWeight: '600',
    },
    outerLeft: {
        flex: 1.5,
    },
    innerLeft: {
        flex: 2.5,
    },
    innerRight: {
        flex: 2,
    },
    outerRight: {
        flex: 1,
    },
    boldtext: {
        color: '#57454B',
        fontWeight: 'bold',
        fontSize: 20,
    },
    totalcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 5,
        borderTopWidth: 1,
        borderTopColor: '#57454B',
        paddingTop: 5,
    },
    totaltext: {
        flex: 6,
    },
    totalprice: {
        flex: 1,
    },
    botContainer: {
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    bannerContainer: {
        height: 30,
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        flex: 1,
    },
    datecont: {
        position: 'absolute',
        bottom: 0,
    },
    datetext: {
        fontSize: 16,
        color: '#57454B',
    },
    subtext: {
        color: '#57454B',
        fontSize: 18,
    },
    bottomBanner: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#FAFAFA',
        width: '12%',
        height: '100%',
        marginTop: '4%',
    },
    map: {
        flex: 1,
        alignItems: 'flex-end',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 100,
        opacity: 1,
    },
    goodbye: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 20,
    },
});

export default ReceiptView;