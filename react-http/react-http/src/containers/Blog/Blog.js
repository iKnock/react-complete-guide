import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Posts from './Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost'
import './Blog.css';

class Blog extends Component {
    state = {
        auth: false
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
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    <Route render={() => <h1>Not found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}

                </Switch>
            </div>
        );
    }
}

export default Blog;