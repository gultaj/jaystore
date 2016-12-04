import { http } from 'vue';
import { FETCH_PRODUCTS, DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT } from './mutation-types';

export function fetchProducts({ commit }) {
  return http.get('products/')
    .then(response => commit(FETCH_PRODUCTS, response.body.data));
}

export function deleteProduct({ commit }, product) {
  return http.delete(`products/${product.id}`)
    .then(() => commit(DELETE_PRODUCT, product.id));
}

function createProduct({ commit }, { product }) {
  return http.post('products', product)
    .then(response => commit(CREATE_PRODUCT, response.body.data));
}

function updateProduct({ commit }, product) {
  return http.put(`products/${product.id}`)
    .then(response => commit(UPDATE_PRODUCT, response.body.data));
}


export function saveProduct({ commit, state }, product) {
  const index = state.all.findIndex(p => p.id === product.id);

  if (index !== -1) {
    return updateProduct({ commit }, product);
  }
  return createProduct({ commit }, product);
}
