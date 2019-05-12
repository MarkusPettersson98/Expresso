import React from 'react';
import { View } from 'react-native';

import CoffeeList from './CoffeeList';
import CafeHeader from './CafeHeader';

import CartField from './../CartField';
import { getAllCoffeeFromAShop } from '../../../API/expressoAPI';

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
            shop: props.navigation.state.params.selectedShop,
            CoffeItems: [],
        };
    }

    async componentDidMount() {
        const allCoffees = await getAllCoffeeFromAShop(this.state.shop);

        Promise.all(allCoffees).then(CoffeeList => {
            this.setState({ ...this.state, CoffeItems: CoffeeList });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CafeHeader
                    picture={this.props.navigation.state.params.picture}
                />
                <CoffeeList coffeeItems={this.state.CoffeItems} />
                <View style={{ marginBottom: 30 }}>
                    <CartField />
                </View>
            </View>
        );
    }
}

export default Cafe;
