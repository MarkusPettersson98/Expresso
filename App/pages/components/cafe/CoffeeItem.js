import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { connect } from 'react-redux';
import { addCoffee, clearCart, addShop } from '../redux/actions';
import { getShopById } from '../../../API/expressoAPI';
import ModalComp from './ChooseMugModal';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: 200,
        width: '50%',
        borderWidth: 10,
        justifyContent: 'center',
        borderColor: '#FAFAFA',
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
        //State for ModalComp - if it is visible or not
        this.state = {
            visible: false,
        };
    }

    coffee = this.props.coffee;

    //Changes state to true, making ModalComp visible
    showModal = () => {
        this.setState({ visible: true });
    };

    //Changes state to false, hiding ModalComp
    hideModal = () => {
        this.setState({ visible: false });
    };

    handleClick = () => {
        if (
            this.props.cart.shopId != this.coffee.shopId &&
            this.props.cart.shopId != null
        ) {
            this.hideModal();
            // If cart contains coffee from another café
            Alert.alert(
                'Varning',
                `Varukorgen innehåller kaffe från ${this.props.cart.shop.name}. Vill du rensa varukorgen och lägga till en ${this.coffee.name} från ${this.props.shopName} istället?`,                [
                    {
                        text: 'Avbryt',
                        style: 'cancel',
                    },
                    {
                        text: 'Rensa',
                        onPress: () => {
                            this.props.onClearCart();
                            this.showModal();
                        },
                    },
                ],
            );
        } else {
            this.showModal();
        }
    };

    resolveShop = shopId => {
        console.log('CoffeeItem: Adding shop to cart .. ', shopId);
        getShopById(shopId)
            .then(shop => {
                // Add shop to cart state
                // But remove drink list first and id ;))
                const { id, drinkList, ...wantedProperties } = shop;

                this.props.onAddShop(wantedProperties);
            })
            .catch(err => {
                console.log('CoffeeItem: Could not resolve shop, ', err);
            });
    };

    //Function to order coffee when ModalComp closes, is sent as props to ModalComp
    //Takes value of ownMug-selection t/f
    orderCoffee = (ownMug, amount) => {
        const {
            coffee: { shopId },
        } = this.props.onAddCoffee({ ...this.coffee, ownMug }, amount);

        // If shop has not been resolved yet, do so in the background
        // and updated cart when done

        const currentShop = this.props.cart.shop;
        if (Object.keys(currentShop).length == 0) {
            this.resolveShop(shopId);
        }
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
                    //state visible is sent as props to ModalComp
                    isVisible={this.state.visible}
                    //Function hideModal is sent as props to be able to hide modal from ModalComp
                    hideModal={() => this.hideModal()}
                    //Function to order coffee from ModalComp
                    orderCoffee={this.orderCoffee}
                />
                <TouchableOpacity
                    onPress={this.handleClick}
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
                        <View style={{ height: 20, width: 20 }}>
                            <SimpleLineIcons
                                name="cup"
                                size={20}
                                color="#5AA3B7"
                            />
                        </View>
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
        onAddCoffee: (coffee, amount) => {
            return dispatch(addCoffee(coffee, amount));
        },
        onClearCart: () => {
            dispatch(clearCart());
        },
        onAddShop: shop => {
            dispatch(addShop(shop));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoffeeItem);
