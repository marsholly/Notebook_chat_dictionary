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
    this.changeMessage = this.changeMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }


  changeMessage(e){
      this.setState({message: e.target.value})
  }
  submitMessage(e){
    e.preventDefault();

    const message = {
      user_name: this.props.username,
      message: this.state.message,
      time_stamp: moment()
    }

    console.log('message:', message)
  }

  render(){
    let user
    if(this.props.username){
      user = "@" + this.props.username
    } else{
      user = ""
    }
    return (
      <div>
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
