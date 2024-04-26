<template>
    <table>
        <thead>
            <th>
                <h2>序号</h2>
            </th>
            <th>
                <h2>书名</h2>
            </th>
            <th>
                <h2>价格</h2>
            </th>
            <th>
                <h2>购买数量</h2>
            </th>
            <th>
                <h2>操作</h2>
            </th>
        </thead>
        <tbody>
            <tr v-for="(items, index) in books" :class="{ yellow: index === c }">
                <td>
                    <h2>{{ index + 1 }}</h2>
                </td>
                <td @click="choose(index)">
                    <h2>{{ "《" + items.name + "》" }}</h2>
                </td>
                <td>
                    <h2>{{ "￥" + items.value }}</h2>
                </td>
                <td>
                    <button @click="reduce(index)" v-if="items.a > 0">-</button>
                    &nbsp;&nbsp;{{ items.a }}&nbsp;&nbsp;
                    <button @click="add(index)">+</button>
                </td>
                <td>
                    <button @click="del(index)">移除</button>
                </td>
            </tr>
            <tr v-show="!shownews">
                <td>
                    <h2>{{ books.length + 1 }}</h2>
                </td>
                <td>
                    <input type="text" v-model="newbookname">
                </td>
                <td>
                    <input type="text" v-model="newbookvalue">
                </td>
                <td>
                    &nbsp;&nbsp;0&nbsp;&nbsp;
                    <button @click="add(index)">+</button>
                </td>
                <td>
                    <button>移除</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div>
        <br><br>
        <button @click="news" v-show="shownews">添加</button>
    </div>
    <div v-show="!shownews">
        <button @click="ding">确定</button>
        <button @click="qu">取消</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
            c: -1,
            shownews: true,
            newbookname: "",
            newbookvalue: ""
        }
    },
    props: {
        books: {
            type: Array
        }
    },
    methods: {
        choose(index) {
            this.c = index
            this.$emit("choose", index)
        },
        del(index) {
            this.$emit("del", index)
        },
        add(index) {
            this.$emit("add", index)
        },
        reduce(index) {
            this.$emit("reduce", index)
        },
        news() {
            this.shownews = false
        },
        qu() {
            this.shownews = true
            this.newname = ""
            this.newvalue = ""
        },
        ding() {
            if (this.newbookname === '') {
                alert('请输入书名')
                return
            }
            if (this.newbookvalue <= 0) {
                alert('价格应为正数')
                return
            }
            this.books.push({
                name: this.newbookname,
                value: this.newbookvalue,
                a: 0
            })
            this.shownews = true
            this.newname = ""
            this.newvalue = 0
        }
    }
}
</script>
<style>
.yellow {
    background-color: yellow;
}
</style>