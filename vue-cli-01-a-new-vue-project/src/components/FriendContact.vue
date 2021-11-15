<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleFavourite">Toggle favourite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAdress }}</li>
    </ul>
    <button @click="$emit('delete-friend', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAdress", "isFavourite"],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAdress: {
      type: String,
      required: true
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: (value) => {
      //   return value === '1' || value === '0'
      // }
    }
  },
  emits: ['toggle-favourite', 'delete-friend'],
  // emits: {
  //   'toggle-favourite': function(id){
  //     if(id){
  //       return true
  //     }else{
  //       console.warn('id is missing!')
  //       return false
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.$emit('toggle-favourite', this.id)
    }
  },
};
</script>