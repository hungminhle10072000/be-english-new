import React, { Component } from 'react'
import './userItemTopicVocabulary.css'

class userItemTopicVocabulary extends Component {
    render() {
        return (
            <div className='col-md-3 mb-2'>
                <div className="card card-topic h-100">
                    <img className="card-img-top img-user-topic" src={this.props.image} alt="Ảnh mô tả chủ đề topic"/>
                    <div className="card-body">
                        <h6 className="card-title">{this.props.name}</h6>
                        <a href="#" className="btn btn-primary">Chi tiết</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default userItemTopicVocabulary;