import React from 'react';

const Recipe = (props) => {
    const {title, ingredients} = props;

    const ingredientCount = undefined !== ingredients ? ingredients.length : 0;

    return (
        <div>
            <span>{title}</span>
            <span>Ingredients: {ingredientCount}</span>
        </div>
    );
}

export default Recipe;
// class Recipe extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             title: undefined === props.title ? '' : props.title,
//             ingredients: undefined === props.ingredients ? [] : props.ingredients,
//         };
//     }
//
//     render () {
//         console.log('state', this.state, 'props', this.props);
//         const {title, ingredients} = this.state;
//         return (
            // <div>
            //     <span>{title}</span>
            //     <span>Ingredients: {ingredients.length}</span>
            // </div>
//         );
//     }
// }
//
// function mapStateToProps (state, ownProps) {
//     console.log('mapping', state, 'own', ownProps);
//     return {
//         title: state.title,
//         ingredients: state.ingredients,
//     };
// }
//
// export default connect(mapStateToProps)(Recipe);
