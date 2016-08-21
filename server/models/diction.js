const request = require('request')

const getWord = function(word, cb){
  request(`https://owlbot.info/api/v1/dictionary/${word}`, function (error, response, body) {
    if (error) cb(error)
    if (!error && response.statusCode == 200) {
      let wordObj = JSON.parse(body, 0, 2)
      cb(null, wordObj)
    }
  })
}

module.exports = getWord;
