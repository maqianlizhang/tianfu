<template>
  <div id="app">
     <div class="logo-container">
      <div class="logo">
        <img class="logo-img" src="./assets/images/logo.png" alt="">
        财务管理-利润表分析
      </div>
    </div>
    <div class="nav-container">
      <ul class="nav">
        <router-link to="/vertical" tag="li" :class="checkedlistV">
         利润表-纵向分析
        </router-link>
        <router-link to="/horizontal" tag="li" :class="checkedlistH">
         利润表-横向分析
        </router-link>
        <router-link to="/industry" tag="li" :class="checkedlistI">
          利润表-行业分析
        </router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      checkedlistV: 'nav-list',
      checkedlistH: '',
      checkedlistI: ''
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/vertical') {
        this.checkedlistV = 'nav-list'
      } else {
        this.checkedlistV = ''
      }
      if (to.path === '/horizontal') {
        this.checkedlistH = 'nav-list'
      } else {
        this.checkedlistH = ''
      }
      if (to.path === '/industry') {
        this.checkedlistI = 'nav-list'
      } else {
        this.checkedlistI = ''
      }
    }
  }
}
</script>

<style>
  .logo-container {
    padding: 0 30px;
    background: #00bcd4;
    width: 100%;
  }
  .logo {
    height: 80px;
    width: 1306px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    font-size: 20px;
    color: #fff;
    line-height: 80px;
  }
  .logo-img {
    position: absolute;
    left: 0;
    top: 10px;
  }
  .nav-container {
    padding: 0 30px;
    background: #e6eef3;
    width: 100%;
  }
  .nav {
    height: 60px;
    width: 1306px;
    margin: 0 auto;
    line-height: 60px;
    font-size: 14px;
  }
  .nav li {
    float: left;
    padding-right: 50px;
  }
  .nav .nav-list {
    color: #00bcd4;
    font-weight: bold;
    font-size: 16px;
  }
</style>
