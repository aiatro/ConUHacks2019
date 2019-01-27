import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button, Form, Header} from 'semantic-ui-react'
import * as Options from "../options";
import axios from "axios";
const quebecCities = Options.quebecCities;

const optionsType = [
    {key: 'Mentor', value: 'Mentor', text: 'Mentor'},
    {key: 'Requester', value: 'Requester', text: 'Requester'}
]
class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName:  "",
            age:'',
            city: '',
            type: '',
            email: "",
            password: '',
            confirmPassword: '',
            errorFirstName:false,
            errorLastName:false,
            errorAge: false,
            errorCity: false,
            errorType:false,
            errorEmail:false,
            errorPassword:false,
            errorConfirmPassword: false,
            loading:false,
        }
    }

    componentDidMount() {

    }
    changeFirstName=(e)=>{
        this.setState({firstName:e.target.value})
        this.setState({errorFirstName: false})

    }
    changeLastName=(e)=>{
        this.setState({lastName:e.target.value})
        this.setState({errorLastName: false})
    }
    changeAge=(e)=>{
        this.setState({age:e.target.value})
        this.setState({errorAge: false})
    }
    changeEmail=(e)=>{
        this.setState({email:e.target.value})
        this.setState({errorEmail: false})
    }
    changePassword=(e)=>{
        this.setState({password:e.target.value})
        this.setState({errorPassword: false})
    }
    changeConfirmPassword=(e)=>{
        this.setState({confirmPassword:e.target.value})
        this.setState({errorConfirmPassword: false})
    }
    changeType=(e,{value})=>{
        this.setState({type:value});
    }
    changeCity=(e,{value})=>{
        this.setState({city:value});
    }
    register=()=>{
        let {firstName,lastName,age,city, email, password,confirmPassword,type} = this.state;
        if(!firstName || !lastName || !age || !city || !type|| !email || !password || !confirmPassword ||  confirmPassword !== password){
            if(!firstName){
                this.setState({errorFirstName: true})
            }
            if(!lastName){
                this.setState({errorLastName: true})
            }
            if(!age){
                this.setState({errorAge:false})
            }
            if(!city){
                this.setState({errorCity: true})
            }
            if(!type){
                this.setState({errorType:true})
            }
            if(!email){
                this.setState({errorEmail: true})
            }
            if(!password){
                this.setState({errorPassword: true})
            }
            if(!confirmPassword){
                this.setState({errorConfirmPassword: true})
            }
            if(confirmPassword !== password ){
                this.setState({errorPassword: true})
                this.setState({errorConfirmPassword: true})
            }
        }else{
            this.setState({loading:true})
            let data={
                    name: firstName+' '+lastName,
                    age: age,
                    email: email,
                    password: password,
                    score:100,
                    rating: 5,
                    location: city
            }
            axios.post('/addclient',{data:data}).then(
                function (response, err) {
                    console.log(response)
                    if(response.data){
                        this.setState({loading:false})
                        this.props.history.push(`/login`);
                    }
                }.bind(this)
            );
            console.log(data)
        }
    }
    chatroom=()=>{
        var data ={
            email:'erdem@gmail.com',
            name: 'erdem'

        }
        console.log(data)
        axios.post('/session/auth',{data:data}).then(
            function (response, err) {
                console.log(response)
                if(response.data){
                    console.log(data)
                }
            }.bind(this)
        );
    }

    render() {
        return (<div className='registrationForm-Container'>
            <div className="registrationForm-Container-upper-container">
                <div className="registrationForm-Container-upper-container-text">
                    <div className="registrationForm-Container-upper-container-first-text">
                        Registration
                    </div>
                    <div className="registrationForm-Container-upper-container-second-text">
                        Please enter your personal information

                    </div>
                </div>
            </div>
            <Form size='large'  loading={this.state.loading}>
                <Header as='h2'  style={{marginTop:'3%', fontFamily: 'Fahkwang'}}textAlign='center'>
                    Profile Information
                </Header>
                <Form.Group width='equal'>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        placeholder='John'
                        label='First Name:'
                        value={this.state.firstName}
                        error={this.state.errorFirstName}
                        onChange={this.changeFirstName}
                        width={8}/>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        placeholder='Dylon'
                        label='Last Name:'
                        value={this.state.lastName}
                        error={this.state.errorLastName}
                        onChange={this.changeLastName}
                        width={8}/>
                </Form.Group>
                <Form.Group width='equal'>
                <Form.Input
                    placeholder='20'
                    label='Age:'
                    value={this.state.age}
                    error={this.state.errorAge}
                    onChange={this.changeAge}
                    width={8}/>
                <Form.Dropdown
                    fluid scrolling search
                    options={quebecCities}
                    label='City'
                    placeholder='Select one of the options...'
                    value={this.state.city}
                    error={this.state.errorCity}
                    onChange={this.changeCity}
                    width={8}
                />
                </Form.Group>
                <Form.Dropdown
                    fluid scrolling search
                    options={optionsType}
                    label='Are you willing to become a Mentor or Requester?'
                    placeholder='Select one of the options...'
                    value={this.state.type}
                    error={this.state.errorType}
                    onChange={this.changeType}
                    width={8}
                />
                <Form.Input
                    fluid icon='mail'
                    iconPosition='left'
                    placeholder='john@concordia.ca'
                    value={this.state.email}
                    error={this.state.errorEmail}
                    onChange={this.changeEmail}
                    label='Email:'/>
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    placeholder='Password'
                    type='password'
                    value={this.state.password}
                    error={this.state.errorPassword}
                    onChange={this.changePassword}
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    label='Confirm Password'
                    placeholder='Password'
                    type='password'
                    value={this.state.confirmPassword}
                    error={this.state.errorConfirmPassword}
                    onChange={this.changeConfirmPassword}
                />
                <Button  fluid size='large' onClick={this.chatroom}>
                    Submit
                </Button>
            </Form>
        </div>)
    }
}
function mapStateToProps(state){
    return {
        userProfile: state.Reducers.userProfile
    };

}
export default withRouter(connect(mapStateToProps)(RegistrationForm));