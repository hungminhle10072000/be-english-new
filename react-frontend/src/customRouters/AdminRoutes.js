import React, { Component } from 'react'
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter
} from "react-router-dom";
import AdminAccount from '../components/AdminAccount/AdminAccount';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import UserHomePage from '../pages/UserHomePage/UserHomePage';


class AdminRoutes extends Component {


    //     return (
    //         <div>
    //             <Switch>
    //                 <Route exact path="/admin" render={() => {
    //                     return check ? <AdminHomePage /> : <Redirect to="/" />
    //                 }}>
    //                 </Route>
    //                 <Route exact path="/" component={LoginPage} />
    //                 <Route exact path="/home" component={() => <UserHomePage role= {this.props.roleCurrent} /> }></Route>
    //             </Switch>
    //         </div>
    //     )
    // }

    render() {        
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={AdminHomePage} />
                    <Route exact path="/admin/account" component={AdminAccount} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="*" component={NotFoundPage} />
                </Switch>
            </div>
        )
    }

}

export default AdminRoutes;

