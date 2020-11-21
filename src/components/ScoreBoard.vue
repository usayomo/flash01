<template>
  <div class="text-h1">{{ getScore }}</div>
</template>

<script>
export default {
  computed: {
    getScore() {
      return this.$store.state.game.score;
    }
  }
};
</script>
