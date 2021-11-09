import React, { Component, Fragment } from 'react'
import './AdminItemDetailVocabulary.css'
import { connect } from 'react-redux'
import allActions from '../../actions'
import { confirmAlert } from 'react-confirm-alert'
import ReactAudioPlayer from 'react-audio-player'
import Image from 'react-bootstrap/Image'

class AdminItemDetailVocabularyTopic extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    onDelete = () => {

        confirmAlert({
            title: 'Xác nhận xóa',
            message: 'Bạn có chắc chắn muốn xóa không ?',
            buttons: [
              {
                label: 'Xác nhận',
                onClick: () => {
                    this.props.onDeleteVoca(this.props.id);
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

    onEdit = () => {
        this.props.onGetVocaById(this.props.id)
        this.props.onOpenFormEditVoca()
    }

    render() {
        return (
            <Fragment>
                <tr>
                    <td>
                        <div className="row mb-1">
                            <div className="col-sm-3 col-md-1">
                                <div className="title-order-vocabulary">
                                    <span className="content-order-vocabulary">{this.props.ordinal}</span>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3">
                                <Image className="img-fluid img-description-content" src={this.props.image} alt="Ảnh mô tả"/>
                                {/* <img className="img-fluid img-description-content" src={this.props.image} alt="Ảnh mô tả"/> */}
                            </div>
                            <div className="col-sm-6 col-md-8">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12 admin-content-vocabulary">
                                            <div style={{color: 'blue', fontSize: 16, fontWeight: 500}}><span>{this.props.content}</span></div>
                                            <div><span>Giải thích : </span>{this.props.explain_vocabulary}</div>
                                            <div><span>Từ loại : </span>{this.props.mean}</div>
                                            <div><span>Ví dụ : </span>{this.props.example_vocabulary}</div>
                                            <div><span>{this.props.mean_example_vocabulary}</span></div>
                                    </div> 
                                </div>
                                <div className="row admin-audio-vocabulary">
                                        <ReactAudioPlayer
                                            src={this.props.file_audio}
                                            controls
                                        />
                                        {/* <audio controls>
                                            <source src={this.props.file_audio} type="audio/mp3" />
                                        </audio> */}
                                    </div>
                            </div>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div className="admin-group-function-item-vocabulary">
                            <button className="btn btn-warning btn-edit-item-vocabulary" onClick={() => this.onEdit()}>Sửa</button>
                            <button className="btn btn-danger btn-delete-item-vocabulary" 
                            onClick={() => this.onDelete()}
                            >Xóa</button>
                        </div>
                    </td>
                </tr>
            </Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteVoca: (id) => {
            dispatch(allActions.vocabularyAction.actDeleteVocaForTopicRequest(id))
        },
        onGetVocaById: (id) => {
            dispatch(allActions.vocabularyAction.actGetVocaByIdRequest(id))
        },
        onOpenFormEditVoca: () => {
            dispatch(allActions.openFormAddVoca.changeFormEditVocaOn())
        }
    }
}
export default connect(null, mapDispatchToProps) (AdminItemDetailVocabularyTopic)
