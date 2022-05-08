import Slider from '../../components/Slider/Slider';
import React, { Component, Fragment } from 'react';
import './HomePage.css';
import SliderSwipper from '../../components/SliderSwipper/SliderSwipper';
import { connect } from 'react-redux';
import allActions from '../../actions';

class HomePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      listTopicNews: []
    }
}

  componentDidMount() {
    this.props.getAllVocaTopicsNew()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.topicVocaNew){
        let {topicVocaNew} = nextProps
        this.setState({
          listTopicNews: topicVocaNew
        })
    }
}

  render() {
    return (
      <Fragment>
          <Slider />
          <div className="row mt-3">
            <div className='col-sm-12'>
                  <h2 className='label-course-new'>Khóa học mới</h2>
                  <SliderSwipper />
            </div>
          </div>
          <div className='row mt-3'>
              <div className='col-md-12 mb-2'>
                  <h2 className='label-course-new'>Chủ đề mới</h2>
                  <SliderSwipper dataTopicsNew={this.state.listTopicNews}/>
              </div >
          </div>
      </Fragment>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    topicVocaNew: state.topicVocaNew
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      getAllVocaTopicsNew: () => {
          dispatch(allActions.userVocabularyTopicAction.actUserFetchTopicsVocaNewRequest());
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (HomePage)
