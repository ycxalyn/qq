<template>
  <div class="box">
    <CommonHeader middle="添加"/>
    <div class="wrap">
      <mt-field  placeholder="请输入qq号" type="number" v-model="account"></mt-field>
      <mt-button style="margin-top: 1.2rem;" size="large" type="primary" @click="submit">添加</mt-button>
    </div>
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
    },
    methods: {
      submit () {
        this.$store.dispatch('addFriends', this.account)
      }
    }
  }
</script>

<style lang="less" scoped>
  .box{
    background-color: #f6f6f6;
    height: 100%;
  }
  .wrap{
    position: relative;
    top: 6.5rem;
  }
</style>