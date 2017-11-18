<template>
  <div>
    <main-header title="消息" msg="" show="true"></main-header>
    <div class='con'>
      <search title="搜索"></search>
      <div class="msgList">
        <ul>
          <li @click="toChat">
              <mt-cell-swipe title="" :right="[{ content: '置顶',style: { background: '#676767', color: '#fff', width: '5rem'}, handler: () => this.$messagebox('delete')}, { content: '删除',style: { background: 'red', color: '#fff', width: '5rem'}, handler: () => this.$messagebox('delete')}]">
                <div class="img"><img :src="users.img" alt=""></div>
                <div class="content">
                  <h3>刘明照</h3>
                  <p>计算佛问我家饿胃认为认为饿</p>
                </div>
                <div class="time">
                  <p>21:32</p>
                  <p></p>
                </div>
              </mt-cell-swipe>
          </li>
        </ul>
      </div>
    </div>
    <left-bar></left-bar>
  </div>
</template>

<script>
  import MainHeader from 'components/MainHeader/MainHeader'
  import Search from 'components/Search/Search'
  import LeftBar from 'components/Leftbar/LeftBar'
  export default {
    components: {
      MainHeader,
      Search,
      LeftBar
    },
    methods: {
      toChat () {
        this.$router.push('/chat')
      }
    },
    computed: {
      users () {
        return this.$store.state.userInfo
      }
    }
  }
</script>

<style>
div .con .msgList ul li .time p{
  font-size: 1rem;
}
.mint-cell-swipe-buttongroup a{
  line-height: 5rem;
  text-align: center;
}
div .con .msgList ul li a .mint-cell-wrapper .mint-cell-title{
  flex: 0;
}
div .con .msgList ul li a .mint-cell-wrapper .mint-cell-value{
  width: 100%;
}
</style>

<style lang="less" scoped>
div{
  .con{
    position: relative;
      .msgList{
      height: 100%;
      ul{
        width: 100%;
        li{
          height: 5rem;
          // background: red;
          display: flex;
          border-bottom: 1px solid #eee;
          .img{
            width: 5rem;
            height: 100%;
            // background-color: blue;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 48px;
              height: 48px;
              // width: 20%;
              border-radius: 50%;
              // background-color: skyblue;
            }
          }
          .content{
            width: 70%;
            height: 5rem;
            // background-color: yellow;
            display: flex;
            flex-flow: column nowrap;
            h3,p{
              display: flex;
              align-items: center;
              height: 50%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            h3{
              font-size: 1.4rem;
              // background-color: red;
            }
            p{ 
              // background-color: pink;
              // padding-top: .5rem;
              font-size: 1rem;
              color: rgb(127,127,127);
            }
          }
          .time{
            width: 15.24%;
            height: 5rem;
            position: relative;
            // background-color: green;
            p{
              position: absolute;
              top: 1rem;
              display: flex;
              align-items: center;
              padding-left: 22%;
              color: raba(127,127,127)
            }
          }
        }
      }
    }
  }
}
.mint-cell-swipe{
  width:  100%;
}
</style>