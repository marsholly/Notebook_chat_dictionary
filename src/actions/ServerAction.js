import AppDispatcher from '../AppDispatcher'
import Constant from '../Constant'

const ServerAction = {
  recieveNotes(notes){
    AppDispatcher.dispatch({
      type: Constant.RECIEVE_NOTES,
      notes
    })
  },
  recieveWord(wordArr){
    AppDispatcher.dispatch({
      type: Constant.RECIEVE_DEF,
      wordArr
    })
  }
}

export default ServerAction
