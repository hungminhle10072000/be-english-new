import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { BsFillPersonPlusFill } from "react-icons/bs";
import AdminItemComment from '../../components/AdminItemComment/AdminItemComment'
import allActions from '../../actions';
import {connect} from 'react-redux'

class AdminCommentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            comments:[]
        }
    }

    showItemsComment(comments) {
        console.log(comments)
        var result = null;
        if (comments!= undefined && comments.length > 0) {
            result = comments.map((comment,key) => <AdminItemComment comment={comment} key={key}/>) 
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
                                <h2>Quản lí khoá học</h2>  
                            </div>
                            
                            <Link to="/admin/comment/add" style={{textDecoration:"none"}}>
                                <button type="button" className="btn btn-success btn-add-account">Thêm mới<BsFillPersonPlusFill className="iconAddAccount"/></button> 
                            </Link>
                         
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
                                            <th scope="col">Tên khoá học</th>
                                            <th scope="col">Giới Thiệu</th>
                                            <th scope="col">Ảnh khoá học</th>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        commentReducer:state.commentReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllComments: () => {
            dispatch(allActions.commentAction.actFetchCommentRequest())
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminCommentPage)