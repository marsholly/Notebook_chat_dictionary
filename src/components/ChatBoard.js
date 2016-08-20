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
    let messages = this.state.messages.map((message, index) =>{
      return <Chat key={index} message={message}/>
    })
    return(
      <div>
        <ChatAdd />
        <table className="table">
          <tbody>
            {messages}
          </tbody>
        </table>
      </div>
    )
  }
}
