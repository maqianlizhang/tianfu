<template>
  <div>
  	<div class="table-header-container">
	    <div class="table-header">
	      <div class="total-amount">各行业收入成本金额</div>
	      <div class="total-unit">单位金额：万元</div>
	    </div>	
    </div>

    <table class="table">
      <tr>
        <td>行业名称</td>
        <td colspan="2">本期金额</td>
      </tr>
      <tr>
        <td></td>
        <td>营业收入</td>
        <td>营业成本</td>
      </tr>
      <tr v-for="item in industryInfo" :key="item.id">
        <td>{{item.title}}</td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <router-view></router-view>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'industryAnalysis',
    data () {
      return {
        industryInfo: []
      }
    },
    created () {
      this.getIndustryInfo()
    },
    methods: {
      getIndustryInfo () {
        axios.get('/static/industry.json')
          .then(this.handleGetIndustryInfoSucc.bind(this))
          .catch(this.handleGetIndustryInfoError.bind(this))
      },
      handleGetIndustryInfoSucc (res) {
        this.industryInfo = res.data.data.industryInfo
      },
      handleGetIndustryInfoError () {
        console.log('获取失败')
      }
    }

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
    .table {
    width: 1306px;
    margin: 0 auto;
    text-align: center;
    border:1px solid #00bcd4;
  }
  .table th { 
    height: 39px;
    background: #e6eef3;
    border: 1px solid #bac5cc;
  }
  .table td {
    height: 39px;
    border: 1px solid #bac5cc;
  }
</style>