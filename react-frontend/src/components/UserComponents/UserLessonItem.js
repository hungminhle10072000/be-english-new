import React, {Component} from 'react'
import '../css/UserCSS.css'
class UserLessonItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            lesson: {
                id: this.props.lesson.id,
                name: this.props.lesson.name,
                number: this.props.lesson.number,
                chapterId:this.props.lesson.chapterId,
                chapterName: this.props.lesson.chapterName,
                courseName: this.props.lesson.courseName,
                video:this.props.lesson.video
            }
        }
    }

    render() {
        return(
            <div style={{padding:'0px'}} onClick={()=>this.props.changedVideo(this.state.lesson.video)}>
                <span style={{fontWeight:400,paddingRight:'5px'}}>{this.state.lesson.number}.</span>
                <img src="/svg/schedule_black_24dp.svg" alt="" height="15" style={{marginRight:'5px'}}/>
                    {/* <a href="#" title={this.state.lesson.name}><strong>{this.state.lesson.name}</strong></a> */}
                    <label title={this.state.lesson.name}>{this.state.lesson.name}</label>
                <hr style={{marginBottom:'8px',marginTop:'8px', color:'#dddddd', height:'1px'}}/>
            </div>
        )
    }
}
export default UserLessonItem