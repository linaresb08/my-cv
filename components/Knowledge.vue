<template>
  <section id="knowledge">
    <div class="container p-5">
      <header>{{ content[indexLanguage].title }}</header>
      <ul>
        <li v-for="item in content[indexLanguage].description" :key="item">
          {{ item }}
        </li>
      </ul>
      <span class="git-color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 383 383"
          width="45"
          height="45"
        >
          <path
            d="M185.5.9c-6 1.5-9.3 4.3-27.5 22.5L139.5 42l21.8 21.8 21.8 21.8 4.9-1c18.6-3.8 36.8 14.7 33.3 33.9l-.9 5.4 20.3 20.3 20.3 20.3h9.8c8.9 0 10.1.2 15.1 3s10.4 8.3 13 13.2c2.6 5 3.3 13 1.7 19.4-5.4 20.9-28.2 29.4-45.9 17.2-5.4-3.7-9.5-10.1-11.3-17.6-1.4-5.6-1.4-7-.2-12l1.5-5.6-19.4-19.3-19.3-19.3V245.8l6.3 6.4c5 5 6.7 7.5 8.1 12.2 3.3 10.6.6 21.6-7.4 29.6-5.9 5.9-11.9 8.4-20.5 8.4-8.9.1-16.6-3.4-22.4-10-11.7-13.3-8.7-34.5 6.4-44l4.5-2.9V141.3l-4.8-3c-5.3-3.3-10.6-10.5-12.3-16.7-1.1-4-.8-14.7.5-17.6.4-1.1-5.8-7.9-20.9-23L122 59.5 63.4 118C28.7 152.7 4 178.1 2.8 180.5c-3.1 5.7-3 15.5 0 21.5 3.2 6.2 172.1 174.9 178.4 178.1 5 2.6 13.2 3 19.3 1 3.3-1.1 19.5-16.8 90.8-88 63.3-63.2 87.3-87.8 88.9-91.1 3-6.1 2.9-14.9-.1-21-3.2-6.3-171.7-174.9-177.9-178C197.4.6 190-.3 185.5.9z"
            fill="currentColor"
          />
        </svg>
      </span>
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

<style lang="scss">
.git-color {
  color: #f05033;
}
</style>
