<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Homepage from './components/Homepage.vue';
import Aboutus from './components/Aboutus.vue';
import Reviewrequest from './components/Reviewrequest.vue';
</script>

<template>
  <Header/>
  <div id="routing">
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-link to="/reviewrequest"></router-link>
  </div> 
  <router-View/>
  <Footer/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inspiration&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
