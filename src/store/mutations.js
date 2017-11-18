export default {
  // 保存用户信息
  SAVE_USERINFO (state, data) {
    state.userInfo = data
  },
  SAVE_LOGINUSERS (state, data) {
    let loginUsers = state.loginUsers
    console.log('登录的用户' + loginUsers)
    if (loginUsers.length === 0) {
      loginUsers.push(data)
    } else {
      for (var i = 0; i < loginUsers.length; i++) {
        console.log(loginUsers[i].userId !== data.userId)
        if (loginUsers[i].userId !== data.userId) {
          loginUsers.push(data)
        }
      }
    }
  },
  SELECTED_FRIENDS (state, data) {
    console.log(data)
    state.activeSelected = data
    if (state.selectedFriends.indexOf(data) === -1) {
      state.selectedFriends.push(data)
    }
    console.log(state.selectedFriends)
  },
  DEL_LOGOOUT_USER (state, data) {
    let loginUsers = state.loginUsers
    for (var i = 0; i < loginUsers.length; i++) {
      if (loginUsers[i].userId === data) {
        loginUsers.splice(i, 1)
        console.log('退出登录')
        break
      }
    }
  }
}
