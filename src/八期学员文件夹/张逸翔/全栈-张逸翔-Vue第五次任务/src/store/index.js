
import { createStore } from "vuex";

const store = createStore({
    state: () => ({
        inputValue: '',
        data: ['美羊羊', '慢羊羊', '喜羊羊']
    }),
    mutations: {
        addUserToStore(state, user) {
            state.data.push(user)
        },
        setInputValue(state, value) {
            state.inputValue = value;
        }
    },
}
)
export default store
