<template>
  <section id="knowledge">
    <div class="container p-5">
      <header>{{ content[indexLanguage].title }}</header>
      <ul>
        <li v-for="item in content[indexLanguage].description" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Knowledge',

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
          title: 'Conocimientos',
          description: [
            'Desarrollo Web',
            'Resposive Web Design (RWD)',
            'Scrum',
            'Git',
          ],
        },
        {
          title: 'Knowledge',
          description: [
            'Web Development',
            'Resposive Web Design (RWD)',
            'Scrum',
            'Git',
          ],
        },
      ],
    }
  },

  methods: {},
}
</script>

<style lang="scss"></style>
