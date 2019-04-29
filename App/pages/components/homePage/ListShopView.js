import React from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

import { withNavigation } from 'react-navigation';

const ShopView = ({ name, picture, navigation }) => {

    return (
        <View style={styles.item}>
            <TouchableWithoutFeedback onPress={() => {
                console.log('navigate', navigation);
                navigation.navigate('Cafe', { selectedShop: name })}
            }>
                <ImageBackground
                    source={picture}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <Text style={styles.text}>{name}</Text>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = {
    item: {
        height: 200,
        borderTopWidth: 7,
        borderLeftWidth: 14,
        borderBottomWidth: 7,
        borderRightWidth: 14,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
    },
};

export default withNavigation(ShopView);
