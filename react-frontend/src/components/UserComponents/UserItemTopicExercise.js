import React from 'react'
import {Link} from "react-router-dom"

function UserItemTopicExercise({id,img, name}) {
    return(
        <div>
            <Link to={"/user/exercise/"+id}>     
             <div className='col mx-1 mb-2'>
                <div className="card card-topic h-100 card-item-vocabulary" style={{width: '197px', height: '169px'}}>
                    <img className="card-img-top img-user-topic" src={img} alt="Ảnh mô tả chủ đề topic"/>
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                    </div>

                </div>
            </div>
            </Link>
        </div>
    )
}

export default UserItemTopicExercise;