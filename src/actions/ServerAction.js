import AppDispatcher from '../AppDispatcher'
import Constant from '../Constant'

const ServerAction = {
  recieveNotes(notes){
    AppDispatcher.dispatch({
      type: Constant.RECIEVE_NOTES,
      notes
    })
  }
}

export default ServerAction
