import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            choice:["吃饭","睡觉","打豆豆"]
        }
    },
    mutations: {
        
    }
})

export default store