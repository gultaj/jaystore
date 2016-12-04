import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import ProductsManager from './components/ProductsManager';
import ProductCatalog from './components/ProductCatalog';
import store from './vuex/store';
// import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './styles/style.scss';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000';

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/manage-products', component: ProductsManager },
];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: new VueRouter({ mode: 'history', routes }),
  render: h => h(App),
});
