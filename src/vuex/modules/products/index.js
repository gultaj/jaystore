import * as getters from './getters';
import * as actions from './actions';
import { CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './mutation-types';

const initialState = {
  all: [
    {
      id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
      name: 'COBOL 101 vintage',
      description: 'Learn COBOL with this vintage programming book',
      price: 399,
    }, {
      id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
      name: 'Sharp C2719 curved TV',
      description: 'Watch TV like never before with the brand new curved ' +
      'screen technology',
      price: 1995,
    }, {
      id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
      name: 'Remmington X mechanical keyboard',
      description: 'Excellent for gaming and typing, this Remmington X ' +
      'keyboard features tactile, clicky switches for speed and accuracy',
      price: 595,
    },
  ],
};

const mutations = {
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
