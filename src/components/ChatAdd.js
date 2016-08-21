import React, { Component } from 'react';
import moment from 'moment';
import ChatStore from '../stores/ChatStore.js';

export default class NoteAdd extends Component {
  constructor(){
    super();
    this.state = {
      user_name: '',
      username: '',
      message: ''
    }

    this.changeUsername = this.changeUsername.bind(this)
    this.changeMessage = this.changeMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.setUser = this.setUser.bind(this)

  }

  changeUsername(e){
    this.setState({user_name: e.target.value})
  }
  setUser(e){
    e.preventDefault();
    this.setState({username: this.state.user_name})
  }
  changeMessage(e){
      this.setState({message: e.target.value})
  }
  submitMessage(e){
    e.preventDefault();
    // let newMessage = "@" + this.state.username + ":" + this.state.message

    const message = {
      user_name: this.state.username,
      message: this.state.message,
      time_stamp: moment()
    }

    console.log('message:', message)
  }

  render(){
    let username
    let user
    if(this.state.username){
      username = (<h2></h2>)
      user = "@" + this.state.username
    } else{
      username = (
        <div className="input-group form-inline">
          <input type="text" className="form-control" placeholder="Enter Username" value={this.state.user_name} onChange={this.changeUsername}/>
          <a className="input-group-addon" >
          <button className="btn btn-info btn-xs" type="submit" onClick={this.setUser}>Enter</button></a>
        </div>
      )
      user = ""
    }
    return (
      <div>
        <h1>Chat</h1>
        {username}
        <div className="input-group">
          <input id="btn-input" type="text" className="form-control input-md" placeholder={user} onChange={this.changeMessage} />
            <span className="input-group-btn">
              <button className="btn btn-warning btn-md" id="btn-chat" onClick={this.submitMessage}>Send</button>
            </span>
        </div>
      </div>
    )
  }
}

{/* <textarea className="form-control" placeholder={user} rows="2" value={this.state.message} onChange={this.changeMessage}></textarea> */}
