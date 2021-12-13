import React, { Component, Fragment } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Image from 'react-bootstrap/Image'
import './UserItemDetailVocabularyTopic.css'

export default class UserItemDetailVocabularyTopic extends Component {
    render() {
        return (
            <div className='row mt-4 mb-2 row-user-item-vocabulary'>
                <div className="col-sm-3 col-md-1">
                    <div className="user-title-order-vocabulary">
                        <span className="user-content-order-vocabulary">{this.props.ordinal}</span>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3 pt-1">
                    <Image className="img-fluid img-description-content" src={this.props.image} alt="Ảnh mô tả"/>
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
                        <div className="row admin-audio-vocabulary pb-1">
                                <ReactAudioPlayer
                                    src={this.props.file_audio}
                                    controls
                                />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
