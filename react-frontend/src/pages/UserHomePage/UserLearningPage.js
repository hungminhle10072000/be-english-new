import React, {Component} from 'react'
import UserChapterItem from '../../components/UserComponents/UserChapterItem'
import VideoContainer from '../../components/UserComponents/VideoContainer';
import allActions from '../../actions';
import { connect } from 'react-redux';
import Comments from '../../components/Comment/Comments'
class UserLearningPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            isChapter:true,
            isComment:false,
            userCurrent: {
                id: -1
            },
            learningLessonId:7,
            comments:[],
            isLogin:true,
            linkVideo:'https://web-english.s3.ap-southeast-1.amazonaws.com/1637087592056-trumua.mp4',
            course:{
                id:this.props.match.params.id,
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
    componentDidUpdate(prevProps) {
        var course = this.props.course;
        if (prevProps.comments.length ===0 && this.props.comments.length !==0) {
            this.props.onGetCommentByLessonId(this.state.learningLessonId)
            this.setState({
                course: course,
                comments: this.props.comments,
                userCurrent: this.props.userCurrent
            })
        }
        if ( prevProps.comments[0] && this.props.comments[0] && prevProps.comments[0].id !== this.props.comments[0].id) {
            this.props.onGetCommentByLessonId(this.state.learningLessonId)
            this.setState({
                course: course,
                comments: this.props.comments,
                userCurrent: this.props.userCurrent
            })
        }
        if (prevProps.comments.length !== this.props.comments.length) {
            this.props.onGetCommentByLessonId(this.state.learningLessonId)
            this.setState({
                course: course,
                comments: this.props.comments,
                userCurrent: this.props.userCurrent
            })
        }
    }
    componentDidMount() {
        console.log("ID: ",this.state.course.id)
        this.props.onEditCourse(this.state.course.id);
        this.props.onGetCommentByLessonId(this.state.learningLessonId)
        var course = this.props.course;
        this.setState({
            course: course,
            comments: this.props.comments,
            userCurrent: this.props.userCurrent
        })
    }
    componentWillReceiveProps(nextProps) {
        
        if(nextProps && nextProps.course){
           
            var {course} = nextProps;
            this.setState({
                course: course,
                comments: this.props.comments,
                userCurrent: nextProps.userCurrent
            })
            console.log("CommentscomponentWillReceiveProps: ", this.props.course)
        }
    }

    changedVideo = (url,lessonId) => {
        this.props.onGetCommentByLessonId(lessonId)
        console.log("ChangeVideo:", this.props.comments)
        this.setState({linkVideo:url,
            learningLessonId:lessonId,
            comments: this.props.comments
        })
        
    }
    changedIsChapter =()  => {
        this.setState({isChapter: true,
        isComment: false})
    }
    changedIsComment =()  => {
        this.setState({isChapter: false,
        isComment: true})
    }
    showChapterItem = () => {
        return this.state.course.chapters.map((chapter)=><UserChapterItem key={chapter.id} chapter={chapter} changedVideo={this.changedVideo}></UserChapterItem>)
    }
    render() {
        return(
            <div>
               <VideoContainer video={this.state.linkVideo}></VideoContainer>
               <h3>{this.state.course.name}</h3>
               <div className='row'>
                   <div className='col-2'>
                        <button onClick={() => this.changedIsChapter()} >Tổng quan</button>
                        <button onClick={() => this.changedIsComment()}>Bình luận</button>
                   </div>
                 
               </div>
               <br/>
               {/* <UserChapterItem chapter={this.state.chapter} changedVideo={this.changedVideo}></UserChapterItem> */}
               {/* {this.state.isLogin ? this.showChapterItem() : null} */}
               {this.state.isChapter&&this.showChapterItem()}
               {this.state.isComment && (<Comments currentUserId={this.state.userCurrent.id} comments={this.state.comments} learningLessonId={this.state.learningLessonId}/>)} 
                <br/>
                <br/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        course: state.courseEditReducer,
        comments: state.commentReducer,
        userCurrent: state.itemUserLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditCourse: (id) => {
            dispatch(allActions.courseAction.actGetCourseRequest(id))
        },

        onUpdateCourse: (courseDto, file) => {
            dispatch(allActions.courseAction.actUpdateCourseRequest(courseDto, file))
        },
        onGetCommentByLessonId: (lessonId) => {
            dispatch(allActions.commentAction.actGetCommentByLessonIdRequest(lessonId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLearningPage);