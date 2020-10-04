
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import Mui from 'vue-awesome-mui';
Vue.use(Mui);
Vue.use(iView);
// Vue.config.productionTip = false
// 全局a不兼容app
// Vue.prototype.HOST='/api'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
