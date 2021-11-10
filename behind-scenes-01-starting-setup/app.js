const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText
      // console.dir(this.$refs.userText)
    },
  },
  beforeCreate() {
    console.log('beforeCreate()')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  },
  beforeUnmount() {
    console.log('beforeUnmount()')
  },
  unmounted() {
    console.log('unmounted()')
  }
});

app.mount('#app')
setTimeout(() => {
  app.unmount()
}, 3000)

const app2 = Vue.createApp({
    template: `
    <p>{{ favouriteMeal }}</p>
    `,
    data() {
      return{
        favouriteMeal: 'burger'
      }
    }
})

app2.mount('#app2')

const data = {
  message: 'hello!',
  longMessage: 'Hello world!'
}

// const handler = {
//   set(target, key, value){
//     if(key === 'message'){
//       target.longMessage = value
//     }
//     target.message = value
//     console.log(target)
//   }
// }

// let proxy = new Proxy(data, handler)

// // Kada ovo svojstvo pokusa da se promeni onda se ispaljuje set funkcija hendlera koja obavlja dalje posao, Tako vue funckionise.
// proxy.message = 'isto!'

// console.log(proxy.longMessage)