import React, { Component } from 'react'
import NoteAdd from './NoteAdd'
import Note from './Note'

export default class NoteBoard extends Component {
  render(){
    return(
      <div>
        <NoteAdd />
        <Note />
      </div>
    )
  }
}
