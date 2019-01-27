import React, { Fragment, Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
import {Redirect } from 'react-router'
import { Route, Switch ,withRouter} from 'react-router-dom';
import HomePage from './components/homepage.jsx'
import connect from "react-redux/es/connect/connect";


class App extends Component {
    componentDidMount(){
        /*this.props.dispatch({type: 'addUserProfile', data: 'hello' });*/
    }
    render() {
        console.log(this.props.userProfile)
        return (
            <Switch>
            <Route exact path="/" component={HomePage} />
            /*<Redirect from="*" to="/404" />*/
            </Switch>
    );
    }
}
function mapStateToProps(state){
    return {
        userProfile: state.Reducers.userProfile
    };

}
export default withRouter(connect(mapStateToProps)(App));
