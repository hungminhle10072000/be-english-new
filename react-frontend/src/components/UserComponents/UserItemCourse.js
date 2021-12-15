import React, { Component } from 'react'
import '../css/UserCSS.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class UserItemCourse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            course: {
                id: this.props.course.id,
                name: this.props.course.name,
                image: this.props.course.image,
                introduce: this.props.course.introduce
            }
        }
    }

    render() {
        return (
            <div className='col-3 mb-2'>
                 <Link to={`/user/learning/${this.props.course.id}`} style={{ textDecoration: 'none' }}>
                    <Card style={{borderRadius: '2rem'}}>
                        <Card.Img style={{ height: '10rem' }} variant="top" src={this.state.course.image} />
                        <Card.Body>
                            <Card.Title >{this.state.course.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                 </Link>
            </div>

        )
    }
}

export default UserItemCourse;