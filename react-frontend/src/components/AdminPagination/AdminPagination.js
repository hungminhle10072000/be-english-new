import React, { Component } from 'react'
import './AdminPagination.css'

export default class AdminPagination extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a className="active" href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div> 
                </div>
            </div>
        )
    }
}
