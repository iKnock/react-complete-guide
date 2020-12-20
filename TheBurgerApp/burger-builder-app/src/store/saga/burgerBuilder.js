import { put } from 'redux-saga/effects'
import axios from '../../axios-orders'
import * as actions from '../actions'

export function* initIngredientsSaga(action) {
    const response = yield axios.get('https://burger-builder-react-72c49.firebaseio.com/ingridients.json')
    try {
        yield put(actions.setIngredients(response.data))
    } catch (error) {
        yield put(actions.fetchIngredientsFailed())
    }
}