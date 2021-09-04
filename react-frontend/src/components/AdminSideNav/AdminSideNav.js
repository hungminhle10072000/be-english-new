import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import {BsTable} from 'react-icons/bs'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'

export default class AdminSideNav extends Component {
    render() {
        return (
            <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <div className="sb-sidenav-menu">
                <div className="nav">
                    <div>
                        <Link className="nav-link me-lg-3" to="/"> <BsTable /> &nbsp; Quản trị</Link>
                    </div>
                    <div>
                        <Link className="nav-link me-lg-3" to="/admin/account"> <AiOutlineUsergroupDelete /> &nbsp; Tài khoản</Link>
                    </div>
                </div>
              </div>
            </nav>
          </div>
        )
    }
}
