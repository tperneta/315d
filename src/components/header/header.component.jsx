import React from 'react';

import './header.styles.css';

import { ReactComponent as Logo } from '../../logo.svg';

import Menu from '../menu/menu.component';

const Header = () => (
    <div className='header-container'>
        <div className='logo-container'>
            <Logo className='logo'/>
        </div>
        <div>
            <Menu />
        </div>
    </div>
)

export default Header;