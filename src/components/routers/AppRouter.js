// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../header/Header';
import { QuoteOfTheDayPage } from '../pages/QuoteOfTheDayPage';
import { FavoriteQuotesPage } from '../pages/FavoriteQuotesPage';
import { QuotesPage } from '../pages/QuotesPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <nav className='menu'>
                <ul>
                    <li><NavLink to='/' activeClassName='menu selected' exact={true}>Made for you</NavLink></li>
                    <li><NavLink to='/search' activeClassName='menu selected'>Find others</NavLink></li>
                    <li><NavLink to='/favourites' activeClassName='menu selected'>Your Favourites</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path='/' component={QuoteOfTheDayPage} exact={true} />
                <Route path='/favourites' component={FavoriteQuotesPage} />
                <Route path='/search' component={QuotesPage} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);