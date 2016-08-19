import React, { Component } from 'react'
import Noteboard from './NoteBoard'
import Dictionary from './Dictionary'

export default class App extends Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Noteboard />
          </div>
          <div className="col-md-5">
            <Dictionary />
          </div>
        </div>
      </div>

    )
  }
}
