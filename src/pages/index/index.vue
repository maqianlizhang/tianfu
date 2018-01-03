<template>
	<div>
    <index-header></index-header>
    <index-nav></index-nav>
    <table-header></table-header>
    <table-select></table-select>
    <lengthways-table></lengthways-table>
    <lengthways-chart></lengthways-chart>
	</div>
</template>
<script>
  import IndexHeader from './header'
  import IndexNav from './nav'
  import TableHeader from 'components/common/tableHeader/tableHeader'
  import TableSelect from 'components/common/tableHeader/tableSelect'
  import LengthwaysTable from './table'
  import LengthwaysChart from './chart'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexNav,
      TableHeader,
      TableSelect,
      LengthwaysTable,
      LengthwaysChart
    }
  }
</script>
<style scoped>
  

 

</style>