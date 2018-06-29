import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: resolve => require(['@/views/login.vue'], resolve){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    {
      path: '/main',
      name: 'mainPage',
      component: resolve => require(['@/views/main.vue'], resolve),
      children: [{
        path: 'temp',
        component: resolve => require(['@/views/temp/temp.vue'], resolve){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}]
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
