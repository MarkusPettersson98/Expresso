import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { addCoffee } from '../redux/actions';
import ModalComp from './ChooseMugModal';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: 200,
        width: '50%',
        borderWidth: 10,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'brown',
        alignItems: 'center',
        borderRadius: 40,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#7C6A70',
    },
    priceText: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#7C6A70',
        textAlign: 'right',
    },
});

class CoffeeItem extends React.Component {
    constructor(props) {
        super(props);
        //State som används för ModalComp - om den ska vara synlig eller inte
        this.state = {
            visible: false,
        };
    }

    coffee = this.props.coffee;

    //Ändrar state till true och visar ModalComp
    showModal = () => {
        this.setState({ visible: true });
    };

    //Ändrar state till false och döljer ModalComp
    hideModal = () => {
        this.setState({ visible: false });
    };

    //Funktion för att beställa kaffet när Modal stängs, skickas med som props till Modal
    // todo: ska kunna ta med värde på ownMug för att skicka med, för att visa om egen eller
    // lånad mugg ska användas
    orderCoffee = ownMug => {
        this.props.onAddCoffee({ ...this.coffee, ownMug: ownMug });
        console.log('ownMug: ' + ownMug);
    };

    render() {
        return (
            <View
                style={{
                    height: 100,
                    width: '100%',
                }}
            >
                <ModalComp
                    //state visible skickas in som en props till ModalComp
                    isVisible={this.state.visible}
                    //Funktionen hideModal skickas in som en props för att kunna dölja Modal från ModalComp
                    hideModal={() => this.hideModal()}
                    //Funktion för att beställa kaffet från Modal
                    orderCoffee={() => this.orderCoffee(ownMug)}
                />
                <TouchableOpacity
                    onPress={this.showModal}
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 24,
                        marginTop: 16,
                        marginBottom: 10,
                        borderBottomColor: '#D7D7D7',
                        borderBottomWidth: 1,
                        paddingBottom: 20,
                    }}
                >
                    <View
                        style={{
                            flex: 4,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <SimpleLineIcons name="cup" size={20} color="#5AA3B7" />
                        <View
                            style={{
                                flex: 4,
                                flexDirection: 'column',
                                paddingLeft: 10,
                            }}
                        >
                            <Text style={styles.titleText}>
                                {this.coffee.name}
                            </Text>
                            <Text style={styles.descText}>
                                {this.coffee.description}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.priceText}>{`${
                            this.coffee.price
                        } kr`}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { cart: state.cart };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddCoffee: coffee => {
            dispatch(addCoffee(coffee));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoffeeItem);
