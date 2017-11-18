<template>
  <div id="box">
    <main-header title="联系人" msg="添加" show='false'></main-header>
    <div class="con">
      <search title="搜索"></search>
      <div class="friends">
        <mt-cell title="新朋友"  is-link></mt-cell>
        <div class="bar">
          <div>
            <div class="container">
              <div class="content" :class="{'active': active === 'tab-container1'}" @click="active = 'tab-container1'"><router-link to="" >好友</router-link></div>
              <div class="content" :class="{'active': active === 'tab-container2'}" @click="active = 'tab-container2'"><router-link to="" >群</router-link></div>
              <div class="content" :class="{'active': active === 'tab-container3'}" @click="active = 'tab-container3'"><router-link to="">多人聊天</router-link></div>
              <div class="content" :class="{'active': active === 'tab-container4'}" @click="active = 'tab-container4'"><router-link to="">设备</router-link></div>
              <div class="content" :class="{'active': active === 'tab-container5'}" @click="active = 'tab-container5'"><router-link to="">通讯录</router-link></div>
              <div class="content" :class="{'active': active === 'tab-container6'}" @click="active = 'tab-container6'"><router-link to="">公众号</router-link></div>
            </div>
          </div>
        </div>
        <div class="cont">
          <mt-tab-container v-model="active" swipeable >
            <mt-tab-container-item id="tab-container1">
              <div class='list'>
                <ul class="top">
                  <li v-for="(fc, index) in friends_categories" :key="fc.categories_id">
                    <p class="more" :class="{'active': showBol && activeIndex == index }" @click="show(index)">{{fc.categories_title}}<span>0/1</span></p>
                    <ul class="bottom" v-show="showBol && activeIndex == index">
                      <li v-for="fr in fc.friends" :key="fr.friends_id" @click="toChat(fr)">
                        <div class="img"><img :src="fr.img" alt=""></div>
                        <div class="content">
                          <h3>{{fr.friends_name}}</h3>
                          <p>{{fr.friends_dcr}}</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
              <mt-cell title="创建群">
                <img slot="icon" src="./images/add.png" width="24" height="24">
              </mt-cell>
              <div class="list">
                <ul class="top">
                  <li v-for="(gc, index) in groups_categories" :key="gc.groups_id">
                    <p class="more" :class="{'active': showBol && activeIndex == index}" @click="show(index)">{{gc.groups_title}}<span>0/1</span></p>
                    <ul class="bottom" v-show="showBol && activeIndex == index">
                      <li v-for="gs in gc.groups" :key="gs.group_id" @click="toChat(gs)">
                        <div class="img"><img :src="gs.img" alt=""></div>
                        <div class="content group">
                          <h3>{{gs.group_title}}</h3>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container3">
              <mt-cell title="创建多人聊天">
                <img slot="icon" src="./images/add.png" width="24" height="24">
              </mt-cell>
              <div class="list">
                <ul class="bottom">
                  <li v-for="gct in groups_chat" :key="gct.groups_chat_id" @click="toChat(gct)">
                    <div class="img"><img :src="gct.groups_chat_img" alt=""></div>
                    <div class="content">
                      <h3 class="whole"><span>{{gct.groups_chat_name}}</span><span>(33)</span></h3>
                    </div>
                  </li>
                </ul>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container4">
              <div class="list">
                <ul class="bottom">
                  <li>
                    <div class="img"><img src="./images/computer.png" alt=""></div>
                    <div class="content">
                      <h3>刘明照</h3>
                      <p>计算佛问我家饿胃认为认为饿</p>
                    </div>
                  </li>
                  <li>
                    <div class="img"><img src="./images/printer.png" alt=""></div>
                    <div class="content">
                      <h3>刘明照</h3>
                      <p>计算佛问我家饿胃认为认为饿</p>
                    </div>
                  </li>
                  <li>
                    <div class="img"><img src="./images/myDevices.png" alt=""></div>
                    <div class="content">
                      <h3>刘明照</h3>
                      <p>计算佛问我家饿胃认为认为饿</p>
                    </div>
                  </li>
                </ul>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container5">
              <mt-cell title="通讯录" to="" is-link value="未匹配"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container6">
              <mt-index-list :show-indicator="false">
                <mt-index-section index="A">
                  <mt-cell title="Aaron"></mt-cell>
                  <mt-cell title="Alden"></mt-cell>
                  <mt-cell title="Austin"></mt-cell>
                </mt-index-section>
                <mt-index-section index="B">
                  <mt-cell title="Baldwin"></mt-cell>
                  <mt-cell title="Braden"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Z">
                  <mt-cell title="Zack"></mt-cell>
                  <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
              </mt-index-list>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MainHeader from 'components/MainHeader/MainHeader'
  import Search from 'components/Search/Search'
  export default {
    name: 'box',
    data () {
      return {
        active: 'tab-container1',
        showBol: false,
        activeIndex: 0
      }
    },
    components: {
      MainHeader,
      Search
    },
    methods: {
      show (index) {
        this.activeIndex = index
        this.showBol = !this.showBol
      },
      toChat (fr) {
        this.$store.dispatch('selectedFriends', fr)
        this.$router.push('/chat')
      },
      toChatGroup (gct) {
        this.$store.dispatch('selectedFriends', gct)
        this.$router.push('/chat')
      }
    },
    computed: {
      friends_categories () {
        return this.$store.state.userInfo.friends_categories
      },
      groups_categories () {
        return this.$store.state.userInfo.groups_categories
      },
      groups_chat () {
        return this.$store.state.userInfo.groups_chat
      }
    }
  }
</script>

<style lang="less">
.mint-cell-value{
  span{
    font-size: .8rem;
  }
}
.mint-indexlist-nav{
  display: none;
}
.mint-tab-container{
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

<style lang="less">
  .mint-cell{
    border-top: .1px solid #eee;
    border-bottom: .1px solid #eee;
  }
  .mint-cell-allow-right::after{
    width: 10px;
    height: 10px;
  }
</style>

<style lang='less' scoped>

main-header{
  height: 0;
}
#box{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.con{
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.friends{
  // height: 100%;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f6f6f6;
  .bar{
    // background-color: red;
    margin-top: .8rem;
    height: 4.5rem;
    width: 100%;
    margin-top: .8rem;
    overflow-y: hidden;
    overflow-x: scroll;
    position: relative;
    div{
      overflow-y: hidden;
      .container{
        display: inline-block;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        background-color: #fff;
        .content{
          display: inline-block;
          line-height: 4rem;
          height: 4rem;
          margin: 0;
          padding: 0px 16px;
          text-align: center;
          background-color: #fff;
          margin: 0;
          a{
            color: #676767;
            height: 100%;
            display: inline-block;
          }
        }
        .content.active{
          a{
            color: rgb(38,162,255);
            border-bottom: 3px solid rgb(38,162,255);
          }
        }
      }
    }
  }
  .cont{
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
    .mint-tab-container{
      height: 100%;
      background-color: #fff;
      .mint-tab-container-wrap{
        .mint-tab-container-item{
          .list{
            padding: 0 16px;
            height: 100%;
            display: flex;
            ul.top{
              width: 100%;
              li{
                p.more.active{
                  background: url(./images/down.png) no-repeat left center;
                  background-size: 1.2rem;
                }
                p.more{
                  position: relative;
                  height: 4rem;
                  background: url(./images/detail.png) no-repeat left center;
                  background-size: 2rem;
                  line-height: 4rem;
                  padding-left: 1.5rem;
                  color: #000;
                  font-size: 1.3rem;
                  font-weight: 500;
                  span{
                    position: absolute;
                    right: 0;
                    font-size: .4rem;
                    color: #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 .list ul.bottom{
   width: 100%;
  li{
    height: 4.5rem;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;
    .img{
      width: 4.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        border-radius: 50%;
        // padding: 2rem;
        width: 48px;
        height: 48px;
        // width: 150%;
      }
    }
    .content.group{
      h3{
        height: 100%;
        font-size: 1.4rem;
      }
    }
    .content{
      width: 70%;
      display: flex;
      flex-flow: column nowrap;
      h3,p{
        width: 100%;
        display: flex;
        align-items: center;
        height: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      h3.whole{
        height: 100%;
        padding-left: 1.3rem;
        span:first-child{
          width: 90%;
          font-size: 1.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #000;
        }
        span{
          font-size: .8rem;
          color: #676767;        
          }
      }
      h3{
        font-size: 1.5rem;
      }
      p{ 
        font-size: 1rem;
        color: rgb(127,127,127);
      }
    }
  }
}
</style>