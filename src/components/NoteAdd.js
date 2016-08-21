import React, { Component } from 'react'
import NoteAction from '../actions/NoteAction.js'

export default class NoteAdd extends Component {
  constructor(){
    super();
    this.state = {
      user_name: '',
      message: ''
    }

    this.changeMessage = this.changeMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)

  }

  changeMessage(e){
    this.setState({user_name: this.props.userName})
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
        <form onSubmit={this.submitMessage}>
          <div className="input-group form-inline">
            <textarea className="form-control" placeholder="Enter Message" rows="2" value={this.state.message} onChange={this.changeMessage}></textarea>
            <span className="input-group-btn">
              <button className="btn btn-info btn-lg btnSize" id="btn-chat" type="submit">Enter</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}
