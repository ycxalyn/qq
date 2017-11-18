<template>
  <div @click='toSearchPage'>
    <p>
      <span><i class="mintui mintui-search"></i> {{title}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    methods: {
      toSearchPage () {
        this.$router.push('/searchpage')
      }
    }
  }
</script>

<style lang="less" scoped>
  div{
    padding: 8px 12px;
    // position: absolute;
    // top: 4.5rem;
    p{
      width: 100%;
      height: 3rem;
      border-radius: 2px;
      background-color: #efefef;
      outline: none;
      text-align: center;
      line-height: 3rem;
      color: #676767;
    }
    span{
      i{
        font-size: 1rem;
      }
    }
  }
</style>