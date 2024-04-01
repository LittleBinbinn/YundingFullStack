
<script>
export default {
  emits: ['add', 'decrease', 'del', 'trclick'],
  props: ["bookList"],
  data() {
    return {
      currentIndex: -1
    }
  },
  methods: {
    increment(index) {
      this.$emit("add", index);
    },
    decrement(index) {
      this.$emit("decrease", index);
    },
    remove(index) {
      this.$emit("del", index);
    },
    trclick(index) {
      this.currentIndex = index;
      this.$emit("trclick", index);
      
    }
  }
}
</script>

<style scoped>
.active {
  background-color: rgb(206, 178, 52);
}
</style>