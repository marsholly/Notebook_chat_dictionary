import React, { Component } from 'react'
import ChatStore from '../stores/ChatStore'
import ChatAdd from './ChatAdd'
import Chat from './Chat'

export default class ChatBoard extends Component {
  constructor(){
    super()
    this.state ={
      messages: ChatStore.getAll()
    }
    this._onChange = this._onChange.bind(this)
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
  render(){
    let messages = this.state.messages.map((chat, index) =>{
      return <Chat key={index} user={this.props.userName} chat={chat}/>
    })

    return(
      <div>
        <h1>Chat</h1>
        <ChatAdd username={this.props.userName}/>
          <div className = "msgDiv">
            {messages}
          </div>
      </div>
    )
  }
}
