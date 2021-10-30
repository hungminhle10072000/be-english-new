import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap"
import './FormSendMail.css'
import allActions from '../../actions/index';
import { connect } from 'react-redux';
class FormSendMail extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: ''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleSendMailPassWord = (e,username, email) => {
        e.preventDefault();
        this.props.onForgetPassWord(username, email);
    }

    render() {
        return (
            <Form onSubmit={(e) => this.handleSendMailPassWord(e,this.state.username, this.state.email)}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Tên đăng nhập *"
                        name="username"
                        onChange={(event) => this.isChange(event)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        name="email"
                        onChange={(event) => this.isChange(event)}
                        required
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Gửi
                </Button>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onForgetPassWord : (username, email) => {
            dispatch(allActions.userAction.actForgetPassWordRequest(username, email))
        }
    }
}


export default connect(null, mapDispatchToProps) (FormSendMail);