<template>
  <h3>{{ result }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    result() {
      return this.$store.getters['numbers/normalizedCounter']
    }
  },
};
</script>