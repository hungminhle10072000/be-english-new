import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BiSave, BiReset } from "react-icons/bi"
import allActions from '../../actions/index'
import { connect } from 'react-redux';
import convertURL from '../../constants/convertUrl';

class AdminAddQuestionRead extends Component {

    constructor(props){
        super(props);

        this.state = ({
            content_question: '',
            correct_answer: '',
            paragraph: '',
            type: 1,
            option_1: '',
            option_2: '',
            option_3: '',
            option_4: '',
            idExercise: this.props.match.params.idExercise,
            nameExercise: this.props.match.params.nameExercise
        })
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    addQuestionRead = (event) => {
        event.preventDefault();
        if(this.state.content_question === ''){
            alert("Yêu cầu nhập câu hỏi!!!!")
            return;
        }
        if(this.state.option_1 === ''){
            alert("Yêu cầu nhập lựa chọn A!!!!")
            return;
        }
        if(this.state.option_2 === ''){
            alert("Yêu cầu nhập lựa chọn B!!!!")
            return;
        }
        if(this.state.option_3 === ''){
            alert("Yêu cầu nhập lựa chọn C!!!!")
            return;
        }
        if(this.state.option_4 === ''){
            alert("Yêu cầu nhập lựa chọn D!!!!")
            return;
        }
        if(this.state.correct_answer === ''){
            alert("Yêu cầu nhập đáp án đúng!!!!")
            return;
        }
        let addQuestionReadDto = {}

        addQuestionReadDto.content_question = this.state.content_question;
        addQuestionReadDto.correct_answer = this.state.correct_answer;
        addQuestionReadDto.paragraph = this.state.paragraph;
        addQuestionReadDto.type = this.state.type;
        addQuestionReadDto.option_1 = this.state.option_1;
        addQuestionReadDto.option_2 = this.state.option_2;
        addQuestionReadDto.option_3 = this.state.option_3;
        addQuestionReadDto.option_4 = this.state.option_4;
        addQuestionReadDto.idExercise = this.state.idExercise;

        this.props.onAddQuestionRead(addQuestionReadDto)
    }

    render() {
        return (
            <div className="container-fluid container-admin-add-account">
                <div className="row">
                    <div className="col-12">
                        <div style={{marginTop: 10}}>
                            <div className="jumbotron manager-account">
                                <h2>Thêm câu hỏi đọc</h2>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="row">
                                {/* <div className='col-md-12'>
                                    <label htmlFor="paragraph"><b>Bài đọc</b></label> <br />      
                                    <textarea style={{width: '100%'}} onChange={(event) => this.isChange(event)} className="input-field" placeholder="Bài đọc" name="paragraph" id="paragraph" rows="5"/>
                                </div> */}

                                <div className='col-md-12'>
                                    <label htmlFor="content_question"><b>Câu hỏi</b></label> <br />      
                                    <textarea style={{width: '100%'}} onChange={(event) => this.isChange(event)} className="input-field" placeholder="Câu hỏi" name="content_question" id="content_question" rows="3" required/>
                                </div>

                                <div className='col-md-12'>
                                    <label htmlFor="option_1"><b>Lựa chọn A</b></label>    
                                    <input onChange={(event) => this.isChange(event)} className="input-field" type="text" placeholder="Lựa chọn A" name="option_1" id="option_1" required/>
                                </div>

                                <div className='col-md-12'>
                                    <label htmlFor="option_2"><b>Lựa chọn B</b></label>    
                                    <input onChange={(event) => this.isChange(event)} className="input-field" type="text" placeholder="Lựa chọn B" name="option_2" id="option_2" required/>
                                </div>

                                <div className='col-md-12'>
                                    <label htmlFor="option_3"><b>Lựa chọn C</b></label>    
                                    <input onChange={(event) => this.isChange(event)} className="input-field" type="text" placeholder="Lựa chọn C" name="option_3" id="option_3" required/>
                                </div>

                                <div className='col-md-12'>
                                    <label htmlFor="option_4"><b>Lựa chọn D</b></label>    
                                    <input onChange={(event) => this.isChange(event)} className="input-field" type="text" placeholder="Lựa chọn D" name="option_4" id="option_4" required/>
                                </div>

                                <div className='col-md-12'>
                                    <label htmlFor="correct_answer"><b>Đáp án đúng</b></label>    
                                    <input onChange={(event) => this.isChange(event)} className="input-field" type="text" placeholder="Đáp án đúng" name="correct_answer" id="correct_answer" required/>
                                </div>
                                
                                <div className="div-button-account mb-3 mt-3">
                                    <button onClick={(event) => this.addQuestionRead(event)} type="button" className="btn btn-success btn-save-account">Lưu <BiSave /></button> 
                                    <button type="reset" className="btn btn-warning">Reset <BiReset /></button>
                                    <Link to={"/admin/exercise/" + this.state.idExercise + "/" + convertURL(this.state.nameExercise) }>
                                        <button type="button" className='btn btn-danger ml-3'>Quay lại</button>
                                    </Link>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddQuestionRead: (addQuestionReadDto) => {
            dispatch(allActions.questionAction.actAddQuestionRequest(addQuestionReadDto))
        }
    }
}

export default connect(null, mapDispatchToProps) (AdminAddQuestionRead);
