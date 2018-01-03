<template>
	<div class="chart-container">
   <div class="chart">
     <p class="chart-title">利润表本年与上年同期会计科目发生额变化趋势</p>
      
   </div>
  </div>
</template>
<script>
  export default {
    name: 'elengthwaysChart'
  }
</script>
<style scoped>
  .chart-container {
    width: 100%;
  }
  .chart {
    width: 1306px;
    margin: 0 auto;
  }
  .chart-title {
    height: 27px;
    border-bottom: 2px solid #00bcd4;
    padding-top:30px; 
    font-size: 16px;
  }
</style>