<template>
  <p>{{ count }}</p>
  <div>
    <button @click="decrement">decrement</button>
    <button @click="increment">increment</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    ...mapActions(['decrement', 'increment']),
  },
};
</script>
<style lang="css" scoped>
p {
  font-size: 2em;
  text-align: center;
}
div {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
