export let app = document.getElementById('app');

export class ChatWindow {
  constructor() {
    this.chatBody = app.appendChild(document.createElement('div'));
    this.userInput = app.appendChild(document.createElement('input'))
    this.sendBtn = app.appendChild(document.createElement('button'))
    this.userName = app.appendChild(document.createElement('input'))
  }

  createMessageBody() {
    let message = this.chatBody.appendChild(document.createElement('div'));
    let messageHeader = message.appendChild(document.createElement('div'));
    let messageBody = message.appendChild(document.createElement('div'))
    message.classList.add('message-body', 'container')
    messageHeader.classList.add('message-header')
    return {
      message,
      messageHeader,
      messageBody
    };
  }

  setMessageInfo(messageContainer, messageData) {
    let {
      author,
      message,
      timestamp,
      id
    } = messageData;
    let {
      messageBody,
      messageHeader
    } = messageContainer
    messageBody.textContent = `Cообщение: ${message}`;
    messageHeader.insertAdjacentHTML('afterbegin', `<span class="time-right">${timestamp}</span>Имя: ${author},`)
    messageBody.id = `message${id}`;
  }

  async viewHistory(data) {
    const usersData = await data;
    for (let i = 0; i < usersData.length; i++) {
      this.setMessageInfo(this.createMessageBody(), usersData[i])
    }
    this.chatBody.scroll(0,5000)
  }

  async showLastMessages(data) {
    const messagesData = await data;
    const numberOfCurrentMessages = document.getElementsByClassName('message-body').length
    if (messagesData.length > numberOfCurrentMessages) {
      for (let i = numberOfCurrentMessages; i < messagesData.length; i++) {
        const lastMessage = this.createMessageBody();
        this.setMessageInfo(lastMessage, messagesData[i])
        lastMessage.message.scrollIntoView()
      }
    }
  }
}