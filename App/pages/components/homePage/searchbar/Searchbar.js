/* Generic searchbar */
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Searchbar = ({ searchFilter, onChange }) => {
    return (
        <TextInput
            onChangeText={(expression) => {
                const applySearchFilter = (collection) => searchFilter(expression, collection);
                onChange(applySearchFilter);
            }}
            placeholder='Sök café ..'
            style={styles.searchText}
            clearButtonMode={'while-editing'}
        />
    );
};

const styles = StyleSheet.create({
    searchText: {
        fontSize: 26,
        fontWeight: 'normal',
        color: '#57454B',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: 1,
    }
});



export default Searchbar;