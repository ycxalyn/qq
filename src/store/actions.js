import http from 'axios'
import api from '@/api'
export default {
  login ({commit}, account, password) {
    // 根据账号判断是注册还是登录
    let url = api.host + 'users?account=' + account
    return http.get(url)
    .then(res => {
      if (res.data.length > 0) {
        // 已有直接登录
        let data = res.data[0]
        commit('SAVE_USERINFO', data)
        commit('SAVE_LOGINUSERS', data)
      } else {
        // 注册再登录
        let url = api.host + 'users'
        let userObj = {
          account: account,
          pwd: 'pwd',
          grade: 0,
          signature: '',
          friends_categories: [],
          groups_categories: [],
          groups_chat: [],
          selectedFriends: []
        }
        return http.post(url, userObj)
        .then(res => {
          commit('SAVE_USERINFO', res.data)
          return '注册成功'
        })
      }
    })
  },
  selectedFriends ({commit}, data) {
    // let url = api.host + 'users?account='
    // http.post(url, data)
    // .then(res => {
    commit('SELECTED_FRIENDS', data)
    // })
  },
  logout ({commit}, data) {
    commit('DEL_LOGOOUT_USER', data)
  }
}
