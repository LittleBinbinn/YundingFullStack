<template>
    <div class="home-container">
        <h1>我是Home组件</h1>
        <div class="options">
            <button @click="showOptions = true" :disabled="showOptions">显示列表</button>
            <button @click="handleShowSelectionMessage" :disabled="!selectedOption">你的选择</button>
            <div v-if="showOptions" class="option-list">
                <button v-for="(option, index) in options" :key="index" @click="selectOption(option)"
                    :class="{ 'selected': option === selectedOption }">
                    {{ option }}
                </button>
            </div>
        </div>
        <div class="input-area" v-if="showOptions || showSelectionMessage">
            <input type="text" v-model="newOption" placeholder="输入新选项" v-if="showOptions">
            <button @click="addOption" :disabled="!newOption" v-if="showOptions">添加选项</button>
            <h1 v-if="showSelectionMessage">你的选择是: </h1>
            <p v-if="showSelectionMessage">{{ selectedOption }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    data() {
        const savedNewOption = localStorage.getItem('newOption');
        return {
            showOptions: false,
            showSelectionMessage: false,
            selectedOption: '',
            newOption: savedNewOption || '', 
            options: [
                '吃饭',
                '睡觉',
                '打豆豆',
                '芜湖'
            ]
        };
    },
    beforeUnmount() {
        localStorage.setItem('newOption', this.newOption);
    },
    methods: {
        selectOption(option) {
            this.selectedOption = option;
            this.showOptions = false;
            if (this.selectedOption) {
                this.showSelectionMessage = true;
            }
        }, 
        handleShowSelectionMessage() {
            if (this.selectedOption) {
                this.showSelectionMessage = true;
                this.showOptions = false;
            } else {
                alert('请先选择一个选项！');
            }
        },
        addOption() {
            if (this.newOption && !this.options.includes(this.newOption)) {
                this.options.push(this.newOption);
                this.newOption = '';
            } else {
                alert('请输入新的选项，并且不要与现有选项重复！');
            }
        }
    }
};  
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

.options {
    margin-bottom: 20px;
}
.option-list {
    display: flex;
    flex-direction: column;
}
.options button,
.option-list button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #eee;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.options button:hover,
.option-list button:hover {
    background-color: #ddd;
}

.option-list button.selected {
    background-color: #4c93af;
    color: #fff;
}

.input-area {
    margin-bottom: 20px;
    text-align: center;
}

.input-area input {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 300px;
}

.input-area button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #4c93af;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.input-area button:hover {
    background-color: #4c93af;
}

@media (max-width: 600px) {
    .home-container {
        padding: 10px;
    }

    .input-area input {
        padding: 5px;
    }
}
</style>