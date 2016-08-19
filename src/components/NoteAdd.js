import React, { Component } from 'react'
// import { FieldGroup, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap'

export default class NoteAdd extends Component {
  constructor(){
    super();
    this.state = {
      user_name: '',
      message: 'Enter Message'
    }

    this.changeUsername = this.changeUsername.bind(this)
    this.changeMessage = this.changeMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)

  }

  changeUsername(e){
    this.setState({user_name: e.target.value})
  }
  changeMessage(e){
    this.setState({message: e.target.value})
  }
  submitMessage(e){
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return (
      <div>
        <h1>NoteAdd</h1>
        <form onSubmit={this.submitMessage}>
          <div class="input-group">
           <input className="form-control" type="text" value={this.state.user_name} placeholder="Enter Username" onChange={this.changeUsername} />
           <button className="btn btn-info input-group-addon" type="submit"><span className="glyphicon glyphicon-send"></span></button>
          </div>

          {/* <input className="form-control" type="text" value={this.state.user_name} placeholder="Enter Username" onChange={this.changeUsername} />
          <button className="btn btn-info" type="submit"><span className="glyphicon glyphicon-send"></span></button> */}
          <textarea className="form-control" rows="2" value={this.state.message} onChange={this.changeMessage}></textarea>
        </form>
      </div>
    )
  }
}
