import React, { Component } from 'react'

export default class Dictionary extends Component {
  constructor(){
    super();
    this.state = {
      searchWord: ''
    }
    this.changeWord = this.changeWord.bind(this)
    this.sendWord = this.sendWord.bind(this)
  }
  changeWord(e){
    this.setState({searchWord: e.target.value})
  }
  sendWord(e){
    e.preventDefault();
    console.log('this.state:', this.state)
    this.setState({searchWord: ''})
  }
  render(){
    return(
      <div>
        <h1>Dictionary</h1>
        <form className="navbar-form navbar-left" onSubmit={this.sendWord}>
          <div className="form-group" >
            <input className="form-control" value={this.state.searchWord} onChange={this.changeWord} placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
