import React, { Component } from 'react'
import TableRow from './TableRow';
import { Link } from 'react-router-dom';

 class Home extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          search:""
       };

       this.handleChangeSearch = this.handleChangeSearch.bind(this);
     };
     
     handleChangeSearch(event){
        this.setState({ search : event.target.value });
      }
    render() {
        //console.log(this.props);
        const { search } = this.state;
        let contactLists = this.props.contactLists
        .filter(contactlist => {
            return contactlist.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1 ||
                   contactlist.email.toLowerCase().indexOf( search.toLowerCase() ) !== -1
        }) 
        .map(contactlist =>
            <TableRow key={contactlist._id} contactlist={contactlist} deleteById={this.props.deleteById}/>
        )
        return (
            <div>
             <div className="row">
             <Link to={`/progressbar`}><button type="button" className="btn btn-success">Progressbar</button></Link> 
             <hr/>
              <div className="col-md-3">
               <Link to={`/newuser`}><button type="button" className="btn btn-primary">New User</button></Link> 
              </div>
              <div className="col-md-3">
               <Link to={`/pagination`}><button type="button" className="btn btn-info">pagination</button></Link> 
               <Link to={`/hoc1`}><button type="button" className="btn btn-default">HOC1</button></Link> 
               <Link to={`/hoc2`}><button type="button" className="btn btn-default">HOC2</button></Link> 
              </div>
              <div className="col-md-6">
                <div className="input-group">
                    <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search by name or email "
                    name="search"
                    onChange={this.handleChangeSearch}
                    />
                </div>
              </div>
             </div>
            <hr/>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contactLists} 
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}

export default Home;