<template>
    <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userNameInput.value);
    },
    removeUser(user) {
      this.users = this.users.filter((member) => {
        return member !== user;
      });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}

.user-list-enter-active,
.user-list-leave-active {
    transition: all 1s ease-out;
}

.user-list-leave-active {
    position: absolute;
}

.user-list-enter-to,
.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.user-list-move {
    transition: transform .8s ease;
}
</style>