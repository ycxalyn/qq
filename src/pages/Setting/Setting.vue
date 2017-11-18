<template>
  <div class="container">
    <CommonHeader middle="设置"/>
    <div class="wrap">
      <div class="same" style="border-top: 1px solid #ccc;" @click="detail">账号管理</div>
      <div class="same">手机号码</div>
      <div class="same">QQ达人</div>
      <div class="same" style="margin-top: 1.5rem; border-top: 1px solid #ccc;">消息通知</div>
      <div class="same">聊天记录</div>
      <div class="same">空间清理</div>
      <div class="same" style="margin-top: 1.5rem;border-top: 1px solid #ccc;">账号、设备安全</div>
      <div class="same">联系人、隐私</div>
      <div class="same">辅助功能</div>
      <div class="same" style="margin-top: 1.5rem; border-top: 1px solid #ccc;">免流量特权</div>
      <div class="same" style="margin-top: 2.5rem;margin-bottom:.5rem; border-top: 1px solid #ccc;">关于QQ与帮助</div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from 'components/CommonHeader/CommonHeader'
  export default {
    methods: {
      detail () {
        this.$router.push('/detail')
      }
    },
    components: {
      CommonHeader
    }
  }
</script>

<style scoped>
  .container{
    background-color: #f6f6f6;
    height: 100%;
  }
  #header{
    height: 4.5rem;
    width: 100%;
    position: fixed;
    z-index: 999;
  }
  .wrap{
    /* margin-top: 1.2rem; */
    position: relative;
    top: 6rem;
  }
  .same{
    width: 100%;
    height: 4rem;
    padding: 0 10px;
    line-height: 4rem;
    border-bottom: 1px solid #ccc;
    background: url('./images/detail.png') no-repeat center right;
    background-size: 10%;
  }
</style>