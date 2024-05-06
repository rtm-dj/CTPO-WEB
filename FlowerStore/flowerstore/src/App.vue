<script>
import { RouterLink, RouterView } from 'vue-router'

import NavBar from '../src/components/NavBar.vue' // подключаем навбдар
import Footer from '../src/components/Footer.vue' // подключаем футер

export default {
    components: { NavBar, Footer }, // указывает все компоненты из импорта для их использования
}

</script>

<template>
  <NavBar/>
  <!-- сверху подключаем навбар с менюшкой -->

  <RouterView />
  <!-- роутер для показа страниц -->

  <Footer/>
  <!-- футер внизу страницы -->
  
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  body{
    font-family: 'Montserrat';
    margin: 0;
    padding: 0;
  }
</style>