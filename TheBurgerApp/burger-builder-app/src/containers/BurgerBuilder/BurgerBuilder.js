import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import axios from '../../axios-orders'

const BurgerBuilder = props => {

    const [purchasing, setPurchasing] = useState(false);

    const ings = useSelector(state => {
        return state.burgerBuilder.ingredients
    })

    const price = useSelector(state => {
        return state.burgerBuilder.totalPrice
    })

    const error = useSelector(state => {
        return state.burgerBuilder.error
    })

    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null;
    })

    const dispatch = useDispatch();

    const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
    const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
    const onInitIngredients = () => dispatch(actions.initIngredients());
    const onInitPurchase = () => dispatch(actions.purchaseInit());
    const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));

    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients]);

    const updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            }).reduce((sum, el) => {
                return sum + el;
            }, 0)
        return sum > 0;
    }

    const purchaseHandler = () => {
        if (isAuthenticated) {
            setPurchasing(true);
        } else {
            onSetAuthRedirectPath('/checkout');
            props.history.push('/auth')
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false)
    }

    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push('/checkout');
    }

    const disabledInfo = {
        ...ings
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = error ? <p>Cant load the Ingredients</p> : <Spinner />

    if (ings) {
        burger = (
            <Auxiliary>
                <Burger ingredients={ings} />
                <BuildControls
                    ingredientAdded={onIngredientAdded}
                    ingridientRemove={onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={updatePurchaseState(ings)}
                    ordered={purchaseHandler}
                    isAuth={isAuthenticated}
                    price={price} />
            </Auxiliary>
        )
        orderSummary = <OrderSummary
            purchaseContinued={purchaseContinueHandler}
            purchaseCancelled={purchaseCancelHandler}
            ingredients={ings}
            price={price} />
    }

    return (
        <Auxiliary>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Auxiliary>
    )
}

export default withErrorHandler(BurgerBuilder, axios);