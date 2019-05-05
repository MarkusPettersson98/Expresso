import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { addCoffee } from '../redux/actions';
import ModalComp from './ChooseMugModal';

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

    //State som används för ModalComp - om den ska vara synlig eller inte
    //För att testa knappen "Lägg till" i Modal samt att hideModal anropas,
    //ändra värde till true så kommer Modal dyka upp såfort man går in
    //från ett café till kaffe-listan
    this.state = {
        visible: false,
    };

    //Ändrar state för visible till true eller false
    this.setState = val => {
        this.state.visible = val;
    };

    //Ändrar state till true och (ska) visa ModalComp
    showModal = () => {
        this.setState(true);
        console.log(
            'showModal anropas -  state.visible: ' + this.state.visible,
        );
    };

    //Ändrar state till false och (ska) dölja ModalComp
    hideModal = () => {
        this.setState(false);
        console.log('hideModal anropas - state.visible: ' + this.state.visible);
    };

    //Vad som utförs när man klickar på ett godtyckligt CoffeeItem
    handleClick = () => {
        showModal();
        props.onAddCoffee(coffee);
    };

    return (
        <View
            style={{
                height: 100,
                width: '100%',
            }}
        >
            <ModalComp
                //state visible skickas in som en props till ModalComp
                isVisible={this.state.visible}
                //Funktionen hideModal skickas in som en props för att kunna ändra state visible från ModalComp
                hideModal={this.hideModal}
                //Kommer även skicka med en funktion som kan ta tillbaka värdet på knappens ownMug
                //tillbaka hit
            />
            <TouchableOpacity
                onPress={this.handleClick}
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
                        <Text style={styles.titleText}>{coffee.name}</Text>
                        <Text style={styles.descText}>
                            {coffee.description}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.priceText}>{`${coffee.price} kr`}</Text>
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
