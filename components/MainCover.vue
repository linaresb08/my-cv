<template>
  <section class="main presentation-card">
    Soy main
  </section>
</template>

<script>
export default {
  name: 'MainCover',

  props: {
    indexLanguage: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss">
.presentation-card {
  align-items: center;
  display: flex;
  height: calc(100vh - 50px);
  justify-content: center;
}
</style>
