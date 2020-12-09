import React from 'react'
import User from '../../components/User'

const indexAuth = (props) => (
    <div>
        <h1>The Auth Index page {props.appname}</h1>
        <User name="Max" age={28}></User>
    </div>
)

indexAuth.getInitialProps = (context) => {

    console.log(context);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appname: 'Super App hello' })
        }, 1000)
    })
    return promise;
}

export default indexAuth;
