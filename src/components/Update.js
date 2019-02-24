import React, { Component } from 'react'
import axios from 'axios';
import Form from './Form';

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '', 
            phone: '',
            submitButtonName: 'Update',
            submitButtonColor: "btn btn-info"
        };
    
        this.handleChangeUpdate = this.handleChangeUpdate.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
      }
    
      handleChangeUpdate(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      getUserInfo(){
        axios.get('/api/contactlist/edit/'+this.props.match.params._id)
        .then(response=>this.setState({
            username:response.data.data.name,
            email:response.data.data.email,
            phone:response.data.data.phone
        })
        )
        .catch(error=>console.log(error)) 
      }
    
      componentDidMount(){
        this.getUserInfo();
      }
    
      handleUpdateSubmit(event) {
        event.preventDefault();
        const userInfo = {
            name: this.state.username,
            email: this.state.email,
            phone: this.state.phone
        }
       axios.post('api/contactlist/update/'+this.props.match.params._id, userInfo)
        .then(() => this.props.getContactList());
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
                handleChange={this.handleChangeUpdate}  
                handleSubmit={this.handleUpdateSubmit} 
              />
            </div>
        )
    }
}

export default UpdateForm;