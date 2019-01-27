import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Image} from 'semantic-ui-react'
import Canada from '../images/canada.png'

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        const { activeMenuItem } = this.props;
        return (
            <div className='main-container-topBar'>
                <Image className='canadaImage' src={Canada} size='small' />
                <div className='topbar-text'>{this.props.userProfile? this.props.userProfile : 'Erdem'}</div>
               </div>)
    }
}
function mapStateToProps(state){
    return {
        userProfile: state.Reducers.userProfile,
    };

}
export default withRouter(connect(mapStateToProps)(Topbar));