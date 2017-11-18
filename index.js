var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
app.get('/', function (req, res) {
  res.send('<h1>Wecome</h1>')
})
// 在线用户
var onlineUsers = []
var users = {}
// 当前在线人数
// var onlineNumber = 0
io.on('connection', function (socket) {
  // 监听新用户加入
  socket.on('login', function (obj) {
    console.log(obj.userInfo.name + '上线了')
    if (onlineUsers.length === 0) {
      users[obj.userInfo.userId] = socket.id
      onlineUsers.push(obj.userInfo)
    } else {
      for (var i = 0; i < onlineUsers.length; i++) {
        if (onlineUsers[i].userId !== obj.userInfo.userId) {
          users[obj.userInfo.userId] = socket.id
          onlineUsers.push(obj.userInfo)
          break
        }
      }
    }
    // 将新加入的用户的唯一表示当做socket的名称
    // socket.name = obj.userInfo.userId
    // 向所有客户端广播用户加入
    io.emit('login', obj)
  })
  // 监听用户的下线
  socket.on('logout', function (obj) {
    // 将下线的用户从在线列表中删除
    // if (onlineUsers.hasOwnProperty(socket.name)) {
    //   // 删除
    //   delete onlineUsers[socket.name]
    //   // 在线人数-1
    //   // onlineNumber--
    console.log(obj.userInfo.userId + '下线了')
    for (var i = 0; i < onlineUsers.length; i++) {
      onlineUsers.splice(i, 1)
      break
    }
  })
  // 监听用户发布的聊天内容
  socket.on('msg', function (obj) {
    // 像所有客户端广播发布消息
    // io.emit('message', {msg: 'hello'})
    socket.emit('msg', obj)
    console.log(obj.msg)
  })
  socket.on('disconnect', function () {
    // for (var i = 0; i < sockets.length; i++) {
    //   if (sockets[i] === this) {
    //     sockets.splice(i, 1)
    //   }
    // }
    console.log('与服务器断开')
  })
  socket.on('reconnect', function () {
    console.log('重新连接到服务器')
  })
  // 监听用户发私聊消息
  socket.on('sendPrivateMessage', function (data) {
  // 根据用户的id取到socketid，从而实现只对该用户推送新消息
    console.log(data)
    console.log('有用户发消息了')
    console.log(users)
    console.log(users[data.userId])
    socket.to(users[data.userId]).emit('receivePrivateMessage', data.msg)
  })
  // 监听用户发群消息
  socket.on('sendGroupMessage', function (data) {
  // 直接群发会快点，客户端只需要判断是否是发给自己的
    io.sockets.emit('receiveGroupMessage', data)
  })
})
http.listen(3000, function () {
  console.log('listening on *:3000')
})
