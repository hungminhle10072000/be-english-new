import React, { Component } from 'react'
import { Fragment } from 'react'
import {
    Link
} from "react-router-dom";
import './AdminItemAccount.css'

export default class AdminItemAccount extends Component {
    render() {
        return (
            <Fragment>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.fullname}</td>
                    <td>{this.props.username}</td>
                    <td>{this.props.password}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.gender}</td>
                    <td>{this.props.address}</td>
                    <td>{this.props.phonenumber}</td>
                    <td>10-08-2000</td>
                    <td>{this.props.role}</td>
                    <td>Null</td>
                    <td>
                        <Link to="/admin/account/edit">
                            <button type="button" className="btn btn-warning btn-edit-account">Sửa</button>
                        </Link>
                        <button type="button" className="btn btn-danger btn-delete-account">Xóa</button>
                    </td>
                </tr>
            </Fragment>
        )
    }
}
