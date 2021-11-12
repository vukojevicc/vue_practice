<template>
  <section>
    <header><h1>My friends</h1></header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        v-bind:key="friend.id"
        v-bind:name="friend.name"
        v-bind:id="friend.id"
        v-bind:phone-number="friend.phone"
        v-bind:email-adress="friend.email"
        v-bind:is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import friendContact from "./components/FriendContact.vue";
export default {
  components: { friendContact },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "3462356356",
          email: "manuel@localhost.com",
          isFavourite: false
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "56768678678",
          email: "Julie@localhost.com",
          isFavourite: true
        },
      ],
    };
  },
  methods: {
    toggleFavouriteStatus(friendId) {
      let identifiedFriend = this.friends.find(friend => friendId === friend.id)
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>