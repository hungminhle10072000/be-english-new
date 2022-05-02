import React, { Component } from "react";
import Slider from "react-slick";
import TopicVocabularyNew from "../TopicVocabularyNew/TopicVocabularyNew";
import './SlideSwipper.css';

export default class SliderSwipper extends Component {
  render() {
    const numbers = [1,2,3,4,5,6,7,8,9];
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Slider {...settings} className='div-slide-swipper' >
            <TopicVocabularyNew />
            <TopicVocabularyNew />
            <TopicVocabularyNew />
            <TopicVocabularyNew />
            <TopicVocabularyNew />
            <TopicVocabularyNew />
            <TopicVocabularyNew />
            <TopicVocabularyNew />
            <TopicVocabularyNew />
            <TopicVocabularyNew />
            {/* {numbers.map((index, item) => {
                return (
                    <div key={index}>
                        <h1 style={{ color: "red", fontSize: 100, textAlign: "center"}}>{item}</h1>
                    </div>
                )
            })}             */}
        </Slider>
      </div>
    );
  }
}
