import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from '../src/components/home/HomePage';
import AboutPage from '../src/components/about/AboutPage';

function App() {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </div>
    );
}

export default App;
