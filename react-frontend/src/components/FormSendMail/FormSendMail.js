import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap"
import './FormSendMail.css'

class FormSendMail extends Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Tên đăng nhập *"
                        name="username"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="email"
                        placeholder="Email *"
                        name="email"
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
export default FormSendMail;