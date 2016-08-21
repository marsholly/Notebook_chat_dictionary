import React, { Component } from 'react'
// import Noteboard from './NoteBoard'
import ChatBoard from './ChatBoard'
import Dictionary from './Dictionary'

export default class App extends Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            {/* <Noteboard /> */}
          </div>
          <div className="col-md-5">
            <Dictionary />
            <ChatBoard />
          </div>
        </div>
      </div>

    )
  }
}
