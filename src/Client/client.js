import io from 'socket.io-client'
const CHAT = {
  username: null,
  socket: null,
  msgArr: [],
  // 退出，本例只是一个简单的刷新
  logout () {
    this.socket.disconnect()
    // location.reload();
  },
  // 提交聊天消息内容
  submit (obj) {
    console.log(obj)
    this.socket.emit('sendPrivateMessage', obj)
  },
  message () { // username
    this.socket.on('receivePrivateMessage', function (obj) {
      CHAT.msgArr.push(obj)
      console.log(1)
      console.log('CHAT.msgArr', obj)
    })
  },
  init (userInfo) {
    // 连接websocket后端服务器
    this.socket = io.connect('http://localhost:3000')
    this.socket.emit('login', userInfo)
    console.log(userInfo)
    // this.socket.emit('addUser', username)
  }
}
export default CHAT
