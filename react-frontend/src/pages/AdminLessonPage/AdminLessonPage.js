import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { BsFillPersonPlusFill } from "react-icons/bs";
import AdminItemLesson from '../../components/AdminItemLesson/AdminItemLesson';
import allActions from '../../actions';
import {connect} from 'react-redux'
import Player from "../../components/reactPlayer";

class AdminLessonPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            term: '',
            lessons:[],
            open: false,
            linkVideo:''
        }
    }

    onOpenModal = (video) => {
        this.setState((prevState) => ({
          open: !prevState.open,
          linkVideo:video
        }));
        console.log(this.state.open)
      };


    showItemsLesson(lessons) {
        console.log(lessons)
        var result = null;
        if (lessons!= undefined && lessons.length > 0) {
            result = lessons.map((lesson,key) => <AdminItemLesson lesson={lesson} key={key} onOpenModal={this.onOpenModal} linkVideo={lesson.video}/>) 
        }
        return result;
    }

    componentDidMount() {
        if (this.state.id == -1) {
            this.props.getAllLessons();
        } else {
            this.props.getLessonByChapterId(this.state.id);
        }
        
    }

    callback = (term) => {
        this.setState({
            term: term
        })
    }

    render() {
        var keyword = this.state.term;
        var lessons = this.props.lessonReducer;
        var resultSearch = []
        lessons.forEach(x => {
            if (x.id.toString().indexOf(keyword)!=-1 || x.name.indexOf(keyword)!=-1 ||
             x.chapterName.indexOf(keyword)!= -1||  x.courseName.indexOf(keyword)!= -1  ) {
                 resultSearch.push(x)
             }
        });

        return(
            <div className="container-fluid content-admin-acconut">
                 <Player open={this.state.open} toggleModal={this.onOpenModal} linkVideo={this.state.linkVideo} />
                <div className="row">
                    <div className="col-12">
                        <div style={{marginTop: 10}}>
                            <div className="jumbotron manager-account">
                                <h2>Quản lí bài học</h2>  
                            </div>
                            
                            <Link to={`/admin/lesson/add/${this.state.id}`} style={{textDecoration:"none"}}>
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
                                            <th scope="col">Tên bài học</th>
                                            <th scope="col">Tên chương</th>
                                            <th scope="col">Khoá học</th>
                                            <th scope="col">Bài giảng</th>
                                            <th scope="col">Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Item lesson */}
                                        {this.showItemsLesson(resultSearch)}
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
        lessonReducer:state.lessonReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllLessons: () => {
            dispatch(allActions.lessonAction.actFetchLessonRequest())
        },
        getLessonByChapterId: (chapterId) => {
            dispatch(allActions.lessonAction.actGetLessonByChapterIdRequest(chapterId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminLessonPage)