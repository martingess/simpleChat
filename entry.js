import {
  ChatWindow,
  app
} from './view.js'
import Data from './data.js'
import Controler from './controler.js'


export let chat = new ChatWindow;
chat.viewHistory(Data.getAllMessages());
chat.chatBody.id = 'chatBody';
chat.sendBtn.onclick = Controler.submitMessageToServerListner(chat.userInput, chat.userName)
chat.sendBtn.textContent = 'Отправить'
chat.userInput.insertAdjacentHTML("beforebegin", "<span>Your message ----></span>")
chat.userName.insertAdjacentHTML("afterend", "<span> <---- Nickname</span>")
setInterval(() => {
  chat.showLastMessages(Data.getAllMessages())
  console.log("Обновлено")
}, 1000)