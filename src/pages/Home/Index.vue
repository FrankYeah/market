<template>
  <div>
      <h1>我是首頁</h1>
        <router-link to='/contact-us' >
            <div>聯絡</div>
        </router-link>
        <router-link to='/about' >
            <div>關於</div>
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
