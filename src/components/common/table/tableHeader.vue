<template>
  <div class="table-header-container">
    <div class="table-header">
      <div class="total-amount">利润表累计金额</div>
      <div class="total-unit">单位金额：万元</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tableHeader'
  }
</script>
<style scoped>
   .table-header-container {
    width: 100%;
     }
     .table-header {
    width: 1306px;
    margin: 0 auto;
    height: 58px;
    border-bottom: 2px solid #00bcd4;
     }
     .total-amount {
    float: left;
    margin-top: 31px;
    font-size: 16px;
     }
     .total-unit {
    float: right;
    margin-top: 35px;
    font-size: 12px;
     } 
</style>