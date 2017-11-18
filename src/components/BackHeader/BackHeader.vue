<template>
  <div>
    <mt-header title="">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style scoped>
header{
  background-color: #fff;
  color: #ccc;
  font-size: 1.4rem;
}
h1{
  margin-top: 5%;
  width: 86%;
  margin-left: 7%;
  letter-spacing: 2px;
  font-size: 2.8rem;
}
</style>