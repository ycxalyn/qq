// 使用 Mock 梳理需求
var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
  // 用户
  'users|2-4': [
    {
      // 用户id
      'userId|+1': 1,
      // 账号
      'account|+1': ['15079188378', '13570579992', '1519947020', '18721344201'],
      // 密码
      'pwd|+1': ['ycxalyn', '123456'],
      // 头像
      'img': '@image(48x48, @color)',
      // qq等级
      'grade': 12,
      // 用户名称
      'name': '@ctitle(4,8)',
      // 个性签名
      'signature': '@csentence(5, 15)',
      // 好友分类列表
      'friends_categories|6-10': [{
        // 分类id
        'categories_id|+1': 1,
        // 分类的名称
        'categories_title': '@ctitle(4,8)',
        // 当前分类下的数据
        'friends|5-20': [{
          // 好友id
          'friends_id|+1': 1,
          // 好友头像
          'img': '@image(48x48, @color)',
          // 好友网名
          'friends_name': '@ctitle(4,8)',
          // 好友描述
          'friends_dcr': '@csentence(5,20)',
          // 好友信息
          'msg': '@ctitle(0,5)',
          // 好友是否在线 true代表在线 false代表离线
          'boolean|1': true
        }]
      }],
      // 群分类列表
      'groups_categories|6-10': [{
        // 群分类的id
        'groups_id|+1': 1,
        // 群名称
        'groups_title': '@ctitle(4,8)',
        // 当前群列表下的群
        'groups|3-8': [{
          // 群头像
          'img': '@image(48x48, @color)',
          // 群id
          'group_id|+1': 1,
          // 群名称
          'group_title': '@ctitle(4,8)'
        }]
      }],
      // 多人聊天
      'groups_chat|6-10': [{
        // 多人聊天的id
        'groups_chat_id|+1': 1,
        // 多人聊天的头像
        'groups_chat_img': '@image(48x48, @color)',
        // 多人聊天的成员名
        'groups_chat_name': '@ctitle(6,18)'
      }],
      // 保存选中的好友
      'selectedFriends': []
    }
  ]
})
// 写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4), function (err) {
  if (err) {
    return console.error(err)
  }
  console.log('数据写入成功!')
})
