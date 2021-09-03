import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {withRouter} from 'react-router-dom';

class UserHomePage extends Component {

    
    kiemtra = () => {
        return this.props.history.push('/login');
    }

    render() {

        return (
                <div>
                    Đây là trang cho người dùng
                    <br />
                    <button className="btn btn-success" onClick={() => this.kiemtra()} color='primary'>Kiểm tra</button>
                </div>
        )
    }
}

export default withRouter(UserHomePage);