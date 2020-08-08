<template>
  <div>
    <Navbar @themeModeValue="themeModeValue" />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      modeName: 'light',
    }
  },
  methods: {
    themeModeValue(value) {
      this.modeName = value
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: `${this.modeName === 'light' ? 'mode-light' : 'mode-dark'}`,
      },
    }
  },
}
</script>

<style lang="scss"></style>
