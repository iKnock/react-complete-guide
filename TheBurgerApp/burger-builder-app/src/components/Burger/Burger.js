import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngrediant/BurgerIngrediant'

const burger = (props) => {

    //This is how to flat an object to array of jsx element having values of ingredients object
    let transformedIngredients = Object.keys(props.ingredients)//an array of the key of the object
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    console.log(transformedIngredients);

    if(transformedIngredients.length===0){
        transformedIngredients=<p>Please start adding ingredient</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;