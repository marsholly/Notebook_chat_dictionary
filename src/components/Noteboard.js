import React, { Component } from 'react'
import NoteStore from '../stores/NoteStore'
import NoteAction from '../actions/NoteAction'
import NoteAdd from './NoteAdd'
import Note from './Note'

export default class NoteBoard extends Component {
  constructor(){
    super()
    this.state ={
      notes: NoteStore.getAll()
    }
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount(){
    NoteAction.getAllNotes();
    NoteStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    NoteStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({notes: NoteStore.getAll()})
  }
  render(){
    let notes = this.state.notes.map(note =>{
      return <Note key={note._id} note={note}/>
    })
    return(
      <div>
        <div className = "tableScroll">
          <table className="table">
            <tbody>
              {notes}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
