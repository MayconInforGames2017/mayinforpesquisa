import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'; 
import './styles.css';

const Header = () => (
    <header className="main-header" >
        <Logo />
        <div className="logo-text">
            <span className="logo-text-1">MayconInforgames</span>
            <span className="logo-text-2"> Pesquisa</span>
        </div>
    </header>
);

export default Header;