import React, { Component } from 'react'
import {FieldGroup, FormGroup, Button, ControlLabel} from 'react-bootstrap'

export default class NoteAdd extends Component {
  constructor(){
    super();
    this.state = {
      user_name: '',
      message: ''
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
    return(
      <div>
        <h1>NoteAdd</h1>
        <form onSubmit={this.submitMessage}>
          <FieldGroup type="text" value={this.state.user_name} label="Username" placeholder="Enter Username" onChange={this.changeUsername}/>
          <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Enter Message</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" value={this.state.message} onChange={this.changeMessage}/>
        </FormGroup>
        <Button type="submit"><span className="glyphicon glyphicon-send"></span></Button>
        </form>
      </div>
    )
  }
}
