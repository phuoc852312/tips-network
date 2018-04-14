// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../header/Header';
import { QuoteOfTheDayPage } from '../pages/QuoteOfTheDayPage';
import { FavoriteQuotesPage } from '../pages/FavoriteQuotesPage';
import { QuotesPage } from '../pages/QuotesPage';
import { TopicsPage } from '../pages/TopicsPage';


// COMPONENT

export const AppRouter = () => (
    <HashRouter basename="/" history={history}>
        <Fragment>
            <Header />
            <nav className='menu'>
                <ul>
                    <li><NavLink to='/' activeClassName='menu selected' exact={true}>FEATURED</NavLink></li>
                    <li><NavLink to='/search' activeClassName='menu selected'>DISCOVER</NavLink></li>
                    <li><NavLink to='/favourites' activeClassName='menu selected'>FAVOURITES</NavLink></li>
                    <li><NavLink to='/topics' activeClassName='menu selected'>EXPLORE</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path='/' component={QuoteOfTheDayPage} exact={true} />
                <Route path='/favourites' component={FavoriteQuotesPage} />
                <Route path='/search' component={QuotesPage} />
                <Route path='/topics' component={TopicsPage} />
            </Switch>
        </Fragment>
    </HashRouter>
);