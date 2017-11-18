<template>
  <div class="container">
    <common-header middle="账号管理" right="编辑" />
    <div class="wrap">
      <div class="info">
        <div class="pic">
          <img src="" />
        </div>
        <div class="detail">
          <span>余生有你</span>
          <span>15079188378</span>
        </div>
        <div class="right"></div>
      </div>
       <div class="info bottom">
        <div class="pic">
          <img src="" />
        </div>
        <div class="detail">
          <p>添加或注册账号</p>
        </div>
        <div class="right"></div>
      </div>
      <div class="same more" style="">关联好友消息</div>
      <div class='desc'>关联QQ号后,即可代收该号的好友消息</div>
      <div class="same" style="margin-top: 0;">在线状态</div>
      <div class="same" style="margin-top: 0; border-top: 0;">隐身状态</div>
      <div class="same"  @click="logout">退出当前账号</div>      
    </div>
  </div>
</template>

<script>
  import CommonHeader from 'components/CommonHeader/CommonHeader'
  import io from 'socket.io-client'
  var socket = io('ws://10.3.158.86:3000')
  export default {
    methods: {
      logout () {
        let userInfo = this.$store.state.userInfo
        console.log(userInfo)
        this.$store.dispatch('logout', userInfo.userId)
        socket.emit('logout', {userInfo: userInfo})
        this.$router.push('/')
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style lang='less' scoped>
  .container{
    background-color: #f6f6f6;
    height: 100%;
    .wrap{
      position: relative;
      top: 5.8rem;
      background:#fff;
      .bottom{
        border-bottom: 1px solid #ccc;
      }
      .info{
        padding: 0 10px;
        height: 5rem;
        display: flex;
        border-top: 1px solid #ccc;
        flex-flow: no-wrap row;
        div{
          height: 100%;
        }
        .pic{
          width: 15%;
          text-align: center;
          display: flex;
          align-items: center;
          img{
            width: 48px;
            height: 48px;
            border-radius: 50%;
          }
        }
        .detail{
          width: 65%;
          display: flex;
          flex-flow: wrap column;
          p{
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 1.7rem;
            color: skyblue;
          }
          span{
            height: 40%;
            display: flex;
            align-items: center;
          }
          span:nth-child(1){
            margin-top: 3%;
            font-size: 1.5rem;
          }
          span:nth-child(2){
            color: #676767;
          }
        }
        .right{
          width: 20%;
        }
      }
    }
    .same{
      width: 100%;
      height: 4rem;
      padding: 0 10px;
      line-height: 4rem;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin-top: 1.5rem;
    }
    .more{
      background: url('./images/detail.png') no-repeat center right;
      background-size: 10%;
    }
    .desc{
      padding: 0 10px;
      height: 4rem;
      vertical-align: middle;
      line-height: 2.5rem;
      background-color: #f6f6f6;
      color: #ccc;
    }
  }
 
</style>