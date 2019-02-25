<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">首页</mt-tab-item>
      <mt-tab-item id="search">发现</mt-tab-item>
      <mt-tab-item id="book">书架</mt-tab-item>
      <mt-tab-item id="me">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    selected: "home"
  }),
  // updated() {
  //   this.$router.history.push(`/${this.selected}`);
  // }
  watch: {
    selected() {
      const url = this.selected === "home" ? "/" : `/${this.selected}`;
      this.$router.history.push(url);
    }
  }
};
</script>

<style >
body {
  margin: 0;
}
.mint-tabbar {
  position: fixed;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: red;
}
</style>
