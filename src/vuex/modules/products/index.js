import * as getters from './getters';
import * as actions from './actions';
import { FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './mutation-types';

const initialState = {
  all: [],
};

const mutations = {
  [FETCH_PRODUCTS](state, products) {
    state.all = products;
  },
  [CREATE_PRODUCT](state, product) {
    state.all.push(product);
  },
  [UPDATE_PRODUCT](state, product) {
    const index = state.all.findIndex(p => p.id === product.id);

    if (index !== -1) {
      state.all.splice(index, 1, product);
    }
  },
  [DELETE_PRODUCT](state, product) {
    state.all = state.all.filter(p => p.id !== product.id);
  },
};

export default {
  state: { ...initialState },
  actions,
  getters,
  mutations,
};
