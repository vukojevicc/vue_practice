function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        }
    },
    computed: {
        playerHealthBar() {
            return {
                width: `${this.playerHealth}%`
            }
        },
        monsterHealthBar() {
            return {
                width: `${this.monsterHealth}%`
            }
        },
        nthRound() {
            return this.currentRound % 3 === 0 ? false : true
        }
    },
    watch: {
        playerHealth(vrednost) {
            if(vrednost < 0){
                alert('player lost')
            }
        },
        monsterHealth(vrednost) {
            if(vrednost < 0){
                alert('monster lost')
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            let attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.attackPlayer()
        },
        attackPlayer() {
            let attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue
        },
        specialAttackMonster() {
            this.currentRound++
            let attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.attackPlayer()
        },
        healPlayer() {
            this.currentRound++
            let healValue = getRandomValue(8, 20)

            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100
            }
            else{
                this.playerHealth += healValue
            }
            this.attackPlayer()
        }
    }
})

app.mount('#game')