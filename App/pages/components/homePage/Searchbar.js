import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Searchbar = (props) => {
    return (
        <TextInput
            onChangeText={(expression) => {
                const applySearchFilter = (collection) => searchFilter(expression, collection);
                props.onChange(applySearchFilter);
            }}
            placeholder='Placeholder'
        />
    );
};

const searchFilter = (expression, collection) => {
    // Given an expression/text and a collection of strings, for every element in collection
    // check if (sub)string from collection matches expression

    // eg, if collection.element = bulten, expression = bul ----> bul === bul // true

    // Match shop names against expression (match all against empty string)
    const partialMatch = ({ name }) => {
        const partialName = name.slice(0, expression.length);
        const lowerCaseExpression = expression.toLowerCase();
        const lowerCasePartialName = partialName.toLowerCase();
        return '' === lowerCaseExpression || lowerCasePartialName === lowerCaseExpression;
    };

    // Return all partial matches in collection
    return collection.filter(partialMatch);
};

export default Searchbar;