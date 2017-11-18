<template>
  <div>
    <back-header title="选择国家和地区"></back-header>
    <div class="container">
      <mt-search cancel-text="取消" placeholder="搜索">
        <!-- <mt-cell v-for="item in result" :title="item.title" :value="item.value" :key="item.id"></mt-cell> -->
      </mt-search>
      <mt-index-list>
        <mt-index-section index="A">
          <mt-cell title="Aaron">Aaron</mt-cell>
          <mt-cell title="Alden">Alden</mt-cell>
          <mt-cell title="Austin">Austin</mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin">Baldwin</mt-cell>
          <mt-cell title="Braden">Braden</mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
    
  </div>
</template>

<script>
  import BackHeader from 'components/BackHeader/BackHeader'
  export default {
    components: {
      BackHeader
    }
  }
</script>

<style>
  .mint-searchbar{
    padding: 0;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
  .mintui.mintui-search{
    font-size: 14px;
  }
  .mint-searchbar-core{
    padding-left: 4px;
  }
  .mint-search{
    height: 100% !important;
  }
</style>
<style scoped>
  .container{
    margin-top: 3%;
    width: 86%;
    margin-left: 7%;
  }
</style>

