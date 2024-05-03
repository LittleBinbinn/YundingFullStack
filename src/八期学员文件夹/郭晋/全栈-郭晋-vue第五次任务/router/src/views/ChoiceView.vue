<template>
  <div>
    我是选择：{{ selectedItem }}
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

const globalState = {
  selectedItem: ''
};

export default {
  name: 'test',
  setup() {
    const route = useRoute();
    const selectedItem = ref(globalState.selectedItem);

    onMounted(() => {
      // 在组件挂载后，从查询参数中获取传递的数据
      selectedItem.value = route.query.item || globalState.selectedItem;
    });

    onBeforeUnmount(() => {
      // 在组件卸载前保存选中的项到全局变量
      globalState.selectedItem = selectedItem.value;
    });

    return {
      selectedItem
    };
  }
};
</script>



