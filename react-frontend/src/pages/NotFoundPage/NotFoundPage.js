import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className="container-fluid container-notfound">
                    <div className="error-box">
                        {/* <div className="logo-box">
                            Test
                        </div> */}
                        <h2 className="error-number">
                            404 Error
                        </h2>
                        <h3 className="error-message">Không tìm thấy trang</h3>
                        <p className="error-description">
                            Những gì bạn đang cố gắng <br />
                            tìm kiếm không có ở đây ...
                        </p>
                        <Link to="/admin/account">
                            <button className="error-cta">Trở về trang chủ</button>
                        </Link>
                    </div>
            </div>
        )
    }
}
