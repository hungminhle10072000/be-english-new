import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminAddChapterPage.css'
import { Link } from 'react-router-dom'
import { BiSave, BiReset } from "react-icons/bi";
import chapterAction from "../../actions/chapterAction"
import { connect } from 'react-redux';
import validator from 'validator';
import allActions from '../../actions';

class AdminAddChapterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  
            chapter: {
                courseId:this.props.match.params.courseId,
                name: '',
                numPriority : -1,
                courseName:''
            },
            validationMsg: {},
            confirmDialog: false,
        }
        
    }
    componentDidUpdate(prevProps) {
        if (prevProps.course !== this.props.course) {
            this.setState({
                chapter: {
                    ...this.state.chapter,
                    courseName: this.props.course.name,
                    numPriority:this.props.course.numOfChapter
                }
            })
        }
    }

    componentDidMount() {
        this.props.onGetCourseById(this.state.chapter.courseId)
    
        this.setState({
            chapter: {
                ...this.state.chapter,
                courseName: this.props.course.name,
                numPriority:this.props.course.numOfChapter
            }
        })
    }



    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === 'numPriority' && value < 0 || name === 'numPriority' && value > this.props.course.numOfChapter ) {
            return;
        }

        this.setState({
            chapter: {     
                ...this.state.chapter,
                [name]: value
            }
        })
    }
    resetForm(event) {
        event.preventDefault();
        this.setState({
            chapter: {
                ...this.state.chapter,
                name: ''
            },
            validationMsg: {},
            confirmDialog: false,
        }) 
    }
    addChapter = (event) => {
        event.preventDefault();
        var chapterDto = {}
        chapterDto.courseId = this.state.chapter.courseId;
        chapterDto.name = this.state.chapter.name;
        chapterDto.numPriority = this.state.chapter.numPriority;
        window.history.back();
        this.props.onAddChapter(chapterDto)
    }
    validateAll = () => {
        const msg = {}

        if (validator.isEmpty(this.state.chapter.name.trim())) {
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

                <div className="row container-admin-add-chapter">
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
                                onClick={(event) => this.addChapter(event)} >
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
                        <label htmlFor="name"><b>Tên khoá học:</b></label>

                        <input  className="input-field" readOnly={true}
                          value={this.state.chapter.courseName}  type="text" placeholder="Tên khoá học" name="nameCourse" id="chapterName" />
                        <label htmlFor="name"><b>Số thứ tự:</b></label>
                        <input onChange={(event) => this.isChange(event)} className="input-field" type="number"
                            value={this.state.chapter.numPriority} placeholder="Nhập STT" name="numPriority" id="numPriority" />
                        <p className="msg-error">{this.state.validationMsg.number}</p>

                        <label htmlFor="name"><b>Tên chương:</b></label>
                        <input onChange={(event) => this.isChange(event)} className="input-field" type="text"
                            value={this.state.chapter.name} placeholder="Nhập tên chương" name="name" id="name" />
                        <p className="msg-error">{this.state.validationMsg.name}</p>
                        <br></br>
                        <div className="div-button-account">
                            <Link to="/admin/chapter">
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
        onAddChapter: (chapterDto, file) => {
            dispatch(allActions.chapterAction.actAddChapterRequest(chapterDto))
        },
        onGetCourseById: (courseId) => {
            dispatch(allActions.courseAction.actGetCourseRequest(courseId))
            console.log("Dispath: ",allActions.courseAction.actGetCourseRequest(courseId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddChapterPage);