<template>
	<div>
		<table-header></table-header>
    <horizontal-table></horizontal-table>
	</div>
</template>
<script>
  import TableHeader from 'components/common/table/tableHeader'
  import HorizontalTable from './table'
  export default {
    name: 'horizontalIndex',
    components: {
      TableHeader,
      HorizontalTable
    }
  }
</script>
<style scoped>
  
</style>