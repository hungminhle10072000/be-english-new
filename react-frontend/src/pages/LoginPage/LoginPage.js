import React, { Component } from 'react'

export default class LoginPage extends Component {


    render() {
        return (
            <div>
                <form >
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                    <input type="text"  placeholder="Enter Username" name="uname" required /> <br/>
                        <label htmlFor="psw"><b>Password</b></label>
                    <input type="password"  placeholder="Enter Password" name="psw" required /> <br/>
                    <button type="submit">Login</button> 
                    </div>
                </form>
            </div>
        )
    }
}
