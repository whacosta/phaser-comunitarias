import * as io from 'socket.io-client';

const socketServerURL = 'http://localhost:4000';

export class SocketClient {
  private readonly socket: any;
  private readonly username: string;

  constructor(username: string, socket: any) {
    this.socket = socket;
    this.username = username;
  }

  close() {
    this.socket.close();
  }

  send(message: string) {
    const payload = { username: this.username, message };
    this.socket.emit('chat message', payload);
  }
}

export const subscribe = (
  username: string,
  onNewMessage: (object) => void
): SocketClient => {
  const socket = io(socketServerURL);
  socket.on('chat message', onNewMessage);
  return new SocketClient(username, socket);
};
