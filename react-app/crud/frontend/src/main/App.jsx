import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Routes from './Routes.jsx' 
import Footer from '../components/templates/Footer.jsx';
import Nav from '../components/templates/Nav.jsx';
import Logo from '../components/templates/Logo.jsx';
// import Home from '../components/home/Home.jsx';


export default props => 
    <BrowserRouter>  
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>