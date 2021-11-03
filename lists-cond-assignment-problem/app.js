const app = Vue.createApp({
    data() {
        return{
            tasks: [],
            userInput: '',
            showList: true
        }
    },
    methods:{
        addTask() {
            this.tasks.push(this.userInput)
        },
        toggleList() {
            this.showList = !this.showList
        }
    },
    computed: {
        changeText() {
            return this.showList ? 'Hide' : 'Show'
        }
    }
})

app.mount('#assignment')