import React from 'react';
import {connect} from 'react-redux';
import Recipe from '../recipe/Recipe';
import RecipeForm from '../recipeForm/RecipeForm';

class RecipeList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            recipes: [],
        };
    }
    // componentDidMount () {
    //     window.setInterval(() => {
    //         console.log(this.state, 'props', this.props);
    //     }, 1000);
    // }
    render () {
        return (
            <div>
                <h2>Recipes</h2>
                <RecipeForm />
                {this.props.recipes.map((recipe, index) => <Recipe {...recipe} key={index} />)}
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        recipes: state.recipes,
    };
}

export default connect(mapStateToProps)(RecipeList)
