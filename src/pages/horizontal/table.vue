<template>
  <div>
  	<div class="table-select-container">
      <div class="table-select">
        <span class="select-text">单位选择</span>
        <select name="" id="" class="select-list select-company" ref="companyName">
         <option v-for="item in selectList" :key="item.id" :value="item.id">{{item.name}}</option>
       </select> 
       <span class="select-text select-time">开始时间</span>

       <div class="block select-time-picker">
          <el-date-picker
            v-model="sTime"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
            @change="getSTime"
            >
          </el-date-picker>
         </div>
        <span class="select-text select-time">结束时间</span>

        <div class="block select-time-picker">
          <el-date-picker
            type="date"
            placeholder="选择日期" 
            v-model="eTime"
            value-format="yyyy-MM-dd"  
            @change="getETime">
          </el-date-picker>
         </div>
         <input type="button" value="查询" class="btn btn-margin" @click="handleSearchInput">
         <input type="button" value="返回" class="btn">
      </div>
      <div class="select-item">
        <span class="select-text">科目选择</span>
        <label class="subject">
          <input class="subject-input" type="checkbox" :checked="loan">主营业务收入
        </label>
        <label class="subject">
          <input class="subject-input" type="checkbox" :checked="loan">其他业务收入
        </label>
        <label class="subject">
          <input class="subject-input" type="checkbox" :checked="borrow">主营业务成本
        </label>
        <label class="subject">
          <input class="subject-input" type="checkbox" :checked="borrow">其他业务成本
        </label>
        <label class="subject">
          <input class="subject-input" type="checkbox" :checked="borrow">税金及附加
        </label>
        <label class="subject">
          <input class="subject-input" type="checkbox" :checked="borrow">销售费用
        </label>
        <label class="subject">
          <input class="subject-input" type="checkbox" :checked="borrow">管理费用
        </label>
        <label class="subject">
          <input class="subject-input" type="checkbox" :checked="borrow">财务费用
        </label>
      </div>

      <table class="table">
        <tr>
          <td rowspan="2">公司名称</td>
          <td rowspan="2">科目名称</td>
          <td colspan="6">借方累计发生额 贷方累计发生额</td>
        </tr>
        <tr>
          <td>占比</td>
          <td>月份</td>
          <td>金额</td>
          <td>占比</td>
          <td>月份</td>
          <td>金额</td>
        </tr>
      </table>
    </div>

    <div class="chart-container">
      <div class="chart">
        <p class="chart-title">利润表本年与上年同期会计科目发生额变化趋势</p>
        <div ref="vertical" class="vertical"></div> 
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import echarts from 'echarts'
  export default {
    name: 'horizontalTable',
    data () {
      return {
        selectList: [],
        sTime: '2017-01-01',
        eTime: '2017-03-01',
        echartsInfo: [],
        loan: true,
        borrow: false
      }
    },
    created () {
      this.getCompanyName()
      this.getEchartsInfo()
    },
    methods: {
      getCompanyName () {
        axios.get('/static/companyName.json')
        .then(this.handleCompanyNameSucc.bind(this))
        .catch(this.handleCompanyNameError.bind(this))
      },
      handleCompanyNameSucc (res) {
        this.selectList = res.data.data.company
      },
      handleCompanyNameError () {
        console.log('获取失败')
      },
      handleSearchInput () {
        axios.get('/static/verticalSearch.json?id=' + this.$refs.companyName.value + '&stratTime=' + this.sTime + '&endTime=' + this.eTime)
          .then(this.handleSearchSucc.bind(this))
      },
      handleSearchSucc (res) {
        this.list = res.data.data.verticalData
      },
      getSTime (val) {
        this.sTime = val
      },
      getETime (val) {
        this.eTime = val
      },
      getEchartsInfo () {
        axios.get('/static/verticalEchart.json')
          .then(this.handleGetEchartsInfoSucc.bind(this))
          .catch(this.handleGetEchartsInfoError.bind(this))
      },
      handleGetEchartsInfoSucc (res) {
        this.echartsInfo = res.data.data.verticalInfo
        const beforeMoney = []
        const nowMoney = []
        const designation = []
        this.echartsInfo.forEach((value) => {
          beforeMoney.push(value.beforeMoney)
          nowMoney.push(value.nowMoney)
          designation.push(value.designation)
        })
        echarts.init(this.$refs.vertical).setOption({
          color: ['#00bcd4'],
          legend: {
            top: '20px',
            right: '5%',
            data: ['本年累计发生金额']
          },
          grid: {
            left: 0,
            right: 0,
            bottom: 0,
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: designation
          }],
          yAxis: [{
            type: 'value',
            axisLine: {
              lineStyle: {
                color: ['#00bcd4']
              }
            }
          }],
          series: [{
            type: 'bar',
            name: '本年累计发生金额',
            data: beforeMoney,
            barWidth: '30px',
            barGap: 0
          }]
        })
      },
      handleGetEchartsInfoError () {
        console.log('获取失败')
      }
    }
  }
</script>
<style scoped>
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
  .table-select-container {
    width: 100%;
  }
  .table-select {
    width: 1288px;
    height: 65px; 
    line-height: 65px;
    margin: 0 auto;
    padding-left: 18px;
    background: #f3f6f8; 
  }
  .select {
    font-size: 14px;
    margin-right: 10px;
  }
  .select-list {
    float: left;
    height: 28px;
    width: 198px;
    border: 1px solid #ccc;
  }
  .select-time-picker {
    float: left;
  }
  .el-date-editor.el-input{
    width: 198px;
  }
  .el-input__inner {
    height: 28px!important;
  }
  .select-text {
    float: left;
    margin-right: 10px;
  }
  .select-time {
    float: left;
    margin-left: 40px;
  }
  .select-company {
    width: 318px;
    margin-top: 20px;
  }
  .btn {
    margin-top: 20px;
    float: left;
    height: 30px;
    width: 100px;
    background: #00bcd4;
    color: #fff;
    border-radius: 5px;
  }
  .btn-margin {
    margin: 20px 20px 0 52px;
  }
  .chart-container {
    width: 100%;
  }
  .select-item {
    width: 1288px;
    height: 20px;
    margin: 0 auto;
    background: #f3f6f8;
    padding-bottom: 20px;
    padding-left: 18px;
  }
  .subject {
    color: #333;
    padding-right: 30px;
    font-size: 12px;
  }
  .subject-input {
    width: 18px;
    height: 18px;
    border: 1px solid #ccc;
    margin-right: 6px;
    color: red
  }
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
  .vertical {
    height: 500px;
    width: 100%;
  }
</style>