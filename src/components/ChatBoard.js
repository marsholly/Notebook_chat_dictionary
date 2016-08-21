import React, { Component } from 'react'
import ChatStore from '../stores/ChatStore'
import ChatAdd from './ChatAdd'
import Chat from './Chat'

export default class ChatBoard extends Component {
  constructor(){
    super()
    this.state ={
      messages: ChatStore.getAll(),
      user_name: '',
      username: ''
    }
    this._onChange = this._onChange.bind(this)
    this.setUser = this.setUser.bind(this)
    this.changeUsername = this.changeUsername.bind(this)

  }
  componentDidMount(){
    ChatStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    ChatStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({messages: ChatStore.getAll()})
  }
  changeUsername(e){
    this.setState({user_name: e.target.value})
  }
  setUser(e){
    e.preventDefault();
    this.setState({username: this.state.user_name})
  }
  render(){
    let username
    if(this.state.username){
      username = (
        <ChatAdd username={this.state.username}/>
      )
    } else {
      username = (
        <div className="input-group form-inline">
          <input type="text" className="form-control" placeholder="Enter Username" value={this.state.user_name} onChange={this.changeUsername}/>
          <span className="input-group-btn">
            <button className="btn btn-info btn-md" id="btn-chat" onClick={this.setUser}>Enter</button>
          </span>
        </div>
      )
    }

    let messages = this.state.messages.map((chat, index) =>{
      return <Chat key={index} user={this.state.username} chat={chat}/>
    })

    return(
      <div>
        <h1>Chat</h1>
        {username}
          <div>
            {messages}
          </div>
      </div>
    )
  }
}
