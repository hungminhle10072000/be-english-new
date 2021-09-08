import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class ContentPage extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props){
        super(props);
        
        this.state = ({
            role: -1
        })
    }

    checkVaoThi = () => {
        if(this.state.role === -1){
            window.location.pathname = ('/login');
        } else {
            this.props.history.push('/');
        }
    }

    dangxuat = () => {
        window.location.pathname = ('/login');
    }

    render() {
        return (
            <div>
                <button onClick={() => this.checkVaoThi()}>Vào thi</button>

                <button onClick={() => this.dangxuat()}>Đăng xuất</button>
            </div>
        )
    }
}

export default withRouter(ContentPage)
