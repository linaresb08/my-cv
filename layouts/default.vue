<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      themeName: 'light',
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: `font-sans mode-${this.themeName}`,
      },
    }
  },
}
</script>

<style>
.mode-light {
  @apply bg-gray-100;
  @apply text-gray-900;
}
.mode-dark {
  @apply bg-gray-900;
  @apply text-gray-100;
}
.mode-light,
.mode-dark {
  transition: all 0.5s ease;
}
</style>
