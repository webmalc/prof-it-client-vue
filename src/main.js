// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './components/App'
// import router from './router'
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('bootstrap')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
