import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { BiSave, BiReset } from "react-icons/bi";
import chapterAction from "../../actions/chapterAction"
import { connect } from 'react-redux';
import validator from 'validator';
import allActions from '../../actions';

class AdminEditChapterPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  
            chapter: {
                id:this.props.match.params.id,
                courseId: 1 ,
                name: '',
                numPriority : -1,
                courseName:''
            },
            validationMsg: {},
            confirmDialog: false,
        }

    }
    componentDidMount() {
        this.props.onGetChapterById(this.state.chapter.id)
        this.setState({
            chapter: this.props.chapter
        })
        this.props.onGetCourseById(this.props.chapter.courseId)
        
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.chapter){
            var {chapter} = nextProps;
            this.setState({
                chapter: {...chapter}
            })
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        console.log("NUMOFCHAPTER: ",this.props.course.numOfChapter)
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
            chapter: this.props.chapter,
            validationMsg: {},
            confirmDialog: false,
        }) 
    }
    updateChapter = (event) => {
        event.preventDefault();
        var chapterDto = {}
        chapterDto.id = this.state.chapter.id;
        chapterDto.courseId = this.state.chapter.courseId;
        chapterDto.numPriority = this.state.chapter.numPriority;
        chapterDto.name = this.state.chapter.name;
        window.history.back();
        this.props.onUpdateChapter(chapterDto)
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

                <div className="row container-admin-update-chapter">
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
                                onClick={(event) => this.updateChapter(event)} >
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
                        <h2>Sửa chương học</h2>
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
        chapter: state.chapterEditReducer,
        course: state.courseEditReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateChapter: (chapterDto) => {
            console.log("Hero")
            dispatch(allActions.chapterAction.actUpdateChapterRequest(chapterDto))
        },
        onGetCourseById: (courseId) => {
            dispatch(allActions.courseAction.actGetCourseRequest(courseId))
        },
        onGetChapterById: (id) => {
            dispatch(allActions.chapterAction.actGetChapterRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditChapterPage);