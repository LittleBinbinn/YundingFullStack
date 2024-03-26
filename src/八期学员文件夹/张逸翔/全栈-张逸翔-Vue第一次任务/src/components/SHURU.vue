<template>
    <div id="base">
        <!-- 当鼠标聚焦在输入框时,enter 添加单词,delete/Backspace 删除最后一个单词 -->
        <input v-model="message" placeholder="请输入单词" @keyup.enter="add" @keyup.delete="del">
        <div id="tips-bloder">
            <div>你输入的单词是：{{ message }}</div>
        </div>
        <button @click="add">增加</button>
        <button @click="del">删除</button>
        <div :class="{ Red: isRed }">
            <div v-if="num">莫要加了,单词数量太多了</div>
            <div v-else-if="lists.length==5">警告警告！变红预警</div>
            <div v-else>在提示出现前,你还可以添加{{ 5 - lists.length }}个单词</div>
            <div>
                单词列表:
                <ul>
                    <li v-for="list in lists" :key="list.id">{{ list.text }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
//  增加单词
var id = 0
const message = ref('')
const lists = ref([])
function add() {
    lists.value.push({ id: id++, text: message.value })
    message.value = ""
}
// 删除单词
function del(){
    lists.value.pop()
}
// 计算共添加的单词数量
const num = computed(
    () => {
        // lists 是一个响应式引用（ref），需要通过 .value 来访问它的实际值。
        return lists.value.length > 5 ? true : false
    }
)
// 数量太多的提示
const isRed = computed(
    () => {
        return lists.value.length > 5 ? true : false
    }
)
</script>

<style scoped>
#base {
    width: 800px;
}

input {
    outline: none;
}

#tips-bloder {

    font-weight: 900;
    font-size: 30px;
    caret-color: pink;
}
button{
    margin-left: 30px;
}
li {
    list-style-type: circle;
}

.Red {
    color: red;
}
</style>