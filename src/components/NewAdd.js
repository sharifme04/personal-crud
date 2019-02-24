import React, { Component } from 'react'
import axios from 'axios';
import Form from './Form';

class NewAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '', 
            phone: '',
            submitButtonName: 'Add',
            submitButtonColor: "btn btn-primary"
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    handleSubmit(event) {
        event.preventDefault();
        const userInfo = {
            name: this.state.username,
            email: this.state.email,
            phone: this.state.phone
        }
        axios.post('api/contactlist/add', userInfo)
        .then(()=> this.props.getContactList());
        this.setState({
            username: '',
            email: '',
            phone: ''
        });
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
             <Form {...this.props} {...this.state}
                handleChange={this.handleChange}  
                handleSubmit={this.handleSubmit} 
             />
            </div>
        )
    }
}

export default NewAdd;