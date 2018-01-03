<template>
	<div class="logo-container">
	  <div class="logo">
	    <img class="logo-img" src="../../assets/images/logo.png" alt="">
	    财务管理-利润表分析
	  </div>
	</div>
</template>
<script>
  export default {
    name: 'indexHeader'
  }
</script>
<style scoped>
	.logo-container {
    padding: 0 30px;
    background: #00bcd4;
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
</style>