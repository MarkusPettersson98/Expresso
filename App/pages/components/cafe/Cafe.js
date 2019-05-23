import React from 'react';
import { View } from 'react-native';

import CoffeeList from './CoffeeList';
import CafeHeader from './CafeHeader';

import CartField from './../CartField';
import {
    getAllCoffeeFromAShop,
    getShopPicture,
} from '../../../API/expressoAPI';

/**
 * @file This is the order page entry point. When a user selects a shop they are sent here.
 *
 * Order.js is broken down into three main components. A header, the coffee assortment and a footer
 * with information about the current order, such as number of coffees currently in cart and total price.
 *
 * Order.js is responsible for passing down information about the selected shop aswell as the cart
 * to it's child component.
 *
 */

class Cafe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopName: props.navigation.state.params.selectedShop,
            CoffeItems: [],
            shopPicture: props.navigation.state.params.picture,
            street: props.navigation.state.params.street,
        };
    }

    async componentDidMount() {
        const allCoffees = await getAllCoffeeFromAShop(this.state.shopName);
        // Did component get passed a picture?  if so, use that, else, fetch that picture.
        const picture = this.props.navigation.state.params.picture
            ? this.props.navigation.state.params.picture
            : await getShopPicture(this.state.shopName);

        Promise.all([allCoffees, picture]).then(([coffees, picture]) => {
            this.setState({
                ...this.state,
                CoffeItems: coffees,
                shopPicture: picture,
            });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CafeHeader picture={this.state.shopPicture} name={this.state.shopName} address={this.state.street} />
                <CoffeeList coffeeItems={this.state.CoffeItems} />
                <View style={{ marginBottom: 30 }}>
                    <CartField />
                </View>
            </View>
        );
    }
}

export default Cafe;
