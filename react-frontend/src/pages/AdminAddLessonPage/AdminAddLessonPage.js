import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminAddLessonPage.css'
import { Link } from 'react-router-dom'
import { BiSave, BiReset } from "react-icons/bi";
import { connect } from 'react-redux';
import validator from 'validator';
import allActions from '../../actions';

class AdminAddLessonPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  
            lesson: {
                courseId:this.props.match.params.courseId,
                name: '',
                courseName:''
            },
            validationMsg: {},
            confirmDialog: false,
        }

    }
    componentDidMount() {
        this.props.onGetCourseById(this.state.lesson.courseId)
        this.setState({
            lesson: {
                ...this.state.lesson,
                courseName: this.props.course.name
            }
        })
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            lesson: {     
                ...this.state.lesson,
                [name]: value
            }
        })
    }
    resetForm(event) {
        event.preventDefault();
        this.setState({
            lesson: {
                ...this.state.lesson,
                name: ''
            },
            validationMsg: {},
            confirmDialog: false,
        }) 
    }
    addLesson = (event) => {
        event.preventDefault();
        var lessonDto = {}
        lessonDto.courseId = this.state.lesson.courseId;
        lessonDto.name = this.state.lesson.name;
        window.history.back();
        this.props.onAddLesson(lessonDto)
    }
    validateAll = () => {
        const msg = {}

        if (validator.isEmpty(this.state.lesson.name.trim())) {
            msg.name = "Yêu cầu nhập tên chương !"
        }
        this.setState({
            validationMsg: msg
        })
        if (Object.keys(msg).length > 0) return false
        return true;
    }
    handleConfirmationBox = (event) => {
        event.preventDefault();
        const isValid = this.validateAll()
        console.log("is Valid: ", isValid)
        if (!isValid) return
        else {
            if (!this.state.confirmDialog) {
                document.querySelector(".confirm-bg").style.display = "flex"
                document.querySelector(".container-dialog").style.display = "flex"
                this.setState({
                    confirmDialog: true
                })
            } else {
                document.querySelector(".confirm-bg").style.display = "none"
                document.querySelector(".container-dialog").style.display = "none"
                this.setState({
                    confirmDialog: false
                })
            }
        }
    }

    render() {
        return (
            <div>
                <h2>___________________________________________________________________________________________________________</h2>

                <div className="row container-admin-add-lesson">
                    <div className="container-dialog">
                        <div className="confirmation-text">
                            Bạn có chắc chắn muốn lưu ?
                        </div>
                        <div className="button-container">
                            <button
                                className="confirmation-button cancel-button"
                                onClick={(event) => this.handleConfirmationBox(event)}>
                                Hủy
                            </button>
                            <button
                                className="confirmation-button btn-confirm"
                                onClick={(event) => this.addLesson(event)} >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                    <div
                        className="confirm-bg"
                        onClick={(event) => this.handleConfirmationBox(event)}>
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <h2>Thêm chương học</h2>
                        <br></br>
                        <lable htmlFor="name"><b>Tên khoá học:</b></lable>

                        <input  className="input-field" readOnly="true"
                          value={this.state.lesson.courseName}  type="text" placeholder="Tên khoá học" name="nameCourse" id="lessonName" />


                        <lable htmlFor="name"><b>Tên chương:</b></lable>
                        <input onChange={(event) => this.isChange(event)} className="input-field" type="text"
                            value={this.state.lesson.name} placeholder="Nhập tên chương" name="name" id="name" />
                        <p className="msg-error">{this.state.validationMsg.name}</p>
              
                        <lable htmlFor="name"><b>Tên bài học:</b></lable>
                        <input onChange={(event) => this.isChange(event)} className="input-field" type="text"
                            value={this.state.lesson.name} placeholder="Nhập tên chương" name="name" id="name" />
                        <p className="msg-error">{this.state.validationMsg.name}</p>
                        <br></br>
                        <lable htmlFor="name"><b>Bài giảng:</b></lable>
                        <video src={'x'} width="600" height="300" controls="controls" autoplay="true" />
                        <div className="div-button-account">
                            <Link to="/admin/lesson">
                                <button onClick={(event) => this.handleConfirmationBox(event)}
                                    type="button" className="btn btn-success btn-save-account">Lưu <BiSave /></button>
                            </Link>
                            <button onClick = {(event) => this.resetForm(event)}
                                type="reset" className="btn btn-warning" >Reset <BiReset /></button>
                        </div>

                    </div>
                    <div className="col-sm-3"></div>
                </div>
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
        onAddLesson: (lessonDto, file) => {
            dispatch(allActions.lessonAction.actAddLessonRequest(lessonDto))
        },
        onGetCourseById: (courseId) => {
            dispatch(allActions.courseAction.actGetCourseRequest(courseId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddLessonPage);