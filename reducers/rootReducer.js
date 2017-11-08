import {combineReducers} from 'redux';
import recipes from './recipeListReducer';
import recipeForm from './recipeFormReducer';

const rootReducer = combineReducers({
    recipes,
    recipeForm,
});

export default rootReducer;
