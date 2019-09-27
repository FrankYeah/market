<template>
  <div>
      <h1>我是關於</h1>
        <router-link to='/contact-us' >
            <div>聯絡</div>
        </router-link>
        <router-link to='/'>
            <div>首頁</div>
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {

  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
