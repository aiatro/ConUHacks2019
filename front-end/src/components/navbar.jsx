import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Menu} from 'semantic-ui-react'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }
    handleItemClick = (e, { name }) => this.props.dispatch({type: 'activeMenuItem', data: name});
    registeration =()=>{ this.props.history.push(`/register`);}

    render() {
        const { activeMenuItem } = this.props;
        if(this.props.userProfile){
            return (
                <div className='navbar-container'>
                    <Menu pointing secondary vertical>
                        <Menu.Item
                            name='Home'
                            active={activeMenuItem === 'Home'}
                            fitted
                            onClick={this.handleItemClick}
                        >
                            Dashboard
                        </Menu.Item>

                        <Menu.Item
                            name='Connect'
                            active={activeMenuItem === 'Connect'}
                            fitted='Connect'
                            onClick={this.handleItemClick}
                        >
                            Connect
                        </Menu.Item>

                        <Menu.Item
                            name='Logout'
                            active={activeMenuItem === 'Logout'}
                            fitted='Logout'
                            onClick={this.handleItemClick}
                        >
                            Logout
                        </Menu.Item>
                    </Menu></div>)

        }else{
            return (
                <div className='navbar-container'>
                    <Menu pointing secondary vertical>
                        <Menu.Item
                            name='Home'
                            active={activeMenuItem === 'Home'}
                            fitted
                            onClick={this.handleItemClick}
                        >
                            Home
                        </Menu.Item>

                        <Menu.Item
                            name='Register'
                            active={activeMenuItem === 'Register'}
                            fitted='Register'
                            onClick={(e, { name })=>{ this.handleItemClick(e, { name });this.registeration();}}
                        >
                            Register
                        </Menu.Item>

                        <Menu.Item
                            name='Login'
                            active={activeMenuItem === 'Login'}
                            fitted='Login'
                            onClick={this.handleItemClick}
                        >
                            Login
                        </Menu.Item>
                    </Menu></div>)

        }
    }
}
function mapStateToProps(state){
    return {
        userProfile: state.Reducers.userProfile,
        activeMenuItem: state.Reducers.activeMenuItem
    };

}
export default withRouter(connect(mapStateToProps)(Navbar));