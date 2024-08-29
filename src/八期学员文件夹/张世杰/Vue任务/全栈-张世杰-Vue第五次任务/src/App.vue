<template>  
  <div id="app">  
    <nav>  
      <router-link to="/">Home</router-link> |  
      <router-link to="/about">About</router-link>  
    </nav>  
    <router-view/>  
  </div>  
</template>  
  
<script>  
export default {  
  name: 'App'  
};  
</script>