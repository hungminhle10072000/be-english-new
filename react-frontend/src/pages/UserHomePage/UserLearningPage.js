import React, {Component} from 'react'
import UserChapterItem from '../../components/UserComponents/UserChapterItem'
import VideoContainer from '../../components/UserComponents/VideoContainer';
import allActions from '../../actions';
import { connect } from 'react-redux';
class UserLearningPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            showResults:true,
            linkVideo:'https://web-english.s3.ap-southeast-1.amazonaws.com/1637087592056-trumua.mp4',
            course:{
                id:2,
                name:'Khoa Hoc 1',
                image: 'linkImage',
                introduce: 'introduce',
                chapters: [
                    {
                        id: 1,
                        name: 'Chuong 1',
                        number: 1,
                        courseId: 1,
                        courseName: 'Bai 1',
                        lessons: [
                            {
                                id: 1,
                                name: 'Bai 1',
                                number: 1,
                                chapterId:1,
                                chapterName: 'chuong 1',
                                courseName: 'khoa hoc1',
                                video:'https://youtu.be/CbC-Pf7mXfc?list=RDMMCbC-Pf7mXfc'
                            },
                            {
                                id: 2,
                                name: 'Bai 2',
                                number: 2,
                                chapterId:2,
                                chapterName: 'chuong 2',
                                courseName: 'khoa hoc2',
                                video:'https://youtu.be/SNES5Y-tYxM?list=RDMMCbC-Pf7mXfc'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Chuong 2',
                        number: 2,
                        courseId: 2,
                        courseName: 'Bai 2',
                        lessons: [
                            {
                                id: 2,
                                name: 'Bai 2',
                                number: 2,
                                chapterId:2,
                                chapterName: 'chuong 2',
                                courseName: 'khoa hoc2',
                                video:'https://youtu.be/CbC-Pf7mXfc?list=RDMMCbC-Pf7mXfc'
                            },
                            {
                                id: 2,
                                name: 'Bai 2',
                                number: 2,
                                chapterId:2,
                                chapterName: 'chuong 2',
                                courseName: 'khoa hoc2',
                                video:'https://youtu.be/SNES5Y-tYxM?list=RDMMCbC-Pf7mXfc'
                            }
                        ]
                    }
                ]
            },
            chapter: {
                id: 1,
                name: 'Chuong 1',
                number: 1,
                courseId: 1,
                courseName: 'Bai 1',
                lessons: [
                    {
                        id: 1,
                        name: 'Bai 1',
                        number: 1,
                        chapterId:1,
                        chapterName: 'chuong 1',
                        courseName: 'khoa hoc1',
                        video:'https://youtu.be/CbC-Pf7mXfc?list=RDMMCbC-Pf7mXfc'
                    },
                    {
                        id: 2,
                        name: 'Bai 2',
                        number: 2,
                        chapterId:2,
                        chapterName: 'chuong 2',
                        courseName: 'khoa hoc2',
                        video:'https://youtu.be/SNES5Y-tYxM?list=RDMMCbC-Pf7mXfc'
                    }
                ]
            }
        }
    }

    componentDidMount() {
        console.log("ID: ",this.state.course.id)
        this.props.onEditCourse(this.state.course.id);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.course){
            var {course} = nextProps;
            this.setState({
                course: {...course}
            })
        }
    }

    changedVideo = (url) => {
        this.setState({linkVideo:url})
    }
    showChapterItem = () => {
        return this.state.course.chapters.map((chapter)=><UserChapterItem key={chapter.id} chapter={chapter} changedVideo={this.changedVideo}></UserChapterItem>)
    }
    render() {
        return(
            <div>
               <VideoContainer video={this.state.linkVideo}></VideoContainer>
               {/* <UserChapterItem chapter={this.state.chapter} changedVideo={this.changedVideo}></UserChapterItem> */}
               {this.state.showResults ? this.showChapterItem() : null}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        course: state.courseEditReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditCourse: (id) => {
            dispatch(allActions.courseAction.actGetCourseRequest(id))
        },

        onUpdateCourse: (courseDto, file) => {
            dispatch(allActions.courseAction.actUpdateCourseRequest(courseDto, file))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLearningPage);