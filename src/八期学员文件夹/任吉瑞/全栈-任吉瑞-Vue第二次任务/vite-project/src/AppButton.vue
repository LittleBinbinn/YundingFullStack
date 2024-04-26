<template>
    <div>
        <button @click="Change(true)" v-show="a">添加</button>
        <button @click="Change(false)" v-show="!a">确认</button>
        <button @click="Change(false)" v-show="!a">取消</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            a: true
        }
    },
    methods: {
        Change(b) {
            this.a = !this.a;
            this.$emit("change", b);
        },
        
    }
}
</script>

<style  scoped></style>