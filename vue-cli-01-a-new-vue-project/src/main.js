import { createApp } from 'vue';
import App from './App.vue'
import friendContact from './components/FriendContact.vue'
import newFriend from './components/newFriend.vue'

const app = createApp(App);

app.component('friend-contact', friendContact)
app.component('new-friend', newFriend)

app.mount('#app')
