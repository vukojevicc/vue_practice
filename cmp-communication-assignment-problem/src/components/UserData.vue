<template>
    <form @submit.prevent="sendUser">
        <label>Name: <input type="text" name="name" v-model="name"></label><br>
        <label>Age: <input type="number" name="age" v-model="age"></label>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: ''
        }
    },
    emits: ['send-data'],
    methods: {
        sendUser() {
            this.$emit('send-data', this.name, this.age)
        }
    }
}
</script>