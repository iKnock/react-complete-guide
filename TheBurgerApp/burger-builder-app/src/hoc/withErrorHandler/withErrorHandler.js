import React, { useState, useEffect } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Auxilary from '../Auxiliary/Auxiliary'
import axios from '../../axios-orders'

const withErrorHandler = (WrapperdComponent, axios) => {
    return props => {

        const [error, setError] = useState(null)


        const reqInterceptor = axios.interceptors.response.use(req => {
            setError(null);
            return req;
        })

        const resInterceptor = axios.interceptors.response.use(res => res, err => {
            setError(err);
        })

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            }
        }, [reqInterceptor, resInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null)
        }

        return (
            <Auxilary>
                <Modal show={error} modalClosed={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrapperdComponent {...props} />
            </Auxilary>
        );
    }
}

export default withErrorHandler;