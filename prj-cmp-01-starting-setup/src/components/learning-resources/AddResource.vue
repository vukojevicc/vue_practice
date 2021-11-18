<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" ref="linkInput" />
      </div>
      <div>
        <base-button>Add Resource</base-button>
      </div>
    </form>
  </base-card>
  <base-dialog v-if="inputIsInvalid" title="Invalid input" @close="confirmError">
    <template v-slot:default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>Please check all inputs and make sure you entered at least few characters in all input fields</p>
    </template>
    <template v-slot:actions>
        <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
import BaseDialog from './UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
  data() {
      return {
          inputIsInvalid: false
      }
  },
  methods: {
    submitData() {
      let enteredTitle = this.$refs.titleInput.value;
      let enteredDescription = this.$refs.descriptionInput.value;
      let enteredUrl = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredUrl.trim() === ''
      ) {
        this.inputIsInvalid = true
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },
    confirmError() {
        this.inputIsInvalid = false
    }
  },
  inject: ['addResource'],
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>