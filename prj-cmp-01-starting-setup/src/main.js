import { createApp } from 'vue';

import App from './App.vue'
import BaseCard from './components/learning-resources/UI/BaseCard.vue'
import BaseButton from './components/learning-resources/UI/BaseButton.vue'
import BaseDialog from './components/learning-resources/UI/BaseDialog.vue'

let app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.mount('#app')