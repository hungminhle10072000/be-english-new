import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { BsFillPersonPlusFill } from "react-icons/bs";
import AdminItemComment from '../../components/AdminItemComment/AdminItemComment'
import allActions from '../../actions';
import {connect} from 'react-redux';
import {Modal,Button, ModalBody} from 'react-bootstrap'


class AdminCommentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            comments:[],
            isShow: false,
            parentid: -1,
            commentReplyCurrent: {
                content:'',
                parentId:-1,
                lessonId:-1,
                userId: this.props.userCurrent.id
            },
            text:'',
            msgErr:''
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.setText = this.setText.bind(this)
    }

    showItemsComment(comments) {
        console.log("Comments: ",comments)
        var result = null;
        if (comments!= undefined && comments.length > 0) {
            result = comments.map((comment,key) => <AdminItemComment comment={comment} key={key} handleOpen={this.handleOpen}/>) 
        }
        return result;
    }

    componentDidMount() {
        this.props.getAllComments();
    }

    callback = (term) => {
        this.setState({
            term: term
        })
    }
    handleClose = () =>{
        this.setState({
            isShow:false,
            parentid:-1,
            msgErr:''
        })
    }
    handleOpen = (parentid) => {
        this.setState({
            isShow:true,
            parentid:parentid
        })
       
        console.log("F", this.state.isShow)
    }
    handleSubmit = () => {
        if (this.state.text.trim() ==='') {
            this.setState({
                msgErr:'Vui lòng nhập nội dung bình luận!'
            })
        } else {
            var commentParent = {}
            commentParent = this.props.commentReducer.find(comment => comment.id == this.state.parentid)
            var commentDto = {
                content:this.state.text,
                parentId:this.state.parentid,
                lessonId:commentParent.lessonId,
                userId: this.props.userCurrent.id
            }
            this.setState({
                isShow:false,
                msgErr:''
            })
            this.props.replyComment(commentDto)
        }
    }
    setText = (value) =>{
        this.setState({
            text:value
        })
    }

    render() {
        var keyword = this.state.term;
        var comment = this.props.commentReducer;
        var resultSearch = []
        comment.forEach(x => {
            if (x.id.toString().indexOf(keyword)!=-1 || x.name.indexOf(keyword)!=-1 ||
             x.introduce.indexOf(keyword)!= -1) {
                 resultSearch.push(x)
             }
        });

        return(
            <div className="container-fluid content-admin-acconut">
                <div className="row">
                    <div className="col-12">
                        <div style={{marginTop: 10}}>
                            <div className="jumbotron manager-account">
                                <h2>Quản lí bình luận</h2>  
                            </div>
                            
                        
                            <input onChange={(event) => this.callback(event.target.value)}
                            type="text" name="search" placeholder="Tìm kiếm ..." className="searchAccount" />
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-bordered text-sm-center" style={{marginTop: 10}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Người bình luận</th>
                                            <th scope="col">Nội dung</th>
                                            <th scope="col">Thời gian</th>
                                            <th scope="col">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Item comment */}
                                        {this.showItemsComment(resultSearch)}
                                    </tbody>      
                                </table>
                            </div>
                        {/* <AdminPagination /> */}
                    </div>
                </div>
                <Modal show={this.state.isShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Trả lời bình luận</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.msgErr}
                    </Modal.Body>
                    {<textarea
                className="comment-form-textarea"
                onChange={(e) =>this.setText(e.target.value)}
               
            />}
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Đóng
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Trả lời
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        commentReducer:state.commentReducer,
        userCurrent:state.itemUserLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllComments: () => {
            dispatch(allActions.commentAction.actFetchCommentRequest())
        },
        replyComment: (commentDto) => {
            dispatch(allActions.commentAction.actAddCommentRequest(commentDto))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminCommentPage)