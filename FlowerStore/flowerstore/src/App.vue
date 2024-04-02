<script>
import { RouterLink, RouterView } from 'vue-router'

import NavBar from '../src/components/NavBar.vue'

export default {
    components: { NavBar },
}

</script>

<template>
  <NavBar/>

  <RouterView />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  body{
    font-family: 'Montserrat';
  }
</style>