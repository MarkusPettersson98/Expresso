export const searchFilter = (expression, collection, specializedPartialMatch) => {
    // Given an expression/text and a collection of strings, for every element in collection
    // check if (sub)string from collection matches expression

    // Match shop names against expression 
    const partialMatchExpression = (item) => specializedPartialMatch(item, expression);
    // Return all partial matches in collection
    return collection.filter(partialMatchExpression);
};

// check if (sub)string of reference matches expression
// eg, if refernce = bulten, expression = bul ----> bul === bul // true
// all references matches the empty string
export const partialMatch = (reference, expression) => {
    const partialReference = reference.slice(0, expression.length);
    const lowerCaseExpression = expression.toLowerCase();
    const lowerCasePartialReference = partialReference.toLowerCase();
    return '' === lowerCaseExpression || lowerCasePartialReference === lowerCaseExpression;
};