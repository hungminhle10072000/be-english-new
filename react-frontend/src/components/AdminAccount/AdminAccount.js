import React, { Component, Fragment } from 'react'


export default class AdminAccount extends Component {
    render() {
        return (
            <Fragment>
                <main>
                    <div style={{marginTop: 10}}>
                        <div className="jumbotron">
                            <h1>Quản lí tài khoản</h1>
                        </div>
                        {/* <Link to="/admin/account/add"> */}
                            <button type="button" className="btn btn-success">Thêm mới</button> 
                        {/* </Link> */}
                        <form style={{ marginTop: 10}}>
                            <input onChange={(event) => this.callback(event.target.value)} className="styleSearch" type="text" name="search" placeholder="Tìm kiếm.." />
                        </form>
                    </div>
                </main>
            </Fragment>
        )
    }
}
