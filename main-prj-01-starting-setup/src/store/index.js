import { createStore } from 'vuex'

import CoachesModule from './modules/coaches/index.js'
import RequestsModule from './modules/requests/index.js'
import AuthModule from './modules/auth/index.js'

let store = createStore({
    modules: {
        coaches: CoachesModule,
        requests: RequestsModule,
        auth: AuthModule
    }
})

export default store