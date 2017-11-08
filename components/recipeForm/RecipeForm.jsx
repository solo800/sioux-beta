import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as recipeActions from '../../actions/recipeActions';

class RecipeForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            title: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange (event) {
        console.log('changed', this.state.title, ' | ', event.target.value);
        this.props.actions.updateNewRecipeTitle(event.target.value);
        console.log('done', this.state.title);
    }

    onSubmit (event) {
        event.preventDefault();
        console.log('submit');
        const title = Array.from(event.target.childNodes).filter(child => 'title' === child.getAttribute('name'))[0].value;

        if ('' !== title) {
            console.log('dispatching action');
            this.props.actions.createRecipe({title});
            this.setState({title: ''});
        } else {
            // Do some warning because the title was blank and no recipe was created
        }
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' name='title'
                    placeholder='New Recipe Title'
                    value={this.props.title}
                    onChange={this.onChange} />
            </form>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        title: state.recipeForm.title,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(recipeActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
