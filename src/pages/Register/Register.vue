<template>
  <div>
    <back-header title="输入手机号码"></back-header>
    <div class="container">
      <p>注册即代表阅读并同意<span>使用条款</span>和<span>隐私政策</span></p>
      <choose-county></choose-county>
    </div>
  </div>
</template>

<script>
  import BackHeader from 'components/BackHeader/BackHeader'
  import ChooseCounty from 'components/ChooseCounty/ChooseCounty'
  export default {
    methods: {
      toCountySelect () {
        this.$router.push('/countyselect')
      }
    },
    components: {
      BackHeader,
      ChooseCounty
    }
  }
</script>

<style lang="less" scoped>
// .mintui{
//   font-size: 2.5rem !important;
// }
.container{
  margin-top: 3%;
  width: 86%;
  margin-left: 7%;
  letter-spacing: 2px;
  p{
    margin-top: 5%;
    color: #676767;
    span{
      color: rgb(16,182,242);
    }
  }
}
</style>