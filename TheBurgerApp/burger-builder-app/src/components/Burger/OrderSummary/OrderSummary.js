import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}
                </span>:{props.ingredients[igKey]}
            </li>);
        });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with this list of </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Contineu to CheckOut? </p>
        </Auxiliary>
    )
}

export default orderSummary;