import React, { Component } from 'react'
import convertURL from '../../constants/convertUrl'
import {
    Link
} from "react-router-dom"
import {withRouter} from 'react-router-dom'
import PropTypes from "prop-types"
import { Spring, animated } from 'react-spring'
import './TopicVocabularyNew.css';

class TopicVocabularyNew extends Component {

    handleDetailTopic = () => {
        this.props.history.push('/user/topic-vocabulary/' + '1' + '/' + 'Test');
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        return (
            <Spring
                from={{opacity: 0, marginTop: -200}}
                to={{opacity: 1, marginTop: 0}}
                config= {{delay: 300, duration: 1000}}
            >
                {props => 
                    <animated.div style={props} className='col mb-2 item-topic-new'>
                        <div className='card card-item-topic-new'>
                            <img className='img-topic-new' src='https://web-english.s3.ap-southeast-1.amazonaws.com/1651330558668-01.jpg' alt="Ảnh mô tả chủ đề topic"/>
                            <div className='card-body'>
                                <h6 className='card-title'>Contract</h6>
                            </div>
                            <div>
                                <button onClick={() => this.handleDetailTopic()}
                                className='btn btn-success btn-detail-topic-new'>Xem chi tiết</button>
                            </div>
                        </div>
                    </animated.div>}
            </Spring>
        )
    }
}

export default withRouter(TopicVocabularyNew);