<template>
    <div>
        <h2>这是home组件</h2>

        <router-link to="/child1" >展示列表</router-link>&nbsp;|
        <router-link to="/child2" >你的选择</router-link>
        <router-view />

    </div>
</template>

<script>
import HomeChoice from './HomeChoice.vue';
import HomeShow from './HomeShow.vue';
export default {
  components: { HomeShow, HomeChoice },
    name: 'Home',
    data() {  
    return {  
      selectedChoice: null  
    };  
  },  
  methods: {  
    handleChoiceMade(choice) {  
      this.selectedChoice = choice;  
    }  
  }
}; 

</script>

<style scoped></style>
