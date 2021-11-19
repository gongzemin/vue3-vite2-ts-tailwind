import {ActionContext} from 'vuex'
interface State{
    name:String
}

export default {
    state: () => ({
        name: 'Anderson'
    }),
    getters: {},
    mutations: {
        SET_NAME(state:State, payload: any) {
            state.name = payload
        }
    },
    actions: {
        saveName({ commit }: ActionContext<State, any>, data: any) {
            commit('SET_NAME', data)
        }
    }
}