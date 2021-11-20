import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'

const app = createApp(App)
let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/teams',
            component: TeamsList
        },
        {
            path: '/users',
            component: UsersList
        },
        {
            path: '/teams/:teamId',
            component: TeamMembers
        }
    ],
    linkActiveClass: 'active'
})

app.use(router)
app.mount('#app');