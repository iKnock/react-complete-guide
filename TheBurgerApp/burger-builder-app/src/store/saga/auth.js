import { put } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionType'

//the star is to make the function to generator which make the function progresively
export function* logout(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    put({
        type: actionTypes.AUTH_LOGOUT
    })
}