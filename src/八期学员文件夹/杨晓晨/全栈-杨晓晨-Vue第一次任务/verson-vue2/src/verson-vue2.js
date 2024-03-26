Vue.config.productionTip = false;

new Vue({
    el: '#root',
    data: {
        word: '',
        color: '',
        items: JSON.parse(localStorage.getItem('Items')) || [],//或空数组，意为前者有值则用前者，前者没值返回null,则用后者，为空数组，而不是null
        //demo: localStorage.getItem('Items'),
    },
    computed: {
        checkRepeat() {
            for (item of this.items) {
                if (item.value == this.word) return false
            }
            return true;
        }
    },
    methods: {

        addItem() {
            if (this.word.trim() !== '' && this.checkRepeat && this.items.length <5) {
                const newItem = { value: this.word.trim() };
                this.items.unshift(newItem);
                this.word = '';
            }
            else if (this.word.trim() == '') {
                alert("不是哥们！？你加单词是空格啊？？？")
            }
            else if (this.items.length >= 5) {
                alert('真的受不鸟啦！！！')
            }
            else {
                alert("这个单词已经有了啊，亲！")
            }
            
        },

        delateItems() {
            this.items.shift();
        },

        clearItems() {
            this.items = this.items.filter((item) => { return !item });
        },
        /*demoyixia() {
            console.log(this.demo);
        }*/

    },
    watch: {
        items: {
            //immediate: true,//初始化时调用一次
            deep: true,
            handler(items) {
                if (items.length == 5) {
                    //复习生命周期，解决添加前就改变样式的问题
                    //alert("STOP!!!");
                    this.color = 'redWord';//颜色变化
                }
                else {
                    this.color = '';
                }
                localStorage.setItem('Items', JSON.stringify(items));
            }
            
        },
    },
    //挂载的时候重新检查，防止数组长度为5却没有标红
    mounted() {
        if (this.items.length == 5) {
            //复习生命周期，解决添加前就改变样式的问题
            //alert("STOP!!!");
            this.color = 'redWord';//颜色变化
        }
        else {
            this.color = '';
        }
    }


})

//一键清空清空功能OK
//条件判断，防止重复添加OK
//条件判断，防止添加空字符OK
//自动处理，单词前后空格自动清除OK
//浏览器本地储存功能，防止数据刷新丢失OK

//键盘事件-->回车OK
