<template>
   
       
            <tr>
                <th v-for="item in titles" :key="item">{{ item }}</th>
            </tr>
    
  
</template>
<script>


export default {
    props: {
        titles: {
            type: Array,
            dafault: () => []
        }
    }
}
</script>
<style>
table{
    border-collapse: collapse;
}
thead{
    background-color: #f5f5f5;
}
th,td{
    border: 1px solid #aaa;
    padding: 8px 16px;
}
</style>