import * as types from '../actions/actionTypes';

// The recipe list reducer should always return an array of recipes
export default function (state = [], action) {
    switch (action.type) {
        case types.LOAD_RECIPES_SUCCESS:
            return [...action.recipes];
            break;
        case types.CREATE_RECIPE_SUCCESS:
            return state.concat(action.recipe);
            break;
        default:
            return state;
    }
}
