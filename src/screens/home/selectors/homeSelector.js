import { createSelector } from 'reselect';

const getDataCategories = state => state != undefined ? state.subcategories : [];

export const selectSubcategories = createSelector(
    state => state != undefined ? state.subcategories : [],
    (subcategories) => subcategories
)
