import Data from './data.js'

export default {
  submitMessageToServerListner(userMessageInput, userNameInput) {
    return function () {
      const currentDate = new Date()
      const data = {
        author: userNameInput.value,
        message: userMessageInput.value,
        timestamp: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
      }
      Data.postUserMessage(data)
    }
  }
}