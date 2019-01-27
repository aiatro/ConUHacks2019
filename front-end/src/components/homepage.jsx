import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button, Form, Header} from 'semantic-ui-react'
import * as Options from "../options";
import axios from "axios";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }
    render() {
        return (<div className='registrationForm-Container'>
            <div className='home-container'>Match With Experienced Mentors</div>
            <div className='home-second-container'> Communicate Through Live Chat </div>
            <div className='home-third-container'> Ask Any Question and Practice Your French</div>
        </div>)
    }
}
function mapStateToProps(state){
    return {
        userProfile: state.Reducers.userProfile
    };

}
export default withRouter(connect(mapStateToProps)(HomePage));