import { createStore } from 'vuex'

import CoachesModule from './modules/coaches/index.js'
import RequestsModule from './modules/requests/index.js'

let store = createStore({
    modules: {
        coaches: CoachesModule,
        requests: RequestsModule
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
})

export default store