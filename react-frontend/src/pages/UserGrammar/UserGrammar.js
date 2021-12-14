import React, { Component } from 'react'
import './UserGrammar.css'
import UserGrammarSelect from '../../components/UserGrammarSelect/UserGrammarSelect'

export default class UserGrammar extends Component {
    render() {
        return (
            <div className='container-fluid main-content-user-grammar'>
                <div className='row div-grammar-select justify-content-center'>
                    <div className='col-md-12'>
                        <UserGrammarSelect />
                    </div>
                </div>
                <div className='row mt-2 mb-2 div-content-user-learn-grammar'>
                    <div className='col-md-12'>
                        Đây là nội dung bài học
                    </div>
                </div>
            </div>
        )
    }
}
