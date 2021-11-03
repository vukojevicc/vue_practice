const app = Vue.createApp({
    data() {
        return {
            playerHelath: 100,
            monsterHealth: 100
        }
    },
    methods: {
        attackMonster() {
            let attackValue = Math.floor(Math.random() * 7) + 5
            this.monsterHealth -= attackValue
        }
    }
})

app.mount('#game')