import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput} from 'react-native';
import Topcomp from './components/homePage/Topcomp';
import Listcomp from './components/homePage/Listcomp';
import Blockcomp from './components/homePage/Blockcomp';
import Mapcomp from './components/homePage/Mapcomp';

import shops from './components/dummy-data';

const searchFilter = (expression, collection) => {
    // Given an expression/text and a collection of strings, for every element in collection
    // check if (sub)string from collection matches expression

    // eg, if collection.element = bulten, expression = bul ----> bul === bul // true

    // Match shop names against expression (match all against empty string)
    const partialMatch = ({name}) => {
        const partialName = name.slice(0, expression.length);
        const lowerCaseExpression = expression.toLowerCase();
        const lowerCasePartialName = partialName.toLowerCase();
        return '' === lowerCaseExpression || lowerCasePartialName === lowerCaseExpression;
    };

    // Return all partial matches in collection
    return collection.filter(partialMatch);
};

export default class Homepage extends Component {
    state = {
        toggle: 'LV',
        filteredShops: shops,
    };
    _pressLV = () => this.setState({ toggle: 'LV' });
    _pressBV = () => this.setState({ toggle: 'BV' });
    _pressMV = () => this.setState({ toggle: 'MV' });

    render() {
        return (
            <View style={styles.container}>
                <Topcomp />
                <View style={styles.butcontainer}>
                    <Button
                        title="List"
                        style={styles.item}
                        onPress={this._pressLV}
                        color="black"
                    />
                    <Button
                        title="Block"
                        style={styles.item}
                        onPress={this._pressBV}
                        color="black"
                    />
                    <Button
                        title="Map"
                        style={styles.item}
                        onPress={this._pressMV}
                        color="black"
                    />
                </View>

                <TextInput 
                onChangeText = {(search) => {
                    this.setState({filteredShops: searchFilter(search, shops)});
                }}
                placeholder = 'Placeholder'
                />

                {this.state.toggle == 'LV' && <Listcomp shops={this.state.filteredShops}/>}
                {this.state.toggle == 'BV' && <Blockcomp shops={this.state.filteredShops}/>}
                {this.state.toggle == 'MV' && <Mapcomp shops={this.state.filteredShops}/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    butcontainer: {
        height: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F7F4',
        borderBottomWidth: 5,
    },
    item: {
        width: '33%',
        justifyContent: 'center',
        backgroundColor: '#F0F7F4',
        textDecorationLine: 'none',
    },
});
