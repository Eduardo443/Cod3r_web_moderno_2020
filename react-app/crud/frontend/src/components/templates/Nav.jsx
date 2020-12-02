import React from 'react';
import './Nav.css';

import NavItems from './NavItems.jsx'

export default props =>
    <aside className='menu-area'>
        <nav className="menu">
           {/* <a href="#/">
               <i className="fa fa-home"></i> Inicio
           </a>
           <a href="#/users">
               <i className="fa fa-users"></i> Usuários
           </a> */}
           <NavItems url="/" pathName="home" title=" Início" />
           <NavItems url="/users" pathName="users" title=" Usuários" />
        </nav>
    </aside>