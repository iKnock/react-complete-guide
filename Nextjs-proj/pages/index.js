import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { render } from 'react-dom'

class IndexPage extends Component {
    static async getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appname: 'Super App' })
            }, 1000)
        })
        return promise;
    }

    render() {
        return (
            <div>
                <h1>The Main page of {this.props.appname}</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        )
    }
}

export default IndexPage;
