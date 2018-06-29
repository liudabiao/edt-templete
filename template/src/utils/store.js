//这是一个vuex 数据仓库的例子
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menuList: []
  },
  mutations: {
    getMenuList (state, data) {
      state.menuList = data;
    }
  },
  actions: {
    setMenuList ({commit}, data) {
      commit('getMenuList', data)
    }
  }
});

export default store
