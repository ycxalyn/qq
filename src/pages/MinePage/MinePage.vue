<template>
  <div id="wrap">
    <div class="header">
      <div class="left" @click="back">
        <span>返回</span>
      </div>
      <div class="right" id="rt">
        <span></span>
        <span class="scan" @click='toScan'></span>
      </div>
    </div>
    <!-- <CommonHeader middle="我的资料" /> -->
    <div class='content'>
      <div class="pic">
        <div class="point">
          <span>16750</span>
        </div>
      </div>
      <div class="main">
        <div class="star">
          <span>6枚</span>
        </div>
        <div class='minePic'></div>
        <div class="cont">
          <div class="mineName">
            <p>余生有你</p>
            <span>编辑个性签名</span>
          </div>
          <div class='list'>
            <div class="top">
              <mt-cell title="1536039689">
                <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
                <img slot="icon" src="" width="24" height="24">
              </mt-cell>
              <mt-cell title="男 21岁">
                <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
                <img slot="icon" src="" width="24" height="24">
              </mt-cell>
              <mt-cell title="深圳">
                <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
                <img slot="icon" src="" width="24" height="24">
              </mt-cell>
            </div>
            <div class="bottom">
              <mt-cell title="vip">
                <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
                <img slot="icon" src="" width="24" height="24">
              </mt-cell>
              <mt-cell title="vip">
                <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
                <img slot="icon" src="" width="24" height="24">
              </mt-cell>
              <mt-cell title="vip">
                <span><img src="./images/detail.png" style="width: 35px;"alt=""></span>
                <img slot="icon" src="" width="24" height="24">
              </mt-cell>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <mt-button type="default">个性签名</mt-button>
        <mt-button type="primary">编辑资料</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonHeader from 'components/CommonHeader/CommonHeader'
  export default {
    methods: {
      back () {
        history.go(-1)
      },
      toScan () {
        this.$router.push('/myqr')
      }
    },
    components: {
      CommonHeader
    }
  }
</script>
<style lang="less">

  #wrap .list .mint-cell{
    min-height: 34px;
  }
  #wrap .list .mint-cell-wrapper{
    background-image: none;
  }
  #wrap .list .mint-cell:last-child{
    background-image: none;
  }
</style>
<style lang='less' scoped>
#wrap .header>.right{
  background: url(./images/scan.png) no-repeat right center;
  background-size: 20%;
}
#wrap .header #rt{
  background: none;
}
#wrap{
  height: 100%;
  .header{
    position: fixed;
    z-index: 4;
    width: 100%;
    padding: 0 10px;
    height: 4.5rem;
    position: fixed;
    display:flex;
    justify-content: space-between;
    div{
      width: 40%;
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
    div.right{
      position: relative;
      span{
        display: inline-block;
        margin-left: 3rem;
        width: 4.5rem;
        height: 100%;
        background: url(./images/music.png) no-repeat center center;
        background-size: 50%;
      }
      .scan{
        margin-left: 0;
        margin-right: 0;
        position: absolute;
        right: 0;
        background: url('./images/scan.png') no-repeat center center;
        background-size: 50%;
      }
    }
  }
  .content{
    height: 100%;
    // position: relative;
    // margin-bottom: 4.5rem;
    .pic{
      position: relative;
      height: 19.5rem;
      background: url(./images/bg.jpg) no-repeat 0 0;
      background-size: cover;
      .point{
        position: absolute;
        width: 5rem;
        height: 5rem;
        right: 0;
        bottom: 0;
        background: url('./images/point.png') no-repeat center .5rem;
        background-size: 45%;
        background-color: rgba(131,136,131,.7);
        span{
          position: relative;
          display: inline-block;
          width: 100%;
          color: #fff;
          text-align: center;
          margin-top: 3rem;
        }
      }
    }
    .main{
      position: relative;
    }
    div.cont{
      position: relative;
      top: 4rem;
    }
    div.minePic{
      position: absolute;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      right: 0;
      left: 0;
      margin: auto;
      top: -4rem;
      background: url('./images/pic.gif') no-repeat 0 0;
      background-size: cover;
    }
    div.star{
      position: absolute;
      width: 5rem;
      height: 5rem;
      right: 0;
      background: url('./images/star.png') no-repeat center .5rem;
      background-size: 50%;
      background-color: rgba(243,243,243,.9);
      span{
        position: relative;
        display: inline-block;
        width: 100%;
        color: orange;
        padding-bottom: .2rem;
        text-align: center;
        margin-top: 3rem;
      }
    }
    div.mineName{
      text-align: center;
      p{
        font-weight: 520;
        font-size: 2.2rem;
      }
      span{
        color: #8a8a8a;
        display: inline-block;
        margin-top: .1rem;
      }
    }
  }
  .top{
    padding-bottom: .5rem;
    border-bottom: 1px solid #f6f6f6;
  }
  .bottom{
    padding-top: .5rem;
  }
  .footer{
    position: fixed;
    width: 100%;
    height: 4.5rem;
    padding: 0 .2rem;
    bottom: 0;
    background:#f6f6f6;
    display: flex;
    flex-flow: no-wrap row;
    justify-content: space-around;
    align-items: center;
    border-top: .1px solid #ccc;
    button{
      width: 47%;
    }
  }
}

</style>