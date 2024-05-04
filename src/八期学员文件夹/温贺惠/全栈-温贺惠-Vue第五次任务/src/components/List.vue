<template>
    <div class="habits">
        <ul>
            <li @click="showHabit(h.habit)" v-for="h in habits" :key="h.id">{{ h.habit }}</li>
        </ul>
        <input type="text" v-model.trim="addMeg" placeholder="请输入事项" @keyup.enter="addHabit(addMeg)">
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const route = useRouter()
const habits = reactive([
    {
        id: 0,
        habit: "吃饭"
    },
    {
        id: 1,
        habit: "睡觉"
    },
    {
        id: 2,
        habit: "打豆豆"
    }
])

const addMeg = ref('')
function addHabit(value) {
    const newHabitId = habits.length
    if (addMeg.value !== '')
        habits.push({ id: newHabitId, habit: value })
    else {
        alert('不能为空')
    }
    addMeg.value = ''
}

function showHabit(habit) {
    route.push({
        path: "choose",
        query: {
            habit
        }
    })
}
</script>

<style>
li {
    width: 100px;
}
</style>