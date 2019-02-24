import React from 'react'

const WrapComponent = (props) => {
    console.log(props);
  return (    
    <div>
       I am from practice
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>{props.data.title[0]}</th>
                  <th>{props.data.title[1]}</th>
                  <th>{props.data.title[2]}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.data.body[0]}</td>
                  <td>{props.data.body[1]}</td>
                  <td>{props.data.body[2]}</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default WrapComponent;
