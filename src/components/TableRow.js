import * as React from 'react';
import { Link } from 'react-router-dom';

const TableRow = (props) => (
  <tr>
    <td>{props.contactlist.name}</td>
    <td>{props.contactlist.email}</td>
    <td>{props.contactlist.phone}</td>
    <td><Link to={`edit/${props.contactlist._id}`}><button type="button" className="btn btn-info">Edit</button></Link></td>
    <td><button onClick={() => props.deleteById(props.contactlist._id)} type="button" className="btn btn-danger" >Delete</button></td>
  </tr>
 );
 
 export default TableRow; 