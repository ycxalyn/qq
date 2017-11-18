<template>
  <div class="wrap">
    <!-- <chat-header name="name" state="state"></chat-header> -->
    <header>
      <span class="back" @click="goBack"></span>
      <span class="title">
        <p>{{selectedFriends.friends_name}}</p>
        <span>{{status(selectedFriends.state)}}</span>
      </span>
      <span class="right">
        <div class="phone"></div>
        <div class="man"></div>
      </span>
    </header>
    <div class="content">{{this.value}}</div>
    <div class="bottom">
      <div class="insert">
        <input type="text" class="msg" v-model="value"> 
        <button disabled v-if="!show()">发送</button>
        <button class="active" v-else @click="submit(e)">发送</button>        
      </div>
      <div class="fuc">
        <span class="talk"></span>
        <span class="pic"></span>
        <span class="carmea"></span>
        <span class="chuo"></span>
        <span class="gif"></span>
        <span class="smile"></span>
        <span class="add"></span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import Chat from '../../Client/client.js'
	export default {
		props: ['name', 'state'],
		data () {
			return {
        value: ''
			}
		},
		methods: {
			show () {
				if (this.value !== '') {
					return true
				}
			},
			goBack () {
				history.go(-1)
			},
			status (bol) {
				if (bol) {
					return Math.random() > 0.5 ? '手机在线' : '电脑在线'
				} else {
					return '离线'
				}
			},
			submit (e) {
        let value = this.value
        let selectedFriends = this.$store.state.selectedFriends.filter((item, index) => {
					return this.$store.state.activeSelected === item
				})[0]
        //向服务器发送消息
        Chat.submit({msg: this.value, userId: '2'})
        Chat.message()
        this.value = ''
      }
		},
		computed: {
			selectedFriends () {
				return this.$store.state.selectedFriends.filter((item, index) => {
					return this.$store.state.activeSelected === item
				})[0]
			}
		}
	}
</script>

<style lang="less" scoped>
.wrap{
  height: 100%;
  background-color: #efefef;
}
header{
  position: fixed;
  width: 100%;
  height: 5rem;
  background-color: #1296db;
  display: flex;
  justify-content: space-between;
  span{
    height: 100%;
    width: 20%;
    // background-color: yellow;
  }
  .back{
    background: url('./images/back.png') no-repeat 0 center;
    background-size: 25%;
  }
  .title{
    width: 60%;
    text-align: center;
    color: #fff;
    // display: flex;
    p{
      height: 60%;
      line-height: 4rem;
      font-size: 1.4rem;
    }
    span{
      height: 20%;
      font-size: .8rem;
    }
  }
  .right{
    width: 20%;
    display: flex;
    div{
      width: 50%;
    }
    .phone{
      background: url(./images/phone.png) no-repeat left center;
      background-size: 75%;
    }
    .man{
      background: url(./images/man.png) no-repeat left center;
      background-size: 90%;
    }
  }
}
.content{
  position: relative;
  top: 5rem;
  width: 100%;
  overflow-y: hidden;
  height: 75%;
}
.bottom{
  width: 100%;
  height: 16%;
  position: fixed;
  // background: red;
  bottom: 0;
  div{
    height: 50%;
  }
  .insert{
    // background-color: pink;
    padding: 0 1rem;
    input.msg{
      height: 100%;
      width: 75%;
      outline: none;
      border: 0;
      border-radius: 4px;
    }
    button{
      margin-left: 1rem;
      width: 20%;
      height: 100%;
      outline: 0;
      border: none;
      color: #676767;
      border-radius: 4px;
    }
    .active{
      background-color: #1296db;
      color: #fff;
    }
  }
}
.fuc{
  display: flex;
  justify-content: space-around;
  span{
    width: 10%;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .talk{
    background-image: url(./images/talk.png);
    background-size: 100%;
  }
  .pic{
    background-image: url(./images/pic.png);
    background-size: 70%;
  }
  .carmea{
    background-image: url(./images/carema.png);
    background-size: 70%;
  }
  .chuo{
    background-image: url(./images/chuo.png);
    background-size: 100%;
  }
  .gif{
    background-image: url(./images/gif.png);
    background-size: 90%;
  }
  .smile{
    background-image: url(./images/smile.png);
    background-size: 70%;
  }
  .add{
    background-image: url(./images/add.png);
    background-size: 70%;
  }
}
</style>