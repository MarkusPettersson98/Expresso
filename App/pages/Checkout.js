import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { brygg_kaffe, cappuccino, latte } from './components/dummy-data';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addCoffee } from './components/redux/actions';
import EmptycheckoutPage from './components/checkout/emptyCheckout';
import NonEmptyCheckoutPage from './components/checkout/NonEmptyCheckout';

/**
 * This is the view that is being shown when navigating to checkout.
 * This view has the ability to show
 * NonEmptyCheckoutPage
 * or
 * EmptyCheckoutPage
 * and does so depending on the boolean isCartPopulated.
 *
 * The TouchableOpacities are remnants of when we wanted to have the ability to add items directly from the checkout-view
 * and will be removed in stable versions.
 */

class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCartPopulated: props.cart.amount };
    }

    // Intended effect:  If props is updated this function is called, we check if cart is empty, if empty, update the component (re-render)
    shouldComponentUpdate(nextProps) {
        // if and ONLY if newCart is empty AND the current cart is NOT empty: we update state and rerender.
        if (nextProps.cart.amount === 0 && this.state.isCartPopulated !== 0) {
            this.setState({ isCartPopulated: nextProps.cart.amount });
            return true;
        }
        return false;
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flex: 5,
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    {!this.state.isCartPopulated ? (
                        <EmptycheckoutPage />
                    ) : (
                        <NonEmptyCheckoutPage />
                    )}
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { cart: state.cart };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddItem: coffee => {
            dispatch(addCoffee(coffee));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CheckoutPage);
