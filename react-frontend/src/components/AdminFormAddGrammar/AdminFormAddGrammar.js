import React, { Component } from 'react'
import { connect } from 'react-redux'
import allActions from '../../actions'
import { Form, Button } from "react-bootstrap"
import './AdminFormAddGrammar.css'

class AdminFormAddGrammar extends Component {

    constructor(props){
        super(props);

        this.state = {
            name_grammar : '',
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleAddGrammar = (e,name_grammar) => {
        e.preventDefault();
        this.props.onAddGrammarName(name_grammar);
    }

    render() {
        return (
            <Form onSubmit={(e) => this.handleAddGrammar(e,this.state.name_grammar)}>
                <Form.Group>
                    <Form.Control
                        className="form-add-grammar"
                        type="text"
                        placeholder="Tên bài học *"
                        name="name_grammar"
                        onChange={(event) => this.isChange(event)}
                        required
                    />
                </Form.Group>
                <Button variant="success" type="submit" className="button-add-grammar">
                    Thêm
                </Button>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddGrammarName : (name) => {
            dispatch(allActions.grammarAction.actAddGrammarNameRequest(name))
        }
    }
}

export default connect(null, mapDispatchToProps) (AdminFormAddGrammar);


