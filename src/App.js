import React, {Component} from 'react';

import Nav from './components/header/Nav';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Posts from './components/posts/Posts';

const HomePage = () => {
    return (
        <div className="container">
            <h2>Home page</h2>
        </div>
    )
}

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Nav/>

                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/posts" component={Posts}/>
                    </Switch>
                    
                </div>
            </BrowserRouter>
        )
    }
}

export default App;