import Slider from '../../components/Slider/Slider';
import React, { Component, Fragment } from 'react';
import './HomePage.css';
import SliderSwipper from '../../components/SliderSwipper/SliderSwipper';

export default class HomePage extends Component {
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
                  <SliderSwipper />
              </div >
          </div>
      </Fragment>
    )
  }
}
