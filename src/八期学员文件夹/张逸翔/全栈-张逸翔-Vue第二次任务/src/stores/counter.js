import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
/*
let inputname = ref(null)
let inputprice = ref(null)
const props = defineProps(['chart'])
let obj ={
  book = inuptname.value
  bokk = inputprice.value
}
props.chart.push(obj)
*/