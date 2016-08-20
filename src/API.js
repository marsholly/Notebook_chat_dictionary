import axios from 'axios'
import ServerAction from './actions/ServerAction'

const API = {
  getAllNotes(){
    axios.get('/api/notes')
      .then(res => res.data)
      .then(ServerAction.recieveNotes)
      .catch(console.error)
  },
  createNote(note){
    axios.post('/api/notes', note)
      .then(res => res.data)
      .then(ServerAction.recieveNotes)
      .catch(console.error)
  },
  updateNote(id, note){
    axios.put(`/api/notes/${id}`, note)
      .then(res => res.data)
      .then(ServerAction.recieveNotes)
      .catch(console.error)
  },
  deleteNote(id){
    axios.delete(`/api/notes/${id}`)
      .then(res => res.data)
      .then(ServerAction.recieveNotes)
      .catch(console.error)
  }
}

export default API;
