import API from '../API'

const DictionaryAction = {
  getDefinition(word){
    API.getDefinition(word)
  }
}

export default DictionaryAction
