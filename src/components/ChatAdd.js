import React, { Component } from 'react';
import moment from 'moment';
import ChatStore from '../stores/ChatStore.js';

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
    if(e.keyCode === 13){
      const message = {
        user_name: this.state.user_name,
        message: this.state.message,
        time_stamp: moment()
      }
      // ChatStore.sendMsg(message)
      console.log('message:', message)
      // this.setState({message: ''})
    } else {
      this.setState({message: e.target.value})
    }
  }
  submitMessage(e){
    e.preventDefault();
    let newNote = this.state
    NoteAction.createNote(newNote)
    this.setState({message: ''})
  }

  render(){
    let username
    if(this.state.user_name){
      username = (<h2>{this.state.user_name}</h2>)
    } else{
      username = (
        <div className="input-group form-inline">
          <input type="text" className="form-control" placeholder="Enter Username" value={this.state.user_name} onChange={this.changeUsername}/>
          <a className="input-group-addon" >
          <button className="btn btn-info btn-xs" type="submit"><i className="glyphicon glyphicon-send"></i></button></a>
        </div>
      )
    }
    return (
      <div>
        <h1>Chat</h1>
        {username}
          <textarea className="form-control" placeholder="Enter Message" rows="2" value={this.state.message} onChange={this.changeMessage}></textarea>
      </div>
    )
  }
}
