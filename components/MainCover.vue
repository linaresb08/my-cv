<template>
  <section class="main presentation-card">
    <div class="card">
      <header class="title">Betzabeth Linares</header>
      <p class="subtitle">{{ subtitleContent[indexLanguage] }}</p>
      <div>
        Info contacto
      </div>
    </div>
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
    return {
      subtitleContent: ['Desarrolladora Front-End', 'Front-End Developer'],
    }
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

  .card {
    .title {
      @apply text-3xl;

      @media screen and (min-width: 576px) {
        @apply text-5xl;
      }
    }
    .subtitle {
      text-align: center;
      text-transform: uppercase;

      @media screen and (min-width: 576px) {
        @apply text-xl;
      }
    }
  }
}
</style>
