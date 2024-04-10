<template>
  <div>
    <BookList></BookList>
  </div>
</template>

<script>
//引入组件
import BookList from './components/BookList.vue';
// import BookItem from './components/BookItem.vue';

export default {
  name: 'App',
  components: {
    BookList,
    // BookItem
  }
}
</script>