// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/css/reset.css'
import './common/reset'
import axios from 'axios'
import {MessageBox, Button, Header, Search, Popup, Actionsheet, Field, IndexList, IndexSection, Badge, Cell, Navbar, TabContainer, TabContainerItem, CellSwipe} from 'mint-ui'
import 'mint-ui/lib/style.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.prototype.$msg = MessageBox
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Search.name, Search)
Vue.component(Popup.name, Popup)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Field.name, Field)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Badge.name, Badge)
Vue.component(Cell.name, Cell)
Vue.component(Navbar.name, Navbar)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(CellSwipe.name, CellSwipe)
Vue.prototype.$http = axios
Vue.config.productionTip = false

// 监听全局路由的变化
router.beforeEach((to, from, next) => {
  if (to.path === '/messages' || to.path === '/linkman' || to.path === '/dynamicstate') {
    store.state.showBol = true
  } else {
    store.state.showBol = false
  }
  next()
})
router.beforeEach((to, from, next) => {
  if (from.path === '/dynamicstate') {
    store.state.searchBol = true
  } else {
    store.state.searchBol = false
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
