import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
    item: {
        height: 200,
        width: '50%',
        borderWidth: 10,
        justifyContent: 'center',
        borderColor: '#F0F7F4',
        backgroundColor: 'black',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
});

const BlockShopView = ({ index, name, picture, navigate }) => {
    return (
        <View style={styles.item}>
            <TouchableWithoutFeedback
                onPress={() => navigate('Order', { selectedShop: name })}
            >
                <ImageBackground
                    key={index}
                    source={picture}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 20,
                    }}
                    resizeMode="cover"
                >
                    <Text style={styles.text}>{name}</Text>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default BlockShopView;
