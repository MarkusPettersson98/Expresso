import React from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

import { withNavigation } from 'react-navigation';

const ShopView = ({ name, picture, street, navigation }) => {
    return (
        <View style={styles.item}>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('Cafe', {
                        selectedShop: name,
                        picture: picture,
                    });
                }}
            >
                <View style={styles.card}>
                    <View style={styles.bgcontainer}>
                        <ImageBackground
                            source={picture}
                            resizeMode="cover"
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.infobox}>
                        <Text style={styles.cafetext}>{name}</Text>
                        <Text style={styles.subtext}>{street}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = {
    item: {
        height: 240,
        marginVertical: 14,
        marginHorizontal: 24,
        borderRadius: 20,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    card: {
        width: '100%',
        height: '100%',
    },
    bgcontainer: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        top: 0,
    },
    infobox: {
        width: '100%',
        height: '25%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
    },
    cafetext: {
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
    },
    image: {
        width: '100%',
        height: '100%',
    },
};

export default withNavigation(ShopView);