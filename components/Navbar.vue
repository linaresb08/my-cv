<template>
  <div class="navbar">
    <nav class="lg:container nav">
      <nuxt-link to="/" tag="div" class="nav-brand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="none"
          class="BL-logo"
          @mouseleave="beRectangle"
          @mouseover="beRounded"
        >
          <rect
            id="BL-rectangle"
            width="39"
            height="39"
            x="1.5"
            y="1.5"
            stroke="#4299E1"
            stroke-linecap="round"
            stroke-linejoin="round"
            rx="4.5"
          />
          <path
            class="BL-letters"
            fill="#4299E1"
            d="M10.733 11.56h4.8c1.84 0 3.249.376 4.225 1.128.976.752 1.463 2.04 1.463 3.864 0 1.184-.24 2.112-.72 2.784-.48.656-1.175 1.056-2.088 1.2 2.24.432 3.36 2.032 3.36 4.8 0 1.872-.456 3.288-1.367 4.248-.912.944-2.264 1.416-4.056 1.416h-5.617V11.56zm4.752 7.944c1.024 0 1.72-.224 2.088-.672.384-.464.576-1.208.576-2.232 0-.992-.248-1.664-.744-2.016-.48-.368-1.288-.552-2.424-.552h-.72v5.472h1.225zm.145 9c1.04 0 1.76-.248 2.16-.744.4-.496.6-1.312.6-2.448 0-1.168-.224-2.016-.672-2.544-.433-.544-1.169-.816-2.209-.816h-1.248v6.552h1.369zm8.463-16.944h3.528v17.016h4.728V31h-8.256V11.56z"
          />
        </svg>
      </nuxt-link>
      <button
        :class="['btn btn-menu', { 'open-menu': showMobileMenu }]"
        @click="showMobileMenu = !showMobileMenu"
      >
        <svg
          class="fill-current"
          height="20"
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path class="line-1" d="M0 3h20v2H0V3zm0" />
          <path class="line-2" d="M0 9h20v2H0V9zm0" />
          <path class="line-3" d="M0 15h20v2H0v-2z" />
        </svg>
      </button>
      <div class="nav-links">
        <a
          v-for="link in navLinks[navLanguage]"
          :key="link.to"
          :href="`#${link.to}`"
          class="nav-link"
        >
          {{ link.name }}
        </a>
        <a href="#prueba" class="nav-link active">
          Section 1
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import { navbarLinks } from '~/plugins/utils/pageLanguage.js'
export default {
  name: 'Navbar',

  props: {
    navLanguage: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      navLinks: navbarLinks(),
      showMobileMenu: false,
    }
  },

  methods: {
    beRectangle() {
      document.getElementById('BL-rectangle').setAttribute('rx', '4.5')
    },
    beRounded() {
      document.getElementById('BL-rectangle').setAttribute('rx', '50')
    },
  },
}
</script>

<style lang="scss">
.navbar {
  @apply bottom-0;
  @apply fixed;
  @apply px-2;
  @apply w-full;
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
  z-index: 1;

  .nav-brand {
    cursor: pointer;
  }

  .nav {
    @apply flex;
    @apply items-center;
    @apply justify-between;

    @media screen and (max-width: 1023px) {
      height: 50px;
      position: relative;
    }
  }
  .btn-menu {
    align-items: center;
    border-color: theme('colors.blue.500');
    border-width: 1px;
    color: theme('colors.blue.500');
    display: flex;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  .btn-menu.open-menu svg {
    [class*='line'] {
      transition: all 0.5s ease;
    }

    .line-1 {
      transform-origin: left;
      transform: translate(-2px, -2px) rotate(40deg);
    }
    .line-2 {
      opacity: 0;
    }
    .line-3 {
      transform-origin: left;
      transform: translate(-2px, 2px) rotate(-40deg);
    }
  }
  .btn-menu.open-menu + .nav-links {
    @media screen and (max-width: 1023px) {
      transform: translateY(0);
    }
  }
  .nav-links {
    display: flex;
    @media screen and (max-width: 1023px) {
      border-radius: 5px 5px 0 0;
      bottom: 50px;
      flex-direction: column-reverse;
      position: absolute;
      right: 0;
      transform: translateY(350px);
      transition: transform 0.5s ease;
      z-index: -1;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }

    .nav-link {
      align-items: center;
      border-bottom: 2px solid transparent;
      border-top: 2px solid transparent;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      cursor: pointer;
      display: flex;
      height: 50px;
      padding: 0.5rem 1rem;
      transition: border-top 0.5s ease;
      white-space: nowrap;
    }
    .nav-link.active {
      border-top-color: theme('colors.blue.500');
      color: theme('colors.blue.500');
    }
  }

  .BL-logo {
    rect,
    path {
      transition: all 0.5s ease;
    }
  }
}
</style>
