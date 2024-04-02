<template>
<div>
    <button  v-if="showAddSuccess" @click="addBook">添加</button>
    <div v-else>
        <slot></slot>
        <button @click="confirmAdd">确定</button>  
        <button @click="cancelAdd">取消</button>
    </div>
    
</div>
</template>

<script >
  export default{
    name:'AppAdd',
    data() {  
    return {  
      showAddSuccess: true, // 控制是否显示的变量  
    };  
  }, 
    methods: {    
    addBook() {  
        this.showAddSuccess = false;
        this.$emit('add-book');  
    },
    confirmAdd() { 
        this.showAddSuccess = true; // 假设添加成功，则重新显示“添加”按钮  
      // 发送一个事件通知父组件添加完成  
      this.$emit('add-confirmed'); 
        
    },  
    cancelAdd() { 
        this.showAddSuccess = true;  
      // 发送一个事件通知父组件取消添加  
      this.$emit('add-cancelled');  
       
    },   
    
  }  
  }

</script>



<style scoped>

</style>