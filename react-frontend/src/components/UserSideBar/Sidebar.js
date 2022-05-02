import React, { Component } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import {UserSideBar} from './UserSideBar'
import './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <nav className='nav-menu-user'>
                        <ul className='nav-menu-user-items'>
                            {UserSideBar.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}                                  
                                            <span style={{fontSize: '0.9rem'}}>{item.title}</span>             
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
            </>
        )
    }
}
