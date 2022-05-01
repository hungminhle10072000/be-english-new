import React, { Component } from 'react'
import { connect } from 'react-redux'
import allActions from '../../actions'
import { Link } from 'react-router-dom'
import { AiOutlineFileAdd } from "react-icons/ai"
import AdminItemQuestion from '../../components/AdminItemQuestion/AdminItemQuestion'
import convertURL from '../../constants/convertUrl'

class AdminDetailQuestion extends Component {

    constructor(props){
        super(props);

        this.state = ({
            idExercise: this.props.match.params.idExercise,
            nameExercisePara: this.props.match.params.nameExercise,
            listQuestionExerciseWithId: [],
            nameExericse: ''
        })
    }

    componentDidMount() {
        const {nameExercisePara,idExercise} = this.state
        this.props.onItemLoading()
        this.props.onGetQuestionWithExercise(nameExercisePara,idExercise);
    }

    componentWillReceiveProps(nextProps) {
        if((nextProps && nextProps.questionReducer)) {
            const {questionReducer} = nextProps
            const nameExericse = questionReducer.nameExericse
            const listQuestionExercise = questionReducer.listQuestionExercise
            this.setState({
                listQuestionExerciseWithId: listQuestionExercise,
                nameExericse: nameExericse
            })
        }
    }
    
    showItemQuestion = () => {
        let result = null;
        if(this.state.listQuestionExerciseWithId.length > 0){
            result = this.state.listQuestionExerciseWithId.map((question, key) => {
                return (
                    <AdminItemQuestion 
                        key={question.id}
                        id={question.id}
                        ordinal_number = {key+1}
                        content_question = {question.content_question}
                        correct_answer = {question.correct_answer}
                        option_1 = {question.option_1}
                        option_2 = {question.option_2}
                        option_3 = {question.option_3}
                        option_4 = {question.option_4}
                        paragraph = {question.paragraph}
                        audio = {question.audio}
                        image = {question.image_description}
                        type = {question.type}
                    />
                )
            })
        }
        return result
    }

    addQuestionListen = () => {
        alert("Chức năng này chưa được hoàn thiện!!!!");
    }
    
    render() {

        return (
            <div className="container-fluid content-admin-voca-topic">
                <div className="row">
                    <div className="col-12">
                        <div style={{marginTop: 10}}>
                            <div className="jumbotron manager-voca-topic" style={{marginBottom: "1rem"}}>
                                <h2>Danh sách câu hỏi</h2>  
                            </div>
                            
                            <Link to={"/admin/addQuestion/" + this.state.idExercise + '/' + convertURL(this.state.nameExericse)} style={{textDecoration:"none"}} onClick={this.handleShow}>
                                <button type="button" className="btn btn-success btn-add-voca-topic">Thêm câu hỏi đọc<AiOutlineFileAdd color={"white"} className="iconAddVocaTopic"/></button> 
                            </Link>

                            <Link to={"/admin/addQuestionListen/" + this.state.idExercise + '/' + convertURL(this.state.nameExericse)} style={{textDecoration:"none", marginLeft: "1rem"}} onClick={this.handleShow}>
                                <button type="button" className="btn btn-danger btn-add-voca-topic">Thêm câu hỏi nghe<AiOutlineFileAdd color={"white"} className="iconAddVocaTopic"/></button> 
                            </Link>
                                                        
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: '30px'}}>
                    <div className="col-12">
                        <table className="table-bordered text-sm-center table-custom">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>STT</th>
                                    <th>Nội dung</th>
                                    <th>Ảnh mô tả</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showItemQuestion()}
                            </tbody>
                            <tfoot className="thead-inverse">
                                <tr>
                                    <th>STT</th>
                                    <th>Nội dung</th>
                                    <th>Ảnh mô tả</th>
                                    <th>Chức năng</th>
                                </tr>
                            </tfoot>        
                        </table>
                    </div>

                </div>
            </div>          
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        questionReducer: state.questionReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetQuestionWithExercise: (nameExercisePara,idExercise) => {
            dispatch(allActions.questionAction.actGetAllQuestionExerciseByIdRequest(nameExercisePara, idExercise))
        },
        onItemLoading: () => {
            dispatch(allActions.userItemLoadingAction.openItemLoading())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminDetailQuestion);
