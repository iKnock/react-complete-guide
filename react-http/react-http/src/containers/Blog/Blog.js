import React, { Component, Suspense } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent'
import './Blog.css';

//const Posts = React.lazy(() => import('./Posts/Posts'));


const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/"
                                exact
                                activeClassName="my_active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',/**to submit as soon as it traversed */
                                search: '?quick-submit=true'/**to add query param */
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                { /*<Route path="/" exact render={()=>()} />
                <Route path="/" render={()=><h1>Home2</h1>} />*/}

                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* <Route path="/posts" render={() => (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Posts />
                        </Suspense> 
                    )} />*/}
                    <Redirect from="/" to="/posts" />
                    <Route render={() => <h1>Not found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}

                </Switch>
            </div>
        );
    }
}

export default Blog;