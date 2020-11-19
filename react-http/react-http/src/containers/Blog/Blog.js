import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom'
import Posts from './Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost'
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="my_active" activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Home</NavLink>
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
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;