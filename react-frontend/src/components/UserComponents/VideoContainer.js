
import React, { Component } from 'react'
import ReactPlayer from "react-player";
class VideoContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            term: '',
            lessons: [],
            open: true,
            linkVideo: this.props.video
        }
        this.setState({linkVideo:this.props.video})
    }
    onOpenModal = (video) => {
        this.setState((prevState) => ({
            open: !prevState.open,
            linkVideo: video
        }));
        console.log(this.state.open)
    };
    render() {
        return (
            // <div height='70%'>
            //     <ReactPlayer  width='70%'
            //      height='600px' controls url={this.props.video}/>
            // </div>
            <div className='div-display-video col-md-12'>
                <ReactPlayer height='500px' width='70%' controls url={this.props.video}/>
            </div>
        )
    }
}
export default VideoContainer
