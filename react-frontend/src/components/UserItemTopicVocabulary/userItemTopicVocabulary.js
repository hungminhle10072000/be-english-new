import React, { Component } from 'react'
import './userItemTopicVocabulary.css'
import convertURL from '../../constants/convertUrl'
import {
    Link
} from "react-router-dom"

class userItemTopicVocabulary extends Component {
    render() {
        return (
            <div className='col-md-3 mb-2'>
                <div className="card card-topic h-100">
                    <img className="card-img-top img-user-topic" src={this.props.image} alt="Ảnh mô tả chủ đề topic"/>
                    <div className="card-body">
                        <h6 className="card-title">{this.props.name}</h6>
                        <Link className='btn btn-primary' to={"/user/topic-vocabulary/" + this.props.id + "/" + convertURL(this.props.name)}>
                            Chi tiết
                        </Link>               
                    </div>
                </div>
            </div>
        )
    }
}

export default userItemTopicVocabulary;