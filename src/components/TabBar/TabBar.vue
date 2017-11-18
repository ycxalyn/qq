<template>
   <nav>
    <router-link to="/messages" class="messages">
      <span></span>
      消息
    </router-link>
    <router-link to="/linkman" class="linkman">
      <span></span>
      联系人
    </router-link>
    <router-link to="/dynamicstate" class="dynamicstate">
      <span></span>
      动态
    </router-link>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
nav{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: #fff;
  border-top: 0.1px solid #ccc;
  a{
    float: left;
    width: 33.33%;
    height: 4rem;
    padding-top: .5rem;
    text-align: center;
    color: #777;
    position: relative;
    text-decoration: none;
    font-size: .8rem;
    span{
      display: block;
      width: 100%;
      height: 2rem;
      // -webkit-background-size: auto 2rem;
      background-size: auto 2rem;
      background-position: center 0;
      // margin-bottom: .5rem;
      background-repeat: no-repeat;
    }
  }
}
nav{
  .messages{
    span{
      background-image: url(./images/msg.png)
    }
  }
  .linkman{
    span{
      background-image: url(./images/man.png)
    }
  }
  .dynamicstate{
    span{
      background-image: url(./images/action.png)
    }
  }
  .messages.router-link-exact-active{
    color: #1296db;
    span{
      background-image: url(./images/msgActive.png)
    }
  }
  .linkman.router-link-exact-active{
    color: #1296db;
    span{
      background-image: url(./images/manActive.png)
    }
  }
  .dynamicstate.router-link-exact-active{
    color: #1296db;
    span{
      background-image: url(./images/actionActive.png)
    }
  }
}
</style>