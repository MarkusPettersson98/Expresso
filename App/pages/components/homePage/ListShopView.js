import React from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const ShopView = ({ name, picture, street, numcoffees, navigation }) => {
    return (
        <View style={styles.item}>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('Cafe', {
                        selectedShop: name,
                        picture: picture,
                        street: street,
                    });
                }}
            >
                {/* Hela kafékortet */}
                <View style={styles.card}>
                    {/* Containern som innehåller bilden */}
                    <View style={styles.bgcontainer}>
                        <ImageBackground
                            source={picture}
                            resizeMode="cover"
                            style={styles.image}
                        />
                    </View>
                    {/* Rutan som visar namn, gata och antal kaffen */}
                    <View style={styles.infobox}>
                        {/* Container för kafénamn och gata */}
                        <View style={styles.cafetext}>
                            <Text style={styles.cafename}>{name}</Text>
                            <Text style={styles.subtext}>{street}</Text>
                        </View>
                        {/* Container för kafferäknaren */}
                        <View style={styles.cafecounter}>
                            <Text style={styles.coffeenumber}>
                                {numcoffees}
                            </Text>
                            <View style={{ width: 20, height: 20 }}>
                                <Ionicons
                                    name="ios-cafe"
                                    size={20}
                                    color={'#57454B'}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = {
    item: {
        height: 260,
        marginVertical: 14,
        marginHorizontal: 24,
        borderRadius: 10,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    card: {
        width: '100%',
        height: '100%',
    },
    bgcontainer: {
        width: '100%',
        height: '70%',
        position: 'absolute',
        top: 0,
    },
    infobox: {
        width: '100%',
        height: '30%',
        backgroundColor: '#FFF',
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
    },
    cafetext: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
    },
    cafename: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#57454B',
        marginLeft: 15,
    },
    subtext: {
        fontWeight: 'normal',
        fontSize: 14,
        color: '#57454B',
        opacity: 0.8,
        marginLeft: 15,
        marginTop: 2,
    },
    cafecounter: {
        width: '20%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    coffeenumber: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#57454B',
        marginRight: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
};

export default withNavigation(ShopView);