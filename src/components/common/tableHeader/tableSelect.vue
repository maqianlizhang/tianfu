<template>
	<div class="table-select-container">
    <div class="table-select">
      <span class="select-text">单位选择</span>
      <select name="" id="" class="select-list select-company">
       <option value="">1</option>
       <option value="">2</option>
       <option value="">3</option>
       <option value="">4</option>
       <option value="">5</option>
     </select> 
     <span class="select-text select-time">开始时间</span>
      <select name="" id="" class="select-list">
       <option value="">1</option>
       <option value="">2</option>
       <option value="">3</option>
       <option value="">4</option>
       <option value="">5</option>
       </select>
       <span class="select-text select-time">结束时间</span>
       <select name="" id="" class="select-list">
         <option value="">1</option>
         <option value="">2</option>
         <option value="">3</option>
         <option value="">4</option>
         <option value="">5</option>
       </select>
       <input type="button" value="查询" class="btn btn-margin">
       <input type="button" value="返回" class="btn">
    </div>
  </div>
</template>
<script>
	
</script>
<style>
	.table-select-container {
    width: 100%;
  }
  .table-select {
    width: 1288px;
    height: 70px; 
    line-height: 70px;
    margin: 0 auto;
    padding-left: 18px;
    background: #f3f6f8; 
  }
  .select {
    font-size: 14px;
    margin-right: 10px;
  }
  .select-list {
    height: 28px;
    width: 198px;
    border: 1px solid #ccc;
  }
  .select-time {
    margin-left: 40px;
  }
  .select-company {
    width: 318px;
  }
  .btn {
    height: 30px;
    width: 100px;
    background: #00bcd4;
    color: #fff;
    border-radius: 5px;
  }
  .btn-margin {
    margin: 0 20px 0 52px;
  }
</style>
