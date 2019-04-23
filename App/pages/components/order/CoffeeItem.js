import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
    nameText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
});

const CoffeeItem = ({ name, price, description }) => {

    const getCoffeeButtonHandler = () => {

        console.log('Kaffesort: ' + name, 'Pris: ' + price);
    }
    return (
        <View
            style={{
                flexDirection: 'row',
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
                    flex: 1,
                }}
            >
                <SimpleLineIcons name="cup" size={20} color="#57454B" />
            </View>
            <View
                style={{
                    flex: 4,
                }}
            >
                <Text style={styles.titleText}>{name}</Text>
                <Text style={styles.descText}>{description}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                    }}
                >
                    <TouchableOpacity
                        // onPress={() => checkDecrementCoffee(orderItem)}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <AntDesign
                            name="minuscircleo"
                            size={20}
                            color="#5AA3B7"
                        />
                    </TouchableOpacity>

                    {/* <Text style={styles.numberText}>{orderItem.amount}</Text> */}

                    <TouchableOpacity
                        // onPress={() => props.onIncrementCoffee(orderItem)}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <AntDesign
                            name="pluscircleo"
                            size={20}
                            color="#5AA3B7"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end',
                }}
            >
                <Text style={styles.priceText}>{`${price} kr`}</Text>
            </View>
        </View>
    );
};

export default CoffeeIcon;
