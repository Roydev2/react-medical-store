import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import MainComponent from '../components/MainComponent';
import AuthHandler from './AuthHandler';

export var PrivateRouteNew = ({ page, activepage, ...rest }) =>{
    return (
        <Route
            {...rest}
            render={(props) => 
                AuthHandler.LoggedIn() ? (
                    <MainComponent page={page} activepage={activepage} {...props} />
                ) : ( 
                    <Redirect to="/" />
                )
            }
        />
    );
};