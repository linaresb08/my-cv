<template>
  <div>
    <Navbar :nav-language="language" />
    <MainCover :index-language="language" />
    <AboutMe :index-language="language" />
    <Knowledge :index-language="language" />
    <Skills :index-language="language" />
    <Education :index-language="language" />
    <Experience :index-language="language" />
    <Contact :index-language="language" />
    <section class="container">
      <div id="prueba" class="grid grid-cols-3 gap-8">
        <div class="col-span-1 bg-white px-4 pb-12 rounded">
          <h3 class="text-xl text-blue-600 mb-4">My Blog</h3>
          <ul>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-span-2">
          <div class="mt-12">
            <h1 class="text-5xl pb-2">Some title</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum
            </p>
          </div>
        </div>
      </div>
      <div id="prueba2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus
          id, officiis deserunt aut iure iusto veritatis, atque laboriosam
          numquam earum explicabo nisi omnis minima. Porro veniam dolor odio ab
          rem doloremque minus saepe? Eligendi aperiam, culpa quod hic ut
          repellendus voluptatem consequuntur veritatis aspernatur, laboriosam
          quo, voluptatum iste accusamus commodi necessitatibus quasi laudantium
          maiores dolorem debitis corrupti fuga veniam molestias atque
          doloremque. Quod laudantium ipsum libero veritatis! Soluta sint,
          dolores quo neque dolorum doloremque libero quia ducimus, magni at,
          totam esse nulla. Totam eveniet, dolore repellat id molestiae nihil
          obcaecati? Ipsa illum temporibus et inventore minus qui magnam odit.
          Assumenda minus quas ducimus vitae ipsam enim eum totam ex, tempora a
          veritatis nostrum sed est repellat laborum rerum id laudantium placeat
          sequi repellendus? Repellat nesciunt architecto unde ipsam sint, et
          dolorem minima facere quis odio quo voluptatem repudiandae molestiae
          asperiores magnam ex? Nobis ab suscipit voluptates tempora eos
          quisquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Aperiam distinctio exercitationem voluptas neque minus nostrum iure
          suscipit. Officia obcaecati unde quo vitae magni eligendi eveniet
          harum nihil dolore nemo molestias vel voluptas, laudantium adipisci
          nulla iste aperiam, incidunt excepturi vero reiciendis perferendis,
          commodi totam? Ipsa quae voluptatem, hic maxime quidem deleniti
          quaerat distinctio! Laborum ratione eveniet, sed facere reiciendis
          quasi consectetur at accusamus quidem accusantium pariatur iste
          expedita neque ullam voluptates a sit deserunt. Inventore, pariatur
          facilis consequuntur nam esse adipisci veniam cupiditate odio, est
          dolorem ipsa, cum velit nisi veritatis reprehenderit voluptas nemo
          eligendi fugiat molestias. Rem doloremque suscipit nisi sunt atque
          eveniet adipisci at voluptatum quidem quas labore maiores error ad,
          tempore mollitia. Itaque voluptatibus delectus voluptates! Nobis
          dolorum nihil ad repudiandae recusandae et explicabo exercitationem
          autrepellendus illo id, iusto sapiente alias dolore quisquam hic quo
          commodi rem libero, fugiat deserunt tenetur quaerat nesciunt quis?
          Fuga,voluptatem.
        </p>
      </div>
      <div id="prueba3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus
          id, officiis deserunt aut iure iusto veritatis, atque laboriosam
          numquam earum explicabo nisi omnis minima. Porro veniam dolor odio ab
          rem doloremque minus saepe? Eligendi aperiam, culpa quod hic ut
          repellendus voluptatem consequuntur veritatis aspernatur, laboriosam
          quo, voluptatum iste accusamus commodi necessitatibus quasi laudantium
          maiores dolorem debitis corrupti fuga veniam molestias atque
          doloremque. Quod laudantium ipsum libero veritatis! Soluta sint,
          dolores quo neque dolorum doloremque libero quia ducimus, magni at,
          totam esse nulla. Totam eveniet, dolore repellat id molestiae nihil
          obcaecati? Ipsa illum temporibus et inventore minus qui magnam odit.
          Assumenda minus quas ducimus vitae ipsam enim eum totam ex, tempora a
          veritatis nostrum sed est repellat laborum rerum id laudantium placeat
          sequi repellendus? Repellat nesciunt architecto unde ipsam sint, et
          dolorem minima facere quis odio quo voluptatem repudiandae molestiae
          asperiores magnam ex? Nobis ab suscipit voluptates tempora eos
          quisquam!
        </p>
      </div>
      <div id="prueba">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus
          id, officiis deserunt aut iure iusto veritatis, atque laboriosam
          numquam earum explicabo nisi omnis minima. Porro veniam dolor odio ab
          rem doloremque minus saepe? Eligendi aperiam, culpa quod hic ut
          repellendus voluptatem consequuntur veritatis aspernatur, laboriosam
          quo, voluptatum iste accusamus commodi necessitatibus quasi laudantium
          maiores dolorem debitis corrupti fuga veniam molestias atque
          doloremque. Quod laudantium ipsum libero veritatis! Soluta sint,
          dolores quo neque dolorum doloremque libero quia ducimus, magni at,
          totam esse nulla. Totam eveniet, dolore repellat id molestiae nihil
          obcaecati? Ipsa illum temporibus et inventore minus qui magnam odit.
          Assumenda minus quas ducimus vitae ipsam enim eum totam ex, tempora a
          veritatis nostrum sed est repellat laborum rerum id laudantium placeat
          sequi repellendus? Repellat nesciunt architecto unde ipsam sint, et
          dolorem minima facere quis odio quo voluptatem repudiandae molestiae
          asperiores magnam ex? Nobis ab suscipit voluptates tempora eos
          quisquam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Aperiam distinctio exercitationem voluptas neque minus nostrum iure
          suscipit. Officia obcaecati unde quo vitae magni eligendi eveniet
          harum nihil dolore nemo molestias vel voluptas, laudantium adipisci
          nulla iste aperiam, incidunt excepturi vero reiciendis perferendis,
          commodi totam? Ipsa quae voluptatem, hic maxime quidem deleniti
          quaerat distinctio! Laborum ratione eveniet, sed facere reiciendis
          quasi consectetur at accusamus quidem accusantium pariatur iste
          expedita neque ullam voluptates a sit deserunt. Inventore, pariatur
          facilis consequuntur nam esse adipisci veniam cupiditate odio, est
          dolorem ipsa, cum velit nisi veritatis reprehenderit voluptas nemo
          eligendi fugiat molestias. Rem doloremque suscipit nisi sunt atque
          eveniet adipisci at voluptatum quidem quas labore maiores error ad,
          tempore mollitia. Itaque voluptatibus delectus voluptates! Nobis
          dolorum nihil ad repudiandae recusandae et explicabo exercitationem
          aut repellendus illo id, iusto sapiente alias dolore quisquam hic quo
          commodi rem libero, fugiat deserunt tenetur quaerat nesciunt quis?
          Fuga, voluptatem.
        </p>
      </div>
    </section>
    <Footer @changeLanguage="setLanguage" @themeModeValue="setThemeMode" />
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Knowledge from '@/components/Knowledge'
import MainCover from '@/components/MainCover'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
export default {
  name: 'Index',
  components: {
    AboutMe,
    Contact,
    Education,
    Experience,
    Footer,
    Knowledge,
    MainCover,
    Navbar,
    Skills,
  },
  data() {
    return {
      modeName: true,
      language: 0,
      pageHeaders: [
        {
          lang: 'es', // Idioma
          title: `Desarrolladora Front-End | Mi curriculum vitae`, // Título
          content: `Bienvenidos al curriculum vitae de Betzabeth Linares`, // Descripción
        },
        {
          lang: 'en', // Language
          title: `Front-End Developer | My curriculum vitae`, // Title
          content: `Welcome to Betzabeth Linares' curriculum vitae`, // Description
        },
      ],
    }
  },
  methods: {
    setLanguage(value) {
      this.language = value
    },
    setThemeMode(value) {
      this.modeName = value
    },
  },
  head() {
    return {
      title: `Betzabeth Linares |
        ${this.pageHeaders[this.language].title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pageHeaders[this.language].content}`,
        },
      ],
      htmlAttrs: {
        lang: `${this.pageHeaders[this.language].lang}`,
      },
      bodyAttrs: {
        class: `${this.modeName ? 'mode-light' : 'mode-dark'}`,
      },
    }
  },
}
</script>
