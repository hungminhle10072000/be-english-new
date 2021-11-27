import React, {Component} from 'react'
import UserItemCourse from '../../components/UserComponents/UserItemCourse'
import './css/UserHome.css'

// style="--progress:85%; --progress-left:83%;"
// style="background-image: url(&quot;https://cdn.fullstack.edu.vn/f8-learning/courses/1.png&quot;);"
class UserHomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            course: {
                name: 'Nghĩa',
                image: 'Image',
                introduce: 'Java'
            }
        }
    }
    render() {
        return(
            <div>
                <div class="SectionList_body__2yKdI">
                    <div class="Home_courseItem__3V9f8">
                        <section class="index-module_row__-AHgh">
                        <UserItemCourse course={this.state.course}></UserItemCourse>
                        <UserItemCourse course={this.state.course}></UserItemCourse>
                        <UserItemCourse course={this.state.course}></UserItemCourse>
                        <UserItemCourse course={this.state.course}></UserItemCourse>
                        <UserItemCourse course={this.state.course}></UserItemCourse>
                        <UserItemCourse course={this.state.course}></UserItemCourse>
                        <UserItemCourse course={this.state.course}></UserItemCourse>
                        <UserItemCourse course={this.state.course}></UserItemCourse>
                  
                        </section>
                    </div>
                </div>
            </div>

            
        )
    }
}

export default UserHomePage;