<template>
	<div class="nav-container">
      <ul class="nav">
        <li><a href="javascript:;">利润表-纵向分析</a></li>
        <li><a href="javascript:;">利润表-横向分析</a></li>
        <li><a href="javascript:;">利润表-行业分析</a></li>
      </ul>
    </div>
</template>
<script>
  export default {
    name: 'indexNav'
  }
</script>
<style scoped>
  .nav-container {
    padding: 0 30px;
    background: #e6eef3;
  }
  .nav {
    height: 60px;
    width: 1306px;
    margin: 0 auto;
    line-height: 60px;
    font-size: 16px;
  }
  .nav li {
    float: left;
    padding-right: 50px;
  }
  .nav li a {
    color: #000;
  }
</style>