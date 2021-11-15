<template>
    <form @submit.prevent="addContact" style="margin: auto; width: min-content">
        <label>Name: <input type="text" v-model="enteredName"></label>
        <label>Phone number: <input type="tel" v-model="enteredPhone"></label>
        <label>Email adress: <input type="text" v-model="enteredEmail"></label>
        <button type="submit" style="margin-top: 20px;">Send</button>
    </form>
</template>

<script>
    export default {
        emits: ['add-contact'],
        data() {
            return {
                enteredName: '',
                enteredPhone: '',
                enteredEmail: ''
            }
        },
        methods: {
            addContact() {
                this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
            }
        }
    }
</script>