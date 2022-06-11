import React from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../src/components/home/HomePage';
import AboutPage from '../src/components/about/AboutPage';
import HeaderPage from '../src/components/Header/HeaderPage';

function App() {
    return (
        <div className="contianer-fluid">
            <HeaderPage />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>
           
        </div>
    );
}

export default App;
