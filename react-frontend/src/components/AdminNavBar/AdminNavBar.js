import React, { Component } from 'react'
import './AdminNavBar.css'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AdminSideNav } from '../AdminSideNav/AdminSideNav';


export default class AdminNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: false
        };
    }

    showSidebar = () => {
        this.setState ({
            sidebar: !this.state.sidebar
        });
    }

    render() {
        return (
            <>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='navbar'>
                        <h2>Quản lí website</h2>
                        <Link to='#' className={this.state.sidebar ? 'menu-bars-close' : 'menu-bars'}>
                            <FaIcons.FaBars onClick={this.showSidebar} />
                        </Link>
                    </div>
                    <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={this.showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {AdminSideNav.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
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
