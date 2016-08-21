import React, { Component } from 'react'
import Noteboard from './NoteBoard'
import ChatBoard from './ChatBoard'
import Dictionary from './Dictionary'
import NoteAdd from './NoteAdd'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      user_name: ''
    }
    this.changeUsername = this.changeUsername.bind(this)
    this.setUser = this.setUser.bind(this)
  }

  changeUsername(e){
    this.setState({user_name: e.target.value})
  }

  setUser(e){
    e.preventDefault();
    this.setState({username: this.state.user_name})
  }

  render(){
    let name;
    if(this.state.username){
      name = (
        <NoteAdd userName={this.state.username}/>
      )
    } else {
      name = (
        <form onSubmit={this.submitMessage}>
          <div className="input-group form-inline">
            <input type="text" className="form-control" placeholder="Enter Username" value={this.state.user_name} onChange={this.changeUsername}/>
            <span className="input-group-btn">
              <button className="btn btn-info btn-md" id="btn-chat" onClick={this.setUser}>Enter</button>
            </span>
          </div>
        </form>
      )
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1>Notey</h1>
            <div>{name}</div>
            <Noteboard />
          </div>
          <div className="col-md-5">
            <Dictionary />
            <ChatBoard userName={this.state.username}/>
          </div>
        </div>
      </div>

    )
  }
}
