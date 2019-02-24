import React, { Component } from 'react'

function HocForm(WrapComponent, data) {

  return class Practice extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          data:data
      }
    }
      
    render() { 
      return (
        <div>
         <WrapComponent {...this.state}/> 
        </div>
      )
    }
  }

}
export default HocForm;
