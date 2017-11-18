<template>
  <div id="app">
    <router-view/>
    <tab-bar v-show="showBol"></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/TabBar/TabBar'
export default {
  name: 'app',
  components: {
    TabBar
  },
  computed: {
    showBol () {
      return this.$store.state.showBol
    }
  }
}
</script>

<style>
html,body{
  height: 100%;
}
#app{
  height: 100%;
}
</style>
