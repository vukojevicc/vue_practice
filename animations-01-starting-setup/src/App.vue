<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>  

<script>
// import UsersList from './components/UsersList.vue'

export default {
  // components: {
  //   UsersList
  // },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(element) {
      console.log('beforeEnter()');
      console.log(element);
      element.style.opacity = 0;
    },
    enterCanceled() {
      clearInterval(this.enterInterval);
    },
    leaveCanceled() {
      clearInterval(this.leaveInterval);
    },
    enter(element, done) {
      console.log('enter()');
      console.log(element);
      let round = 1;

      this.enterInterval = setInterval(() => {
        element.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(element) {
      console.log('afterEnter()');
      console.log(element);
    },
    beforeLeave(element) {
      console.log('beforeLeave()');
      console.log(element);
    },
    leave(element, done) {
      console.log('leave()');
      console.log(element);

      let round = 1;

      this.leaveInterval = setInterval(() => {
        element.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(element) {
      console.log('afterLeave()');
      console.log(element);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform .3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-550px); */
  animation: slide-scale 0.3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>