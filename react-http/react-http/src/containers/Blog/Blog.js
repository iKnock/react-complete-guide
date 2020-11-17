import React, { Component } from 'react';

import { Route,Link } from 'react-router-dom'
import Posts from './Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost'
import classes from './Blog.module.css';

class Blog extends Component {
    render() {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname:'/new-post',
                                hash:'#submit',/**to submit as soon as it traversed */
                                search:'?quick-submit=true'/**to add query param */
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
               { /*<Route path="/" exact render={()=>()} />
                <Route path="/" render={()=><h1>Home2</h1>} />*/}
                <Route path="/" exact component={Posts}/> 
                <Route path="/new-post" component={NewPost}/> 
            </div>
        );  
    }
}

export default Blog;