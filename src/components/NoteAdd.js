import React, { Component } from 'react'
import NoteAction from '../actions/NoteAction.js'

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
    let newNote = this.state
    NoteAction.createNote(newNote)
    this.setState({message: ''})
  }

  render(){
    return (
      <div>
        <h1>NoteAdd || Chat</h1>
        <form onSubmit={this.submitMessage}>
          <div className="input-group form-inline">
            <input type="text" className="form-control" placeholder="Enter Username" value={this.state.user_name} onChange={this.changeUsername}/>
            <a className="input-group-addon" >
            <button className="btn btn-info btn-xs" type="submit"><i className="glyphicon glyphicon-send"></i></button></a>
          </div>
          <textarea className="form-control" placeholder="Enter Message" rows="2" value={this.state.message} onChange={this.changeMessage}></textarea>
        </form>
      </div>
    )
  }
}
