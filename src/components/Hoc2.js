import HocForm from './HocForm';
import WrapComponent from './WrapComponent';

let data = {title:["Big","Intermeditate", "Small" ], body:[11,7,5]}

const Hoc2 = HocForm(WrapComponent, data);

export default Hoc2;
  