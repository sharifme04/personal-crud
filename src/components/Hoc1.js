import HocForm from './HocForm'
import WrapComponent from './WrapComponent';

let data = {title:["High","Medium", "Low" ], body:[4,6,8]}

const Hoc1 = HocForm(WrapComponent, data);


export default Hoc1;
  
  
