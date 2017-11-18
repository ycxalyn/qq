import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['pages/Login/Login.vue'], resolve)
const Register = resolve => require(['pages/Register/Register.vue'], resolve)
const CountySelect = resolve => require(['pages/CountySelect/CountySelect.vue'], resolve)
const Verify = resolve => require(['pages/Verify/Verify.vue'], resolve)
const RetrievePwd = resolve => require(['pages/RetrievePwd/RetrievePwd.vue'], resolve)
const Messages = resolve => require(['pages/Messages/Messages.vue'], resolve)
const LinkMan = resolve => require(['pages/LinkMan/LinkMan.vue'], resolve)
const DynamicState = resolve => require(['pages/DynamicState/DynamicState.vue'], resolve)
const MinePage = resolve => require(['pages/MinePage/MinePage.vue'], resolve)
const Signature = resolve => require(['pages/Signature/Signature.vue'], resolve)
const MyCard = resolve => require(['pages/MyCard/MyCard.vue'], resolve)
const MyQR = resolve => require(['pages/MyQR/MyQR.vue'], resolve)
const Chat = resolve => require(['pages/Chat/Chat.vue'], resolve)
const Setting = resolve => require(['pages/Setting/Setting.vue'], resolve)
const Detail = resolve => require(['pages/Detail/Detail.vue'], resolve)
const Add = resolve => require(['pages/Add/Add.vue'], resolve)
const SearchPage = resolve => require(['pages/SearchPage/SearchPage'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/countyselect',
      name: 'countyselect',
      component: CountySelect
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify
    },
    {
      path: '/retrievepwd',
      name: 'retrievepwd',
      component: RetrievePwd
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/linkman',
      name: 'linkman',
      component: LinkMan
    },
    {
      path: '/dynamicstate',
      name: 'dynamicstate',
      component: DynamicState
    },
    {
      path: '/minepage',
      name: 'minepage',
      component: MinePage
    },
    {
      path: '/signature',
      name: 'signature',
      component: Signature
    },
    {
      path: '/mycard',
      name: 'mycard',
      component: MyCard
    },
    {
      path: '/myqr',
      name: 'myqr',
      component: MyQR
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/searchpage',
      name: 'searchpage',
      component: SearchPage
    }
  ]
})
