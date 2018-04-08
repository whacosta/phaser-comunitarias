import GameState from './GameState.ts';
import HtmlState from './HtmlState.ts';
import { alto, ancho } from './dimens.ts';
import chatHtmlString from './html/Chat.html';
import chatCssString from './css/Chat.css';
import { subscribe, SocketClient } from './SocketClient.ts';

const createNewChatBubble = (
  name: string,
  color: string,
  text: string
): HTMLElement => {
  const li = document.createElement('li');
  li.innerHTML = `<strong style="color:${color}">${name}:</strong> ${text}`;
  return li;
};

const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

class ChatState extends HtmlState {
  username: string;
  colorsByUsername: { [id: string]: string };
  socket: SocketClient;

  constructor() {
    super(chatHtmlString, chatCssString[0][1]);
    this.username = `User#${Math.floor(Math.random() * 1000 + 1)}`;
    this.colorsByUsername = {};
    this.colorsByUsername[this.username] = getRandomColor();
  }

  findColorForUser(username: string): string {
    const existingColor = this.colorsByUsername[username];
    if (!existingColor) {
      const newColor = getRandomColor();
      this.colorsByUsername[username] = newColor;
      return newColor;
    }
    return existingColor;
  }

  create() {
    super.create();
    const chatForm = document.getElementById('chat-form');
    const newMessageInput = document.getElementById(
      'new-message-input'
    ) as HTMLInputElement;
    const messagesList = document.getElementById('messages');
    const backButton = document.getElementById('back-button');

    chatForm.onsubmit = () => {
      const color = this.colorsByUsername[this.username];
      const newBubble = createNewChatBubble(
        this.username,
        color,
        newMessageInput.value
      );
      newMessageInput.value = '';
      messagesList.appendChild(newBubble);
      window.scrollTo(0, document.body.scrollHeight);
      return false;
    };

    const appendChatBubble = (newBubble: HTMLElement) => {
      messagesList.appendChild(newBubble);
      window.scrollTo(0, document.body.scrollHeight);
    };

    chatForm.onsubmit = () => {
      const color = this.colorsByUsername[this.username];
      const message = newMessageInput.value;
      newMessageInput.value = '';

      const newBubble = createNewChatBubble(this.username, color, message);
      appendChatBubble(newBubble);

      this.socket.send(message);
      return false;
    };

    this.socket = subscribe(this.username, data => {
      if (data.username && data.username !== this.username) {
        const username = data.username as string;
        const message = data.message as string;

        const color = this.findColorForUser(username);

        const newBubble = createNewChatBubble(username, color, message);
        appendChatBubble(newBubble);
      }
    });

    backButton.onclick = () => {
      this.game.state.start('GameTitle');
    };
  }
}

export default ChatState;
