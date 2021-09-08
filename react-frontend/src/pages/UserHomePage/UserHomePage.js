import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import UserRoutes from '../../customRoutes/UserRoutes';
import './UserHomePage.css'

class UserHomePage extends Component {

    
    kiemtra = () => {
        return this.props.history.push('/login');
    }

    render() {

        return (
                <div>
                    <div className="navtranghome">Đây là thẻ nav trang home user</div>
                    
                    <UserRoutes />

                    <div className="foottranghome">Đây là thẻ footer</div>
                </div>
        )
    }
}

export default withRouter(UserHomePage);