import React from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../src/components/home/HomePage';
import AboutPage from '../src/components/about/AboutPage';
import HeaderPage from '../src/components/Header/HeaderPage';
import PageNotFound from '../src/PageNotFound';
import CoursesPage from '../src/components/Courses/CoursesPage';
function App() {
    return (
        <div className="contianer-fluid">
            <HeaderPage />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route component={PageNotFound} />
            </Switch>
           
        </div>
    );
}

export default App;
