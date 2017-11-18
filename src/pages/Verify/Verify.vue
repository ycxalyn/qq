<template>
  <div>
    <back-header title="验证手机号码"></back-header>
    <div class="container">
      <choose-county></choose-county>
    </div>
  </div>
</template>

<script>
  import BackHeader from 'components/BackHeader/BackHeader'
  import ChooseCounty from 'components/ChooseCounty/ChooseCounty'
  export default {
    components: {
      BackHeader,
      ChooseCounty
    }
  }
</script>

<style scoped>
  .container{
    margin-top: 3%;
    width: 86%;
    margin-left: 7%;
    letter-spacing: 2px;
  }
</style>