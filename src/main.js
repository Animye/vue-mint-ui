import Vue from 'vue'
import router from './router'
import App from './App.vue'
import {
  Tabbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Cell,
  Loadmore
} from 'mint-ui'
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)
Vue.component(Loadmore.name, Loadmore)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
