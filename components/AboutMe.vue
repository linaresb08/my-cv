<template>
  <section id="me">
    <div class="container p-5">
      <img src="" alt="Betzabeth Linares" />
      <header>{{ content[indexLanguage].title }}</header>
      <p>{{ content[indexLanguage].description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',

  props: {
    indexLanguage: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      content: [
        {
          title: 'Sobre mí',
          description: `¡Hola! Soy Betzabeth Linares, una Ingeniero de Computación
            enfocada en el desarrollo web (Front-End); amante del diseño, las buenas
            prácticas, entusiasta del aprendizaje de nuevas tecnologías y los retos.`,
        },
        {
          title: 'About me',
          description: `¡Hi! I'm Betzabeth Linares, a Computer Engineer...
            enfocada en el desarrollo web (Front-End); amante del diseño, las buenas
            prácticas, entusiasta del aprendizaje de nuevas tecnologías y los retos.`,
        },
      ],
    }
  },

  methods: {},
}
</script>

<style lang="scss"></style>
