<template>
    <ul>
        <li v-for="(item, index) in list" @click="select(index)">{{ item }}</li>
    </ul>
    <input v-model="input" @keyup.enter="add">
</template>
<script>
import router from "@/router";

export default {
    data() {
        return {
            list: [],
            input: "",
            selectedId: -1
        }
    },
    created() {
        const savedList = localStorage.getItem('list');
        if (savedList) {
            try {
                this.list = JSON.parse(savedList);
            } catch (error) {
                this.list = ["牛牛", "马马", "牛马"];
            }
        }
    },
    methods: {
        add() {
            this.list.push(this.input);
            this.input = ""
            localStorage.setItem('list', JSON.stringify(this.list));
        },
        select(index) {
            router.push({
                path: "/home/selected",
                query: { selected: this.list[index] }
            });
        }
    }
}  
</script>