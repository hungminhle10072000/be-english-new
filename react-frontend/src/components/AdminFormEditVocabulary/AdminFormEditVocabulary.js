import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from "react-bootstrap"
import allActions from '../../actions'
import ReactAudioPlayer from 'react-audio-player'


class AdminFormEditVocabulary extends Component {

    constructor(props){
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.selectFileAudio = this.selectFileAudio.bind(this);

        this.state = {
            currentFile: undefined,
            currentFileAudio: undefined,
            previewImage: undefined,
            previewAudio: undefined,
            statusChossefileAudio: false,
            statusChossefileImage: false,
            itemVoca : {
                id: -1,
                content: '',
                transcribe: '',
                mean_example_vocabulary: '',
                mean: '',
                explain_vocabulary: '',
                example_vocabulary: '',
                file_audio: '',
                image: ''
            }
        }
    }

    selectFileAudio(event) {
        this.setState({
            currentFileAudio: event.target.files[0],
            previewAudio: URL.createObjectURL(event.target.files[0]),
            statusChossefileAudio: true
        });
    }

    selectFile(event) {
        this.setState({
            currentFile: event.target.files[0],
            previewImage: URL.createObjectURL(event.target.files[0]),
            statusChossefileImage: true
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemVocaEdit){
            const {itemVocaEdit} = nextProps
            this.setState({
                itemVoca: {...itemVocaEdit}
            })
        }
    }
    

    render() {
        const {
            previewImage,
            previewAudio,
            itemVoca,
            statusChossefileImage,
            statusChossefileAudio
        } = this.state;

        const checkfileAudio = itemVoca.file_audio != '' && statusChossefileAudio === false
        const checkimage = itemVoca.image !== '' && statusChossefileImage === false

        return (
            <Form onSubmit={(e) => this.handleAddVoca(e)}>
                <Form.Group>
                    <Form.Label style={{fontWeight: 'bold'}}>Nội dung từ *</Form.Label>
                    <Form.Control
                        className="form-add-topic-vocabulary"
                        type="text"
                        placeholder="Nội dung từ *"
                        defaultValue={itemVoca.content}
                        name="content"
                        onChange={(event) => this.isChange(event)}
                        required
                    />
                </Form.Group>
                <Form.Group style={{marginBottom: 20}}>
                    <Form.Label style={{fontWeight: 'bold'}}>Giải thích *</Form.Label>
                    <Form.Control
                        className="form-add-topic-vocabulary"
                        type="text"
                        placeholder="Giải thích *"
                        as="textarea" 
                        rows={3}
                        defaultValue={itemVoca.explain_vocabulary}
                        name="explain_vocabulary"
                        onChange={(event) => this.isChange(event)}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{fontWeight: 'bold'}}>Từ loại *</Form.Label>
                    <Form.Control
                        className="form-add-topic-vocabulary"
                        type="text"
                        placeholder="Từ loại *"
                        defaultValue={itemVoca.mean}
                        name="mean"
                        onChange={(event) => this.isChange(event)}
                        required
                    />
                </Form.Group>
                <Form.Group style={{marginBottom: 20}}>
                    <Form.Label style={{fontWeight: 'bold'}}>Ví dụ *</Form.Label>
                    <Form.Control
                        className="form-add-topic-vocabulary"
                        type="text"
                        placeholder="Ví dụ *"
                        as="textarea" 
                        rows={3}
                        defaultValue={itemVoca.example_vocabulary}
                        name="example_vocabulary"
                        onChange={(event) => this.isChange(event)}
                        required
                    />
                </Form.Group>
                <Form.Group style={{marginBottom: 20}}>
                    <Form.Label style={{fontWeight: 'bold'}}>Dịch nghĩa ví dụ *</Form.Label>
                    <Form.Control
                        className="form-add-topic-vocabulary"
                        type="text"
                        placeholder="Dịch nghĩa ví dụ *"
                        as="textarea" 
                        rows={3}
                        defaultValue={itemVoca.mean_example_vocabulary}
                        name="mean_example_vocabulary"
                        onChange={(event) => this.isChange(event)}
                        required
                    />    
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{fontWeight: 'bold'}}>
                        Chọn file audio *
                    </Form.Label>
                    <Form.Control
                        className="form-add-topic-vocabulary"
                        type="file"
                        accept="audio/*"
                        placeholder="File nghe cửa từ *"
                        name="file_audio"
                        onChange={this.selectFileAudio}
                        required
                    />
                    {checkfileAudio && <ReactAudioPlayer
                        src={itemVoca.file_audio}
                        controls
                    />}
                    {previewAudio && <ReactAudioPlayer
                        src={previewAudio}
                        controls
                    />}   
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{fontWeight: 'bold'}}>
                        Chọn hình ảnh mô tả *
                    </Form.Label>
                    <Form.Control
                        className="form-add-topic-vocabulary"
                        type="file"
                        accept="image/*"
                        placeholder="Hình ảnh mô tả *"
                        name="file_image"
                        onChange={this.selectFile}
                        required
                    />
                    {checkimage && <img style={{width:150, height:150}} src={itemVoca.image} alt="Ảnh mô tả từ" />}
                    {previewImage && (
                        <div>
                            <img className="preview" src={previewImage} alt="Ảnh mô tả từ" style={{height: 150, width: 150}}/>
                        </div>
                    )}
                </Form.Group>
                <Button variant="success" type="submit" className="button-add-topic-vocabulary">
                    Thêm
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemVocaEdit: state.itemVocaEdit
    }
}


export default connect(mapStateToProps, null) (AdminFormEditVocabulary)
