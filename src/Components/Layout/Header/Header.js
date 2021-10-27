import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/images/logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__image'>
                <img src={Logo} alt='logo' />
            </div>
            <nav className='header__nav'>
                <NavLink
                    to={'/'} exact
                    className='header__nav__item'
                    activeClassName='header__nav__item--active'
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/about'}
                    exact
                    className='header__nav__item'
                    activeClassName='header__nav__item--active'
                >
                    About me
                </NavLink>
                <NavLink
                    to={'/contact-us'}
                    exact
                    className='header__nav__item'
                    activeClassName='header__nav__item--active'
                >
                    Contact us
                </NavLink>
                <NavLink
                    to={'/help'}
                    exact
                    className='header__nav__item'
                    activeClassName='header__nav__item--active'
                >
                    Help
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
