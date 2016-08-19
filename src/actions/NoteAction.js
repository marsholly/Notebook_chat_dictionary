import API from '../API'

const NoteAction = {
  getAllNotes: API.getAllNotes,
  createNote(note){
    API.createNote(note)
  },
  updateNote(id, note){
    API.updateNote(id, note)
  },
  deleteNote(id){
    API.deleteNote(id)
  }
}

export default NoteAction
