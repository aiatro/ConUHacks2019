import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
       return (<div> Hello World!</div>)
        }
}
function mapStateToProps(state){
    return {
        userProfile: state.Reducers.userProfile
    };

}
export default withRouter(connect(mapStateToProps)(HomePage));