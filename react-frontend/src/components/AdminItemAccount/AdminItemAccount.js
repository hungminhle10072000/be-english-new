import React, { Component } from 'react';
import { Fragment } from 'react';
import {
    Link
} from "react-router-dom";
import './AdminItemAccount.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import allActions from '../../actions';
import { connect } from 'react-redux';

class AdminItemAccount extends Component {

    onDelete = () => {

        confirmAlert({
            title: 'Xác nhận xóa',
            message: 'Bạn có chắc chắn muốn xóa không ?',
            buttons: [
              {
                label: 'Xác nhận',
                onClick: () => {
                    this.props.onDeleteUser(this.props.id);
                    this.props.changeAdminAlertOn("Xóa thành công","danger");
                }
              },
              {
                label: 'Hủy',
                onClick: () => {
                }
              }
            ]
          });
    }

    render() {
        let check = false;
        if(this.props.id == localStorage.getItem('idUser')){
            check = true;
        }
        return (
            <Fragment>
                <tr>
                    <td className="align-middle css-td-table">{this.props.id}</td>
                    <td className="align-middle css-td-table">{this.props.fullname}</td>
                    <td className="align-middle css-td-table">{this.props.username}</td>
                    <td className="align-middle css-td-table">{this.props.email}</td>
                    <td className="align-middle css-td-table">{this.props.gender}</td>
                    <td className="align-middle css-td-table">{this.props.address}</td>
                    <td className="align-middle css-td-table">{this.props.phonenumber}</td>
                    <td className="align-middle css-td-table">{this.props.birthday}</td>
                    <td className="align-middle css-td-table">{this.props.role}</td>
                    <td className="align-middle css-td-table"><img style={{width:100, height:100}} src={this.props.avartar} alt="Ảnh đại diện"/></td>
                    <td className="align-middle css-td-table">
                        {check ? 
                            <button disabled={check} type="button" className="btn btn-warning btn-edit-account mb-1">Sửa</button> 
                            : <Link to={`/admin/account/edit/${this.props.id}`}>
                            <button type="button" className="btn btn-warning btn-edit-account mb-1">Sửa</button>
                        </Link>}
                        <button disabled={check} onClick={() => this.onDelete()}
                        type="button" className="btn btn-danger btn-delete-account mb-1">Xóa</button>
                    </td>
                </tr>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteUser : (id) => {
            dispatch(allActions.userAction.actDeleteUserRequest(id));
        },
        changeAdminAlertOn : (admin_alertContent, admin_alertType) => {
            dispatch(allActions.adminAlertInfoAction.changeAdminAlertOn(admin_alertContent, admin_alertType));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminItemAccount)
