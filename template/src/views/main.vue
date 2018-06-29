<template>
  <div class="main-page">
    <div class="header-wrapper">
      <div class="title">系统名称</div>
      <div class="userinfo">
        <div class="organization">所属机构：黑龙江省</div>
        <div class="user">
          <img class="image" src="../assets/user.png" width="24" height="24">
        </div>
        <div class="details">
          <div class="item">个人信息</div>
          <div class="item">退出</div>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="menu-wrapper"></div>
      <div class="content">
        <el-tabs v-model="currentTabs"
                 type="card"
                 closable
                 @tab-remove="removeTab"
                 @tab-click="tabChange">
          <el-tab-pane
            v-for="item in tabs"
            :key="item.name"
            :label="item.title"
            :name="item.name">
          </el-tab-pane>
        </el-tabs>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mainPage",
    data() {
      return {
        currentTabs: '0',
        tabs: [{
          title: '我的桌面',
          name: '0',
          path: '/main/temp'
        }]
      }
    },
    methods: {
      removeTab(targetName) {
        let path = '';
        let tabs = this.tabs;
        let activeName = this.currentTabs;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
                path = nextTab.path;
              }
            }
          });
        }
        this.currentTabs = activeName;
        this.$router.push(path);
        this.tabs = tabs.filter(tab => tab.name !== targetName);
        if (this.tabs.length === 0) {
          this.tabs = [{
            title: '我的桌面',
            name: '0',
            path: '/main/temp'
          }]
        }
        this.$storage.setStorage('currentTabs', this.currentTabs);
        this.$storage.setStorage('tabs', this.tabs);
      },
      tabChange(tab) {
        this.$router.push(this.tabs[parseInt(tab.name)].path);
        this.$storage.setStorage('currentTabs', this.currentTabs);
      }
    }
  }
</script>

<style lang="sass">
  .main-page
    position: absolute
    width: 100%
    height: 100%
    overflow: hidden
    .header-wrapper
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 50px
      background: rgb(16, 78, 139)
      box-shadow: 0 2px 8px rgb(79, 79, 79)
      z-index: 100
      .title
        line-height: 50px
        padding-left: 20px
        font-size: 18px
      .userinfo
        position: absolute
        right: 0
        top: 0
        height: 100%
        width: 260px
        .organization
          float: left
          line-height: 50px
          font-size: 14px
        .user
          float: left
          width: 36px
          height: 36px
          border-radius: 50%
          background: rgb(255, 255, 255)
          margin-top: 7px
          margin-left: 50px
          .image
            position: absolute
            margin: 6px
        &:hover
          .details
            display: inline-block
      .details
        position: absolute
        top: 49px
        left: 145px
        display: none
        width: 100px
        background: rgb(255, 255, 255)
        border: 1px solid rgb(200, 200, 200)
        .item
          position: relative
          height: 48px
          line-height: 48px
          font-size: 14px
          color: rgb(79, 79, 79)
          text-align: center
          border-bottom: 1px solid rgb(200, 200, 200)
          margin: 0 15px
          cursor: pointer
          &:hover
            color: rgb(16, 78, 139)
          &:last-child
            border-bottom: 0
    .content-wrapper
      position: relative
      top: 50px
      left: 0
      width: 100%
      height: 100%
      display: flex
      .menu-wrapper
        position: relative
        overflow-x: hidden
        flex: 0 0 200px
        width: 200px
        height: 100%
        box-shadow: 2px 0 8px rgb(79, 79, 79)
        .menu
          position: relative
          width: 100%
          height: 100%
          border: 0
      .content
        position: relative
        flex: 1
        margin-top: 5px
        margin-left: 15px
        margin-right: 5px


</style>
