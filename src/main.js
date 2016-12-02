import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import ProductsManager from './components/ProductsManager';
import ProductCatalog from './components/ProductCatalog';
// import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './styles/style.scss';

Vue.use(VueRouter);

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/manage-products', component: ProductsManager },
];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: new VueRouter({ routes }),
  render: h => h(App),
});
