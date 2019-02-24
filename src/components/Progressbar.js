import React, { Component } from 'react';
import axios from 'axios';

class Progressbar extends Component {
     constructor(props) {
         super(props)
         this.state={
             progress:0,
             selectedFile: null
         }
         this.handleChange = this.handleChange.bind(this);
         this.uploadFileHandler = this.uploadFileHandler.bind(this);
     }
     
     handleChange(event){
         this.setState({ selectedFile: event.target.files[0]});
         console.log(event.target.files[0]);
     }

     uploadFileHandler(){
        const fd = new FormData();
        fd.append('image',this.state.selectedFile, this.state.selectedFile.name);
        console.log(this.state.selectedFile.name);
        axios.post('https://slack.com/api/files.upload',fd,
       { onUploadProgress: progressEvent=>{
           this.setState({progress:Math.round((progressEvent.loaded/progressEvent.total)*100)});
            console.log(Math.round((progressEvent.loaded/progressEvent.total)*100))
        }})
        .then(res=>console.log(res))
        
     }

  render() {
    return (
      <div>
       <button onClick={this.uploadFileHandler} type="button" className="btn btn-primary">Upload</button>
         <span className="control-fileupload">
          <input type="file" id="file" onChange={this.handleChange} />
        </span>
        <div className="progress">
            <div 
                className="progress-bar progress-bar-striped active" 
                role="progressbar" 
                aria-valuenow={this.state.progress} 
                aria-valuemin="0" 
                aria-valuemax="100" 
                style={{width: this.state.progress+'%'}}>{this.state.progress+'%'}
            </div>
        </div>

      </div>
    )
  }
}

export default Progressbar;