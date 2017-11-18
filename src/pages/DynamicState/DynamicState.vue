<template>
  <div>
    <main-header title="动态" msg="更多" show="false"></main-header>
    <div class="con">
      <search title="大家都在搜"></search>
    </div>
    <div class="contain">
      <nav>
        <router-link to="" class="state">
          <span></span>
          好友动态
        </router-link>
        <router-link to="" class="nearby">
          <span></span>
          附近
        </router-link>
        <router-link to="" class="interist">
          <span></span>
          兴趣部落
        </router-link>
      </nav>
      <div class="wrap">
        <mt-cell title="游戏">
          <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
          <img slot="icon" src="./images/game.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="日迹">
          <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
          <img slot="icon" src="./images/day.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="看点">
          <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
          <img slot="icon" src="./images/see.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="京东购物">
          <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
          <img slot="icon" src="./images/shopping.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="阅读">
          <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
          <img slot="icon" src="./images/read.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="动漫">
          <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
          <img slot="icon" src="./images/tc.png" width="24" height="24">
        </mt-cell><mt-cell title="音乐">
          <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
          <img slot="icon" src="./images/music.png" width="24" height="24">
        </mt-cell><mt-cell title="直播">
          <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
          <img slot="icon" src="./images/watch.png" width="24" height="24">
        </mt-cell>
        <div style="margin-top:1.2rem; margin-bottom: 4rem;">
          </mt-cell><mt-cell title="运动">
            <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
            <img slot="icon" src="./images/run.png" width="24" height="24">
          </mt-cell>
          </mt-cell><mt-cell title="同城服务">
            <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
            <img slot="icon" src="./images/city.png" width="24" height="24">
          </mt-cell>
          </mt-cell><mt-cell title="腾讯课堂">
            <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
            <img slot="icon" src="./images/tcw.png" width="24" height="24">
          </mt-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MainHeader from 'components/MainHeader/MainHeader'
  import Search from 'components/Search/Search'
  export default {
    components: {
      MainHeader,
      Search
    }
  }
</script>

<style lang="less">
.mint-cell-title{
  span{
    padding-left: 1rem;
  }
}
</style>

<style lang="less" scoped>
.con{
  position: relative;
}
.contain{
  background-color: #f6f6f6;
  nav{
    position: relative;
    width: 100%;
    height: 8rem;
    background-color: #fff;
    border-top: 0.02px solid #e0e0e0;
    a{
      margin-top: 1rem;
      float: left;
      width: 33.33%;
      height: 8rem;
      padding-top: .5rem;
      text-align: center;
      color: #777;
      position: relative;
      text-decoration: none;
      span{
        display: block;
        width: 100%;
        height: 4rem;
        -webkit-background-size: auto 2rem;
        background-size: auto 3rem;
        background-position: center 0;
        // margin-bottom: .5rem;
        background-repeat: no-repeat;
      }
    }
  }
  nav{
    .state{
      span{
        background-image: url(./images/state.png)
      }
    }
    .nearby{
      span{
        background-image: url(./images/nearBy.png)
      }
    }
    .interist{
      span{
        background-image: url(./images/interist.png)
      }
    }
  }
  .wrap{
    marigin-top: 1.2rem;
    .mint-cell{
      width: 100%;
      border: none;
    }
  }
}
</style>