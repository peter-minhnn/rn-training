import { createSelector } from 'reselect';

export const selectAllSubcategories = createSelector(
    state => state != undefined ? state : [],
    (state) => (state)
)