<template>
  <div class="nav-menu">
    <el-menu-item v-for="menu in menus"
                  v-if="menu.children.length === 0 && menu.status"
                  :key="menu.id"
                  :index="menu.name"
                  :route="menu.openUrl">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.name}}</span>
    </el-menu-item>
    <el-submenu v-for="menu in menus"
                v-if="menu.children.length > 0"
                :key="menu.id"
                :data="menu"
                :index="menu.name"
                route="">
      <template slot="title">
        <i :class="menu.icon"></i>
        <span class="title"> {{menu.name}}</span>
      </template>
      <nav-menu :menus="menu.children"></nav-menu>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: 'navMenu',
    props: {
      menus: Array
    }
  }
</script>

<style>
</style>
