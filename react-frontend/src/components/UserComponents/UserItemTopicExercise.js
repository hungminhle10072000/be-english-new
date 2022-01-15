import React from 'react'
import {Link} from "react-router-dom"
import {Card, CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button,CardGroup} from 'reactstrap';

function UserItemTopicExercise({id,img, name,description, status}) {
    return(        
        // <div style={{width:300+'px' ,display: 'inline-block', margin:10+'px'}}>
        <div className='col-md-3 mb-2'>
            <Link to={"/user/exercise/"+id} style={{ textDecoration: 'none' }}>     
            <Card style={{height: '100%'}}>
                <CardImg style={{width:300+'px', height:200+'px'}}
                    alt="Card image cap"
                    src={img}
                    top
                    width="30%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                    {status === 0 ? <span style={{color:'orange', margin:'0px'}} >Chưa làm</span> : <span style={{color:'green', margin:'0px'}}>Đã làm</span>}
                    </CardSubtitle>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>  
            </Link>
        </div> 
        
    )
}

export default UserItemTopicExercise;

    