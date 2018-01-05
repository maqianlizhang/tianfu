<template>
	<div>
    <table-header></table-header>
    <lengthways-table></lengthways-table> 
	</div>
</template>
<script>
  import TableHeader from 'components/common/table/tableHeader'
  import LengthwaysTable from './table'
  export default {
    name: 'vertical',
    components: {
      TableHeader,
      LengthwaysTable
    }
  }
</script>
<style scoped>
</style>