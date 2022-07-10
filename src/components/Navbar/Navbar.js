import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [pages, setPages] = useState([])
    const pageNames = ['Products', 'Solutions', 'About']

    async function getInfo() {
        try {
            const response = await axios.get('https://adchitects-cms.herokuapp.com/pages',
          {
            auth: {
              username: 'adchitects',
              password: 'jsrulezzz',
            },
          }
        )
        setPages(response.data)
        console.log(response.data)
        } catch (err) {
            console.error(err)
        }   
    }


    useEffect(() => {
            (async () => {
              await getInfo();
            })();
          },[]) 

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