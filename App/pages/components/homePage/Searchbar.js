/* Generic searchbar */
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Searchbar = ({searchFilter, onChange}) => {
    return (
        <TextInput
            onChangeText={(expression) => {
                const applySearchFilter = (collection) => searchFilter(expression, collection);
                onChange(applySearchFilter);
            }}
            placeholder='Placeholder'
        />
    );
};



export default Searchbar;