import React from 'react';
import Searchbar from './Searchbar';

import { searchFilter, partialMatch } from './SearchFilter';

const ShopSearchbar = (props) => {
    return (
        <Searchbar
            searchFilter={shopSearchFilter}
            onChange={props.onChange}
        />
    );
};

export const shopSearchFilter = (expression, shops) => {
    return searchFilter(expression, shops, shopPartialMatch);
};

// Specialized partialMatch intended for shop objects
export const shopPartialMatch = ({ name }, expression) => partialMatch(name, expression);


export default ShopSearchbar;