import React, { Component } from 'react'
import './userItemTopicVocabulary.css'
import convertURL from '../../constants/convertUrl'
import {
    Link
} from "react-router-dom"
import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types"

class userItemTopicVocabulary extends Component {

    handleDetailTopic = () => {
        this.props.history.push('/user/topic-vocabulary/' + this.props.id + '/' + convertURL(this.props.name));
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className='col mb-2 item-topic'>
                <div onClick={() => this.handleDetailTopic()} className="card card-topic h-100 card-item-vocabulary" style={{width: '197px', height: '169px'}}>
                    <img className="card-img-top img-user-topic" src={this.props.image} alt="Ảnh mô tả chủ đề topic"/>
                    <div className="card-body">
                        <h6 className="card-title">{this.props.name}</h6>
                        {/* <Link className='btn btn-primary' to={"/user/topic-vocabulary/" + this.props.id + "/" + convertURL(this.props.name)}>
                            Chi tiết
                        </Link>                */}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(userItemTopicVocabulary);