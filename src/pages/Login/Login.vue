<template>
  <div id="main">
    <div class="container" v-show="!showBol">
      <mt-button type="default" @click="entry">登录</mt-button>
      <mt-button type="primary" @click="toRegister">新用户</mt-button>
    </div>
    <transition name="animation">
      <div class="login" v-show="showBol">
        <input type="text" placeholder="QQ号/手机号/邮箱" v-model="account" /><br/>
        <input type="password" placeholder="密码" v-model="password"/>
        <mt-button type="primary" @click="login">登录</mt-button>
        <div class="bottom">
          <span @click="popup">忘记密码?</span>
          <span @click="toRegister">新用户注册</span>
        </div>
        <footer>登录即代表阅读并同意<span>服务条款</span></footer>
         <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      </div>
    </transition>
      <div class='warning'>
        <mt-popup v-model="warningBol"  popup-transition="popup-fade" position="top"><span class="msg">{{msg}}</span></mt-popup>
      </div>
  </div>
</template>

<script>
  import Chat from '../../Client/client.js'
  export default {
    /* eslint-disable */
    data () {
      return {
        showBol: false,
        account: '',
        password: '',
        warningBol: false,
        msg: '',
        sheetVisible: false,
      }
    },
    methods: {
      entry () {
        this.showBol = true
      },
      toRegister () {
        this.$router.push('/register')
      },
      login () {
        let account = this.account
        let password = this.password
        if (account === '') {
          this.msg = '请输入QQ号码。'
          this.warningBol = true
          setTimeout(() => {
            this.warningBol = false
          }, 1500)
        } else if (password === '') {
          this.msg = '请输入密码。'
          this.warningBol = true
          setTimeout(() => {
            this.warningBol = false
          }, 1500)
        } else if (!(/^[1-9]\d{3,}/.test(account)) && !(/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(account)) && (!(/^1[3|4|5|7|8][0-9]{9}$/).test(account))) {
          this.msg = '请输入正确的账号。'
          this.warningBol = true
          setTimeout(() => {
            this.warningBol = false
          }, 1500)
        } else{
          this.$store.dispatch('login', account, password)
          .then(res => {
            let userInfo = this.$store.state.userInfo
            if (userInfo.account === account && userInfo.pwd === password){
              Chat.init({userInfo: userInfo})
              this.$router.push('/messages')
            } else {
              this.$msg('登录失败','账号或密码错误,请重新输入')
            }
          })
        }
      },
      popup () {
        this.sheetVisible = !this.sheetVisible
      }
    },
    computed: {
      actions () {
        let that = this
        return  [
          {name: '找回密码', method: function () {that.$router.push('/retrievepwd')}},
          {name: '短信验证登录', method: function () {that.$router.push('/verify')}}
        ]
      }
    }
  }
</script>
<style lang="less">
.v-modal{
  background-color: transparent;
}
.mint-popup-top{
  width: 100%;
  height: 10%;
  span{
    margin-left: .5rem;
    padding-left: 3rem;
    display: inline-block;
    margin-top: 8%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.4rem;
    background: url(./images/warning.png) no-repeat 0 0;
    background-size: 20%;
    vertical-align: top;
  }
}
</style>

<style lang="less" scoped>
  #main{
    height: 100%;
    background: url(./images/bg1.jpg) no-repeat 0 0;
    background-size: cover;
  }
  .container{
    position: absolute;
    top: 87%;
    display: flex;
    width: 90%;
    left: 5%;
    align-items: center;
    justify-content: space-around;
  }
  .container button{
    width: 45%;
    font-size: 1.4rem;
    height: 3.5rem;
  }
  .login{
    position: absolute;
    top: 30%;
    width: 90%;
    left: 5%;
    background-color: transparent;
  }
  input{
    width: 100%;
    outline: none;
    font-size: 1.6rem;
    color: #fff;
    background-color: transparent;
    padding-bottom: 1rem;
    padding-top: 1rem;
    border-bottom: 1px solid #fff;
  }
  input:-ms-input-placeholder{
    color: #fff;
  }
  input::-webkit-input-placeholder{
    color: #fff;
  }
  .login button{
    width: 100%;
    margin-top: 1.8rem;
    height: 3.5rem;
    font-size: 1.5rem;
  }
  .bottom{
    margin-top: 1.5rem;
    display: flex;
    font-size: 1.2rem;
    color: deepskyblue;
    justify-content: space-between;
  }
  footer{
    position: fixed;
    bottom: 3rem;
    left: 25%;
    font-size: 1.3rem;
  }
  footer>span{
    color:deepskyblue;
  }
  .warning{
    position: absolute;
    top: -10%;
    background-color: #fff;
    width: 100%;
    height: 10%;
  }
  .animation-enter-active,.animation-leave-active{
    transition: all 1s;
  }
  .animation-enter,.animation-leave-active{
    top: 50%;
  }
</style>