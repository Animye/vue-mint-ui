\
<template>
  <div>
    <h1 class="home">me</h1>
    <mt-loadmore :top-method="loadTop" ref="loadmore" :top-all-loaded="allLoaded">
      <ul class="list">
        <li v-for="num in arr" :key="num">{{num}}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  name: "me",
  data: () => ({
    arr: [1, 2, 3, 4, 5],
    allLoaded: false
  }),
  methods: {
    loadTop() {
      setTimeout(() => {
        this.arr.splice(0, 5, 6, 7, 8, 9);
        this.$refs.loadmore.onTopLoaded();
      }, 1000);
    }
  }
};
</script>
<style>
ul.list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.list li {
  text-align: center;
  font-size: 20px;
  line-height: 70px;
  border-bottom: 1px solid #ccc;
}
</style>