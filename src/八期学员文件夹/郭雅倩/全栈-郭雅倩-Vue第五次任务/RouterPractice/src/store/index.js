import { createStore } from "vuex";
const store = createStore({
    state: () =>( {
        items: [  
            '吃饭',  
            '睡觉',  
            '打豆豆'  ] 
    }),
    mutations: {  
        addItem(state, item) {
            if (item.trim() !== '') {  
            state.items.push(item);  
    }  
        }
    },  
    
})
export default store