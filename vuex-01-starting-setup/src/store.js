import { createStore } from 'vuex'

let counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter += 2
        },
        increase(state, payload) {
            state.counter += payload.value
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 2000)
        },
        increase(context, payload) {
            context.commit('increase', payload)
        }
    },
    getters: {
        // testAuth(state, getters, rootState, rootGetters) {
        //     return state.isLoggedin
        // },
        finalCounter(state) {
            return state.counter * 3
        },
        normalizedCounter(_, getters) {
            let finalCounter = getters.finalCounter
            if(finalCounter < 0) {
                return 0
            }
            if(finalCounter > 100) {
                return 100
            }
            return finalCounter
        }
    }   
}

let store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            counter: 0,
            isLoggedin: false
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedin = payload.isAuth
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedin
        }
    }
})

export default store;