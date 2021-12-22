import { createStore } from 'vuex'

import CoachesModule from './modules/coaches/index.js'

let store = createStore({
    modules: {
        coaches: CoachesModule
    }
})

export default store