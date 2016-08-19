import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

const ServerAction = {
  recieveNotes(notes){
    AppDispatcher.dispatch({
      type: Constants.RECIEVE_NOTES,
      notes
    })
  },
  recieveOneNote(note){
    AppDispatcher.dispatch({
      type: Constants.CREATE_NOTE,
      note
    })
  }
}

export default ServerAction
