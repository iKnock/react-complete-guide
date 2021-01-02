import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Auxilary from '../Auxiliary/Auxiliary'
import useHttpErrorHandler from '../../hooks/http-error-handler'

const withErrorHandler = (WrapperdComponent, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <Auxilary>
                <Modal show={error} modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrapperdComponent {...props} />
            </Auxilary>
        );
    }
}

export default withErrorHandler;