<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal"/>
    <button @click="setGoal">Set Goal</button>

    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
        <p>somethin wrong man</p>
        <button @click="confirmError">Okay</button>
    </error-alert>
    </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            let enteredValue = this.$refs.goal.value
            if(enteredValue === ''){
                this.inputIsInvalid = true
            }
        },
        confirmError() {
            this.inputIsInvalid = false
        }
    }
}
</script>