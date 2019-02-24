import React from 'react'

const Form = (props) => {
    console.log(props)
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" value={props.username} onChange={props.handleChange} className="form-control"  name="username"/>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" value={props.email} onChange={props.handleChange}  className="form-control"  name="email"/>
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input  value={props.phone} onChange={props.handleChange}  className="form-control"  name="phone"/>
            </div>
              <input type="submit" className={props.submitButtonColor} value={props.submitButtonName} />
        </form>
    </div>
  )
}

export default Form;
