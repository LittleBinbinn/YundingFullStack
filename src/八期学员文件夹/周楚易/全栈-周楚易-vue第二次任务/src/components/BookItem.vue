<template>
  <tr @click="selectBook" :class="{ active: selected }">
    <td>{{ index + 1 }}</td>
    <td>{{ item.name }}</td>
    <td>{{ formatPrice(item.price) }}</td>
    <td>
      <button :disabled="item.count <= 1" @click="decrement">-</button>
      {{ item.count }}
      <button @click="increment">+</button>
    </td>
    <td>
      <button @click="removeBook">移除</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number,
    selected: Boolean
  },
  methods: {
    decrement() {
      this.$emit('decrement');
    },
    increment() {
      this.$emit('increment');
    },
    removeBook() {
      this.$emit('remove-book');
    },
    selectBook() {
      this.$emit('select-book');
    },
    formatPrice(price) {
      return `￥${price.toFixed(2)}`;
    }
  }
};
</script>