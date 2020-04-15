import { createSelector } from 'reselect';

const getDataCategories = state => state != undefined ? state.subcategories : [];

export const selectSubcategories = createSelector(
    [getDataCategories],
    (subcategories) => subcategories
)
