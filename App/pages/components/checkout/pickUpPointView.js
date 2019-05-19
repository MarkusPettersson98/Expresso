import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { getShopById } from '../../../API/expressoAPI';

/**
 * This is the component that displays where the coffe should be picked up, or rather where the coffe is ordered from.
 * Currently, this component is static, meaning it doesnt change, it always displays bulten.
 * This will be fixed when we pass in a props of what coffeshop it should display. Since its parent component is
 * nonemptycheckout the passing of props should be done there, or possibly it could use redux state.
 *
 */

export default class PickUpPoint extends React.Component {
    constructor() {
        super();
        this.state = {
            shop: {
                name: '',
            },
        };
    }

    // when mounted first time
    async componentDidMount() {
        // Fetch data about which shop we are purchasing coffee from
        const requestedShop = await getShopById(this.props.shopId);
        // This is a whole shop object, which carries more data than just name, e.g. street, coordinates ..
        this.setState({
            shop: requestedShop,
        });
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    marginHorizontal: 24,
                    marginTop: 16,
                    marginBottom: 10,
                    paddingBottom: 20,
                    width: '100%',
                    paddingLeft: 25,
                }}
            >
                <Text style={styles.titleText}>
                    {/* Show where to pick up coffee (shop name) */}
                    Hämtas på {this.state.shop.name}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 16,
                    }}
                >
                    <FontAwesome
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 5,
                        }}
                        name="map-pin"
                        size={20}
                        color="#57454B"
                    />
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                            flex: 1,
                            paddingHorizontal: 20,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'column',
                            }}
                        >
                            {/* Shop name */}
                            <Text style={styles.cafeText}>
                                {this.state.shop.name}
                            </Text>
                            {/* Street address of shop */}
                            <Text style={styles.locationText}>
                                {this.state.shop.street}
                            </Text>
                        </View>
                        <Ionicons name="ios-arrow-up" size={20} color="gray" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#57454B',
    },
    cafeText: {
        fontWeight: '500',
        fontSize: 20,
        color: '#57454B',
    },
    locationText: {
        fontSize: 14,
        color: '#7C7074',
    },
});
