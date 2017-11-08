import * as types from './actionTypes';
import axios from 'axios';

// Action
export function updateNewRecipeTitleSuccess (title) {
    return {type: types.UPDATE_NEW_RECIPE_TITLE, title};
}
// Thunk
export function updateNewRecipeTitle (title) {
    return function (dispatch) {
        return dispatch(updateNewRecipeTitleSuccess(title));
    }
}
// Action
export function createRecipeSuccess (recipe) {
    return {type: types.CREATE_RECIPE_SUCCESS, recipe};
}
// Thunk
export function createRecipe (recipe) {
    return function (dispatch) {
        // Do some ajax to save recipe here
        return dispatch(createRecipeSuccess(recipe));
    }
}
// Action
export function loadRecipesSuccess (recipes) {
    return {type: types.LOAD_RECIPES_SUCCESS, recipes};
}
// Thunk
export function loadRecipes () {
    return function (dispatch) {
        return axios.get('/api/recipes')
            .then(response => {
                dispatch(loadRecipesSuccess(response.data.recipes));
            })
            .catch(err => {
                throw(err);
            });
    };
}
