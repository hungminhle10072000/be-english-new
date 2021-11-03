import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from "react-bootstrap"
import './AdminFormEditTopicVocabulary.css'
import allActions from '../../actions';

class AdminFormEditTopicVocabulary extends Component {

    constructor(props){
        super(props);
        this.selectFile = this.selectFile.bind(this);

        this.state = {
            name_topic : '',
            currentFile: undefined,
            previewImage: undefined,
            itemVocaTopic: {
                id: undefined,
                image: '',
                name: ''
            },
            statuschossefile: false,
        }
    }

    selectFile(event) {
        this.setState({
            currentFile: event.target.files[0],
            previewImage: URL.createObjectURL(event.target.files[0]),
            statuschossefile: true
        });
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            itemVocaTopic: {
                ...this.state.itemVocaTopic,
                [name]:value
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemVocaTopicEdit){
            let {itemVocaTopicEdit} = nextProps;
            this.setState({
                itemVocaTopic: {...itemVocaTopicEdit}
            })
        }
    }

    resetForm = () => {
        let {itemVocaTopicEdit} = this.props  
        this.setState({

            itemVocaTopic: {...itemVocaTopicEdit},

            // preview image
            currentFile: undefined,
            previewImage: undefined,
            statuschossefile: false

        })
    }

    handleEditVocaTopic = (e) => {
        const {name} = this.state.itemVocaTopic
        const {currentFile} = this.state
        e.preventDefault();
        this.props.onUpdateVocaTopic(this.state.itemVocaTopic.id, name, currentFile)
    }
    

    render() {
        const {
            previewImage,
            itemVocaTopic,
            statuschossefile,
        } = this.state;

        const checkimage = itemVocaTopic.image !== '' && statuschossefile === false

        return (
            <Form onSubmit={(e) => this.handleEditVocaTopic(e)}> 
                <Form.Group>
                    <Form.Control
                        className="form-add-topic-vocabulary"
                        type="text"
                        placeholder="Tên chủ đề *"
                        name="name"
                        defaultValue={itemVocaTopic.name}
                        onChange={(event) => this.isChange(event)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        className="form-add-topic-vocabulary"
                        type="file"
                        accept="image/*"
                        placeholder="Hình ảnh chủ đề *"
                        name="image"
                        onChange={this.selectFile}
                    />
                    {checkimage && <img style={{width:150, height:150}} src={itemVocaTopic.image} alt="Ảnh mô tả chủ đề" />}
                    {previewImage && (
                        <div>
                            <img className="preview" src={previewImage} alt="" style={{height: 150, width: 150}}/>
                        </div>
                    )}

                </Form.Group>
                <Button variant="success" type="submit" className="button-add-topic-vocabulary">
                    Cập nhật
                </Button>
                <Button variant="warning" type="reset" className="button-edit-topic-vocabulary" onClick={() => {this.resetForm()}}>
                    Reset
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemVocaTopicEdit: state.itemVocaTopicEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdateVocaTopic: (id,name_topic,image) => {
            dispatch(allActions.vocabularyTopicAction.actUpdateVocaTopicRequest(id, name_topic,image));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminFormEditTopicVocabulary)

