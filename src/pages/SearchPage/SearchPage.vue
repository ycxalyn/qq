<template>
  <div class="warp">
    <div class="search">
      <div class="header">
        <i class="mintui mintui-search"></i>
        <input type="text" placeholder="搜索">
        <span @click="back">取消</span>
      </div>
    </div>
    <div class="content">
      <div class="different" v-if="searchBol">
        <p class="title">搜素指定内容</p>
        <ul>
          <li v-for="(item, index) in list2" ::key="index">
            <router-link to="/"><span>{{index+1}}</span>{{item.title}}</router-link>
          </li>
          <li class="last">
            <router-link to="/"><span>&nbsp;</span>QQ指数</router-link>
          </li>
        </ul>
      </div>
      <div class="common">
        <p class="title">搜素指定内容</p>
        <div class="list">
          <router-link :to='item.path' :key="index" v-for='(item,index) in list'>{{item.content}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {content: '看点', path: '/messages'},
          {content: '好友动态', path: '/'},
          {content: '部落', path: '/'},
          {content: '小说', path: '/'},
          {content: '头像', path: '/'},
          {content: '热搜榜', path: '/'}
        ],
        list2: [
          {title: '易烊千玺 葫芦娃'},
          {title: '黄晓明暴怒'},
          {title: '蓝翔技校改名技院'},
          {title: 'MAMA滚出中国'},
          {title: '中羽赛林丹爆冷'},
          {title: '故宫看门人火了'},
          {title: '花15万给女友减肥'}
        ]
      }
    },
    methods: {
      back () {
        history.go(-1)
      }
    },
    computed: {
      searchBol () {
        return this.$store.state.searchBol
      }
    }
  }
</script>

<style lang="less" socped>
  .search{
    padding: 8px 12px;
    div.header{
      width: 100%;
      height: 3rem;
      border-radius: 2px;
      background-color: #efefef;
      outline: none;
      line-height: 3rem;
      display:flex;
      flex-direction: row;
      color: #676767;
      input{
        width: 80%;
        outline: none;
        background-color: #efefef;
      } 
      span{
        background-color: #fff;
        text-align: center;
        flex: 1;
        color: skyblue;
      }
    }
  }
  p.title{
    padding: 1.8rem 0;
    font-size: 1.2rem;
    color:#ccc;
    text-align: center;
  }
  div.content{
    div.common{
      .list{
        display: flex;
        flex-flow: wrap row;
        a{
          width: 33.33%;
          padding: .1rem 0;
          font-size: 1.4rem;
          text-align: center;
          margin-top: 1rem;
          border-right: 1px solid #ccc;
          color: skyblue;
        }
        a:nth-child(-n+3){
          margin: 0;
        }
        a:nth-child(3n){
          border: none;
        }
      }
    }
    div.different{
      padding: 0 12px;
      border-bottom: 1px solid #ccc;
      ul{
        display: flex;
        flex-flow: wrap row;
        li{
          width: 50%;
          height: 2rem;
          margin-bottom: 2rem;
          font-size: 1.4rem;
          a{
            color: #000;
            font-weight: 500;
            span{
              width: 2rem;
              height: 2rem;
              display: inline-block;
              margin: 0 .8rem 0 .5rem;
              border-radius: 5px;
              text-align: center;
              line-height: 2rem;
              color: #707070;
            }
          }
        }
        li:nth-child(-n+3){
          a{
            span{
              background-color: orange;
              color: #fff;
            }
          }
        }
        .last{
          font-size: 1.6rem;
          a{
            padding-right: 1.7rem;
            color: #707070;
            background: url(./images/detail.png) no-repeat right center;
            background-size: 12%;
          }
        }
      }
    }
  }
</style>