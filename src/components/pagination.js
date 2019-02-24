import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import TableRow from './TableRow';
require("bootstrap/less/bootstrap.less");

class pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activePage: 1,
        pageRangeDisplayed:5,
        itemsCountPerPage:5
    };
    
    this.handlePageChange = this.handlePageChange.bind(this);
    }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
 }

  render() {
      //console.log(this.props);
      const indexOfLastContact = this.state.activePage * this.state.itemsCountPerPage;
      const indexOfFirstContact = indexOfLastContact - this.state.itemsCountPerPage;
      const currentPage = this.props.contactLists.slice(indexOfFirstContact,indexOfLastContact);
      const paginationContact = currentPage.map(contactlist =>
          <TableRow key={contactlist._id} contactlist={contactlist} deleteById={this.props.deleteById}/>
      )
      console.log(currentPage);

    return (
      <div>
         <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.props.contactLists.length}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange}
        />
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
                {paginationContact}
                </tbody>
            </table>
            </div>
      </div>
    )
  }
}

export default pagination;
