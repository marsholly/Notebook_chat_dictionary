import React, { Component } from 'react'
import moment from 'moment';
import NoteAction from '../actions/NoteAction';
import '../css/style.css'
import { Modal, Button } from 'react-bootstrap';

export default class Note extends Component {
  constructor(){
    super();
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);

    this.state = {
      editMsg: '',
      showModal: false
    }

  }

  editNote(id){
    this.openModal();
    this.setState({editMsg: this.props.message});
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  saveEdit(id) {
    let message = this.state.editMsg;
    let newMsg = {message};
    NoteAction.updateNote(id, newMsg);
    this.setState({editMsg: ''});
    this.closeModal();
  }

  cancelEdit() {
    this.closeModal();
  }

  deleteNote(id){
    NoteAction.deleteNote(id);
  }

  render(){
    let { user_name, createdAt, message, _id} = this.props.note
    let date = moment(createdAt).format('lll')
    return(
    <tr>
      <div className='username'>@{user_name} || {date}</div>
      <div className='msgtext'>{message}</div>
      <div className='buttons'>
        <button className='btn btn-warning btn-xs' onClick={()=>this.editNote(_id)}>
          <span className='glyphicon glyphicon-edit'></span>
        </button>
        <button className='btn btn-danger btn-xs' onClick={()=>this.deleteNote(_id)}>
          <span className='glyphicon glyphicon-trash'></span>
        </button>
      </div>
      <Modal show={this.state.showModal} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea className ='form-control' rows="2" value={this.state.editMsg} onChange={e => {this.setState({editMsg: e.target.value}) }}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={() => this.saveEdit(_id)}>Save</Button>
          <Button onClick={this.cancelEdit}>Close</Button>
        </Modal.Footer>
      </Modal>
    </tr>
    )
  }
}
