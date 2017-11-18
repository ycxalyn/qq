<template>
<div class='wr'>
  <div class='wrap'>
      <mu-raised-button class="pic" :style="{backgroundImage: 'url(' + userInfo.img + ')'}"  @click="toggle(true)"/>
      <span class='middle'>{{title}}</span>
      <span class='right' v-if="show=='true'"></span>
      <span v-else @click="toAdd()">{{msg}}</span>
  </div>
  <mu-drawer :open="open" :docked="docked" @close="toggle()">
    <mu-list @itemClick="docked ? '' : toggle()">
      <div class="self" @click="toMinePage">
        <div class="activites">
          <div class="cad" @click.stop="toMyCard"><span>打卡</span></div>
          <div class="scan" @click.stop="toMyQR"><span></span></div>
        </div>
        <div class="name" @click="toMinePage">
          <div class="picture"><span class="headerPic" :style="{backgroundImage: 'url(' + userInfo.img + ')'}"></span><span class="title">{{userInfo.name}}</span></div>
        </div>
        <div class="rank" style="display: block;">
          <div class="sun"> </div>
          <div class="title" @click.stop="toSignature">编辑个性签名</div>
        </div>
      </div>
        <mt-cell title="了解会员特权" style="margin-top: 12px;">
          <img slot="icon" src="./images/vip.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="QQ钱包">
          <img slot="icon" src="./images/walet.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="个性装扮">
          <img slot="icon" src="./images/dress.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的收藏">
          <img slot="icon" src="./images/favorite.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的相册">
          <img slot="icon" src="./images/photo.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的文件">
          <img slot="icon" src="./images/file.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="免流量特权">
          <img slot="icon" src="./images/流量-1.png" width="24" height="24">
        </mt-cell>
      <div class="bt">
        <div class="set" @click="setting"><span>设置</span></div>
        <div class="night"><span>夜间</span></div>
        <div class="weather"><p>22°</p><span>深圳-宝安</span></div>        
      </div>
      <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
    </mu-list>
  </mu-drawer>
</div>
  
</template>

<script>
  export default {
    props: ['title', 'msg', 'show'],
    data () {
      return {
        open: false,
        docked: true
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      toMinePage () {
        this.$router.push('/minepage')
      },
      toSignature () {
        this.$router.push('/signature')
      },
      toMyCard () {
        this.$router.push('/mycard')
      },
      toMyQR () {
        this.$router.push('/myqr')
      },
      setting () {
        this.$router.push('/setting')
      },
      toAdd () {
        this.$router.push('/add')
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      }
    }
  }
</script>

<style lang="less">
  .mint-cell-left{
    display: none;
  }
  .mu-raised-button.no-label{
    width:3.6rem !important;
    height:3.6rem !important;
    min-width: 30px;
    margin-top: .45rem;
    margin-left: .45rem;
  }
  .mu-drawer{
    width: 82%;
  }
  .mu-list{
    padding: 0;
    height: 100%;
    a{
      border: none;
    }
  }
  .mu-item{
    min-height: 0;
    padding: 0;
  }
  .wr .mint-cell-wrapper{
    background-image: none;
  }
</style>

<style lang="less" scoped>
.wr{
  height: 4.5rem;
}
.wrap{
  width: 100%;
  background-color: rgb(16,182,242);
  height: 4.5rem;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  span,.pic{
    display: flex;
    width:4.5rem;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
  }
  .pic{
      border-radius: 50%;
  }
  .right{
    background: url(./images/add.png) no-repeat center center;
    background-size: 75%, 75%;
  }
  .middle{
    width: 7rem;
  }
}
.self{
  width: 100%;
  height: 28%;
  background: url(./images/bg.jpg) no-repeat 0 0;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  div{
    width: 100%;
    padding: 0 15px;
    height: 33.3%;
    // background: red;
    display: flex;
    align-items: center;
    div{
      height: 100%;
    }
  }
}
.bt{
  position: fixed;
  padding: 0 15px;
  // padding-left: 15px;
  bottom: 1rem;
  display: flex;
  width: 100%;
  height: 6rem;
  // background-color: blue;
  justify-content: space-between;
  align-items: flex-end;
  .set,.night{
    span{
      padding-left: 20px;
    }
  }
  .set{
    background: url(./images/setting.png) no-repeat 0 bottom;
    background-size: 20%;
  }
  .night{
    background: url(./images/night.png) no-repeat 0 bottom;
    background-size: 20%;
  }
  div{
    height: 100%;
    display: flex;
    flex: 1;
    align-items: flex-end;
  }
  .weather{
    position: relative;
    p{
      position: absolute;
      top: 0;
      font-size: 2rem;
      color: #1296db;
    }
  }
}
.cad{
  background: url(./images/card.png) no-repeat 0 center;
  background-size: 20%;
  span{
    padding-left: 20%;
  }
}
.scan{
  position: relative;
  span{
    position: absolute;
    height: 100%;
    right: 0;
    width: 40px;
    background: url(./images/scan.png) no-repeat 0 bottom;
    background-size: 80%;
  }
}
.self .picture{
  padding-left: 0;
  .headerPic{
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background: url(./images/pic.gif) no-repeat 0 0;
    background-size: cover;
  }
  .title{
    padding-left: 1.5rem;
    font-size: 2rem;
  }
}
.self .rank{
  height: auto;
  padding-left: 0;
  margin-top: 1rem;
  .sun{
    // width: 1rem;
    height: 2rem;
    background: url('./images/sun.png') no-repeat 15px 0;
    background-size: 8%;
  }
  .title{
    background: url(./images/title.png) no-repeat 9rem 0;
    background-size: 7%;
  }
}
</style>