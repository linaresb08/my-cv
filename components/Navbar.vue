<template>
  <div class="navbar">
    <nav class="lg:container">
      Soy el nuevo navbar
      <button class="btn btn-blue" @click="changeTheme">
        Theme
        {{ modeTheme }}
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      modeTheme: 'light',
    }
  },

  methods: {
    changeTheme() {
      this.modeTheme =
        this.modeTheme === 'light'
          ? (this.modeTheme = 'dark')
          : (this.modeTheme = 'light')
      this.$emit('themeModeValue', this.modeTheme)
    },
  },
}
</script>

<style lang="scss">
.navbar {
  @apply bottom-0;
  @apply fixed;
  @apply p-2;
  @apply w-full;
}
/* Código a eliminar */
.btn {
  @apply font-bold;
  @apply py-2;
  @apply px-4;
  @apply rounded;
}
.btn-blue {
  @apply bg-blue-600;
  @apply text-gray-100;

  &:hover {
    @apply bg-blue-700;
  }
}
</style>
