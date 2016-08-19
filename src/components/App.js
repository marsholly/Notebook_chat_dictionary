import React, { Component } from 'react'
import Noteboard from './NoteBoard'
import Dictionary from './Dictionary'

export default class App extends Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <Noteboard />
          </div>
          <div className="col-md-3">
            <Dictionary />
          </div>
        </div>
      </div>

    )
  }
}
