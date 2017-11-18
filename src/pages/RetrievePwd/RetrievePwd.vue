<template>
  <div id="main">
    <CommonHeader middle="输入账号"/>
    <div class="content">
      <label for="">账号：</label>
      <mt-field placeholder="QQ号/邮箱地址/手机号" v-model="account"></mt-field>
      <div class="wrap">
        <mt-button type="primary">确定</mt-button>
        <router-link to="">海外手机号?</router-link>
      </div>
    </div>
    <footer>
      <router-link to=''>我要反馈</router-link>
      <p>copyright &copy; 1998 - 2017 Tencent All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
  import CommonHeader from 'components/CommonHeader/CommonHeader'
  export default {
    data () {
      return {
        account: ''
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style>
#main{
  background-color: #f6f6f6;
  height: 100%;
}
#main header{
  height: 4.5rem;
  font-size: 1.4rem;
}
#main .mintui{
  font-size: 2.2rem;
}
#main label{
  vertical-align: sub;
}
</style>
<style lang="less" scoped>
  .content{
    position: relative;
    top: 5.5rem;
    label{
      padding-left: 1.4rem;
      font-size: 1.2rem;
      height: 3.5rem;
      line-height: 3.5rem;
      color: #ccc;
      display: block;
    }
    .wrap{
      width: 92%;
      margin-left: 4%;
      margin-top: 10%;
      // background: red;
      height: 10px;
      button{
        width: 100%;
        background: rgb(16,182,242);
      }
      a{
        display: block;
        margin-top: 1.2rem;
        color: rgb(16,182,242);
      }
    }
  }
  footer{
    position: absolute;
    bottom: 0;
    height: 8%;
    width: 100%;
    border-top: 1px solid #ccc;
    a{
      display: inline-block;
      margin-top: 1.1rem;
      color: rgb(16,182,242);
      text-align: center;
      width: 100%;
    }
    p{
      position: absolute;
      bottom: .5rem;
      left: 10%;
      font-size: .5rem;
      color: #676767;
    }
  }
</style>
