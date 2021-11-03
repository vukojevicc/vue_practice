function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        playerHealthBar() {
            if(this.playerHealth < 0){
                return {
                    width: '0'
                }
            }
                return { width: `${this.playerHealth}%` }
        },
        monsterHealthBar() {
            if(this.monsterHealth < 0){
                return {
                    width: '0'
                }
            }
                return { width: `${this.monsterHealth}%` }    
        },
        nthRound() {
            return this.currentRound % 3 === 0 ? false : true
        }
    },
    watch: {
        playerHealth(vrednost) {
            if(vrednost <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw'
            }
            else if(vrednost <= 0){
                this.winner = 'monster'
            }
        },
        monsterHealth(vrednost) {
            if(vrednost <= 0 && this.playerHealth <= 0){
                this.winner = 'draw'
            }
            else if(vrednost <= 0){
                this.winner = 'player'
            }
        }
    },
    methods: {
        newGame() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.currentRound = 0,
            this.winner = null,
            this.logMessages = []
        },
        surrender() {
            this.winner = 'monster'
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        },
        attackMonster() {
            this.currentRound++
            let attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.addLogMessage('player', 'attack', attackValue)
            this.attackPlayer()
        },
        attackPlayer() {
            let attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue
            this.addLogMessage('monster', 'attack', attackValue)
        },
        specialAttackMonster() {
            this.currentRound++
            let attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.attackPlayer()
            this.addLogMessage('player', 'attack', attackValue)
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
            this.addLogMessage('player', 'heal', healValue)
        }
    }
})

app.mount('#game')