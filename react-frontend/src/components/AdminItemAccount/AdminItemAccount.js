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
                    <td>1</td>
                    <td>Hoàng Dương Hùng</td>
                    <td>hungadmin</td>
                    <td>minhle2000</td>
                    <td>hungduong.mess32@gmail.com</td>
                    <td>Nam</td>
                    <td>Thủ Đức</td>
                    <td>01236659181</td>
                    <td>10-08-2000</td>
                    <td>admin</td>
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
