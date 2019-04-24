import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { addCoffee } from '../redux/actions';

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

const CoffeeItem = props => {

    const coffee = props.coffee;

    return (
        <View
            style={{
                height: 100,
                width: '100%',
            }}
        >
            <TouchableOpacity
                onPress={() => props.onAddCoffee(coffee)}
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
                        <Text
                            style={styles.titleText}
                        >
                            {coffee.name}
                        </Text>
                        <Text
                            style={styles.descText}
                        >
                            {coffee.description}
                        </Text>
                    </View>

                </View>
                <View>
                    <Text
                        style={styles.priceText}
                    >{`${coffee.price} kr`}
                    </Text>
                </View>

            </TouchableOpacity>

        </View>
    );
};


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