import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from "react-bootstrap"
import './AdminFormEditGrammar.css'
import allActions from '../../actions'

class AdminFormEditGrammar extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            name_grammar : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemGrammarEdit){
            let {itemGrammarEdit} = nextProps;
            this.setState({
                name_grammar: itemGrammarEdit.name
            })
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    handleUpdateNameGrammar = (e) => {
        const {name_grammar} = this.state
        e.preventDefault();
        this.props.onUpdateVocaTopic(this.props.itemGrammarEdit.id, name_grammar)
    }

    resetForm = () => {
        let {itemGrammarEdit} = this.props  
        this.setState({
            name_grammar: itemGrammarEdit.name,
        })
    }

    render() {
        const {
            name_grammar
        } = this.state;
        return (
            <Form onSubmit={(e) => this.handleUpdateNameGrammar(e)}>
                <Form.Group>
                    <Form.Control
                        className="form-add-grammar"
                        type="text"
                        placeholder="Tên bài học *"
                        name="name_grammar"
                        defaultValue={name_grammar}
                        onChange={(event) => this.isChange(event)}
                        required
                    />
                </Form.Group>
                <Button variant="success" type="submit" className="button-update-grammar">
                    Cập nhật
                </Button>
                <Button variant="warning" type="reset" className="button-reset-grammar" onClick={() => {this.resetForm()}}>
                    Reset
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemGrammarEdit: state.itemGrammarEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdateVocaTopic: (id,name_grammar) => {
            dispatch(allActions.grammarAction.actUpdateNameGrammarRequest(id, name_grammar));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminFormEditGrammar)
