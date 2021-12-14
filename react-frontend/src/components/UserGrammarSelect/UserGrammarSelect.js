import React, { Component, Fragment } from 'react'
import Select from 'react-select'
import './UserGrammarSelect.css'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
class UserGrammarSelect extends Component {
    render() {
        return (
            <Fragment>
               <h6 className='text-title-grammar'>Mời bạn chọn bài bên dưới để học NGỮ PHÁP TOEIC nhé!</h6>
               <div className='group-select-grammar'>
                <Select className='class-select-grammar' options={options} />
                <button className='btn btn-success btn-learn-grammar'>Học</button>
               </div>        
            </Fragment>
        )
    }
}

export default UserGrammarSelect;
