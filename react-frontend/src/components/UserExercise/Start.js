import React from 'react'
import 'bulma/css/bulma.css'


function Start({onQuizStart}) {
    return (
        <div className="card">
            <div className='card-content'>
                <div className='content'>
                    <h1>Bắt đầu làm bài</h1>
                    <p>Chúc bạn may mắn!</p>
                    <button className='button is-info is-medium' onClick={onQuizStart}>Bắt Đầu</button>
                </div>
            </div>
        </div>
    )
}
export default Start;