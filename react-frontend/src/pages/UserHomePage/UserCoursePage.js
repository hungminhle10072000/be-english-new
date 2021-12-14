import React, { Component } from 'react'
import UserItemCourse from '../../components/UserComponents/UserItemCourse'
import './css/UserHome.css'
import allActions from '../../actions';
import { connect } from 'react-redux'
class UserHomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {
                name: 'Nghĩa',
                image: 'Image',
                introduce: 'Java'
            },
            courses: [],
            coursesOfUser: [],
            userCurrent: {
                id: -1
            }
        }
    }


    componentDidUpdate(prevProps) {
        console.log("USER: ", this.state.userCurrent)
        if (prevProps.courses != this.props.courses) {
            this.setState({
                courses: this.props.courseReducer,
                userCurrent: this.props.userCurrent
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("USER: ", this.state.userCurrent)
        if (nextProps && nextProps.courseReducer) {
            const courses = nextProps.courseReducer;
            this.setState({
                courses: courses,
                userCurrent: nextProps.userCurrent
            })
        }
    }

    componentDidMount() {
        console.log("USER: ", this.state.userCurrent)
        this.props.getAllCourses();
        this.setState({
            courses: this.props.courseReducer,
            userCurrent: this.props.userCurrent
        })
    }
    showItemsCourse(courses) {
        var result = null;
        if (courses != undefined && courses.length > 0) {
            result = courses.map((course, key) => <UserItemCourse course={course} key={key} />)
        }
        return result;
    }
    render() {
        const coursesOfUser = []
        const coursesOtherwise = []
        if (this.state.courses !== null) {
            for (let item of this.state.courses) {
                let flag = 0;
                if (item.users !== null) {
                    for (let user of item.users) {
                        if (user.id === this.state.userCurrent.id) {
                            flag = 1;
                        }
                    }
                }

                if (flag === 1) {
                    coursesOfUser.push(item)
                } else {
                    coursesOtherwise.push(item)
                }
            }
        }


        return (
            <div>
                {this.state.userCurrent.id !== -1 ? (
                    <div className='container-fluid main-content-user-courses'>
                        <h2>Khoá đang học</h2>
                        <div className='row'>
                            {this.showItemsCourse(coursesOfUser)}
                        </div>
                        <br />
                        <h2>Khoá học chưa đăng ký</h2>
                        <div className='row'>
                            {this.showItemsCourse(coursesOtherwise)}
                        </div>
                    </div>
                ) : (
                    <div className='container-fluid main-content-user-courses'>
                        <h2>Tất cả khoá học</h2>
                        <div className='row'>
                            {this.showItemsCourse(this.state.courses)}
                        </div>
                    </div>
                )
            }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        courseReducer: state.courseReducer,
        userCurrent: state.itemUserLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCourses: () => {
            dispatch(allActions.courseAction.actFetchCourseRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage)