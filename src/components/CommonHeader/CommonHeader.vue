<template>
  <div class="header">
    <div class="left" @click="back">
      <span>返回</span>
    </div>
    <div class="middle">{{middle}}</div>
    <div class="right">
      {{right}}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['middle', 'right'],
    methods: {
      back () {
        history.go(-1)
      }
    }
  }
</script>

<style lang="less" scoped>
  .header{
    position: fixed;
    z-index: 4;
    width: 100%;
    padding: 0 10px;
    height: 4.5rem;
    position: fixed;
    background-color: rgb(38,162,255);
    display:flex;
    justify-content: space-between;
    div{
      width: 33.33%;
      color: #fff;
      line-height: 4.5rem;
      font-size: 1.45rem;
    }
    div.left{
      background: url(./images/back.png) no-repeat left center;
      background-size: 22.5%;
      span{
        display: inline-block;
        height: 100%;
        padding-left: 22.5%;
      }
    }
    div.middle{
      text-align: center;
    }
    div.right{
      text-align: right;
    }
  }
</style>