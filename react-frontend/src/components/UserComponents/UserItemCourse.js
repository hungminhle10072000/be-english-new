import React, {Component} from 'react'
import '../css/UserCSS.css'
class UserItemCourse extends Component {

    constructor(props){
        super(props);

        this.state = {
            course: {
                name: this.props.course.name,
                image: this.props.course.image,
                introduce: this.props.course.introduce
            }
        }
    }

    render() {
        return(
            <section class="index-module_col__2EQm9 index-module_c-12__u7UXF index-module_m-4__30Uoi index-module_l-3__MjWvb">
                    <div class="CourseItem_wrapper__1XHIu CoursesList_courseItem__3L89p">
                        <a href="/learning/javascript-co-ban">
                            <div class="CourseItem_thumb__2ezb2" title="JavaScript Cơ Bản"
                                style={{backgroundImage:`url(https://cdn.fullstack.edu.vn/f8-learning/courses/1.png)`}} >
                            </div>
                        </a>
                    </div>
                    <h3 class="CourseItem_title__1vsib">
                        <a href="/learning/javascript-co-ban">{this.state.course.name}</a>
                    </h3>
            </section>
        )
    }
}

export default UserItemCourse;