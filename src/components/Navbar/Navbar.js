import React, { useContext } from 'react'
import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AppContext } from '../../context/AppContext'


const Navbar = () => {
    
    const {pages, pageNames} = useContext(AppContext)

    return (
        <div className="navbar">
            <div className="navbar__group">
            <div className="nnavbar__logo">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <ul className="navbar__menu">
                {pages.map((item, i) => {
                    return(
                        <Link className="navbar__link" key={item.id} to={item.url}>
                            <li className="navbar__link">{pageNames[i]}</li>
                        </Link>
                    )
                })}
            </ul>
            </div>
            <div className="navbar__contactus">
                <button className="btn">Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar