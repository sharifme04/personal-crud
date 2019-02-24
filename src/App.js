import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NewAdd from './components/NewAdd';
import Home from './components/Home';
import Update from './components/Update';
import Pagination from './components/pagination';
import './App.css';
import Hoc1 from './components/Hoc1';
import Hoc2 from './components/Hoc2';
import Progressbar from './components/Progressbar';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       contactLists:[]
    }

    this.deleteById = this.deleteById.bind(this); 
    this.getContactList = this.getContactList.bind(this); 
  }

  getContactList(){
    axios.get('api/contactlist/all')
    .then(response=>this.setState({contactLists:response.data.data}))
    .catch(error=>console.log(error))
  }

  componentDidMount(){
    this.getContactList();
  }

  deleteById(id){
    axios.get('api/contactlist/delete/'+id)
    .then(()=> this.getContactList())
    .catch(error=>console.log(error))

  }
  
  render() {
    return (
      <div className="container">
         <h1>React Crud App</h1>
         <hr/>
         <Route exact path="/" render={(props)=> (
            <Home {...this.state} {...props} deleteById={this.deleteById} />
           )}/>
         <Route path="/newuser" render={(props)=> (
            <NewAdd {...this.state} {...props} getContactList={this.getContactList}/>
           )}/>

        <Route path="/edit/:_id" render={(props)=> (
            <Update  {...props} getContactList={this.getContactList}/>
          )}/>

       <Route path="/pagination" render={(props, state)=> (
            <Pagination  {...this.state} {...props} deleteById={this.deleteById}/>
          )}/>
         
         
        <Route path="/hoc1" render={(props, state)=> (
              <Hoc1  {...this.state} {...props} />
            )}/>
        <Route path="/hoc2" render={(props, state)=> (
              <Hoc2  {...this.state} {...props} />
            )}/>
         
         <Route path="/progressbar" render={(props, state)=> (
            <Progressbar  {...this.state} {...props} />
          )}/>
      </div>
    );
  } 
}

export default App;
