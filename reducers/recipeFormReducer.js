import * as types from '../actions/actionTypes';

export default function (state = {title: ''}, action) {
    switch (action.type) {
        case types.UPDATE_NEW_RECIPE_TITLE:
            return {title: action.title};
            break;
        case types.CREATE_RECIPE_SUCCESS:
            return {title: ''};
            break;
        case types.CREATE_RECIPE_FAIL:
            return {title: action.title};
            break;
        default:
            return state;
    }
}
