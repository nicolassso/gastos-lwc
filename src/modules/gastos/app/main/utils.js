// import * as fs from 'fs';
/**
 * @argument = Array
 * @return = Object
 * Return an object from the entries file, summing all the keys into the same category.
 * Finds if the category is already existing in the object, if it is existing, it adds the new key to the category.
 */
export function entriesToObject(CURRENT_ENTRIES) {
    let object = {};
    let categories = [];
    CURRENT_ENTRIES.forEach((e) => {
        if (!categories.includes(e.category)) {
            categories.push(e.category);
            object = {
                ...object,
                [e.category]: e.key
                    ? { [e.key]: e.quantity.reduce((a, b) => a + b, 0) }
                    : e.quantity || 0,
            };
        } else {
            object = {
                ...object,
                [e.category]: {
                    ...object[e.category],
                    [e.key]: e.quantity.reduce((a, b) => a + b, 0),
                },
            };
        }
    });
    return object;
}
/**
 * @argument = Object returned from entriesToObject()
 * @returns = Object
 * Returns an object with the keys being the category of every possible expense, and the value being the sum of all the different keys within the category.
 */
export function totalExpensesByCategory(expenses) {
    let totalSpentByCategories = {};
    const expensesArray = Object.entries(expenses);
    expensesArray.forEach((category) => {
        const keysArray = Object.values(category[1]);
        const totalKeyExpenses = keysArray.reduce(
            (prevKey, currKey) => prevKey + currKey,
            0
        );
        const nestedObject = Object.values(keysArray)[1];
        const isNumber = typeof category[1] === 'number';
        const isNestedObject = typeof nestedObject === 'object';

        totalSpentByCategories = {
            ...totalSpentByCategories,
            [category[0]]: totalKeyExpenses,
        };

        if (isNestedObject) {
            totalSpentByCategories = {
                ...totalSpentByCategories,
                [category[0]]: Object.values(category[1])[0],
            };
        }
        if (isNumber) {
            totalSpentByCategories = {
                ...totalSpentByCategories,
                [category[0]]: category[1],
            };
        }
    });
    return totalSpentByCategories;
}
/** 
 * @argument = Object returned from totalExpensesByCategory()
 * @returns = Number 
 * Returns the total sum of all the different expenses.
 */
export function totalExpenses(totalSpentByCategories) {
    const expensesArray = Object.values(totalSpentByCategories);

    const totalSpent = expensesArray.reduce((prev, curr) => prev + curr, 0);

    return totalSpent;
}
