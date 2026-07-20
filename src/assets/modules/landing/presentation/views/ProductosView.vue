<template>
  <div>
    <NavBar />
    <div class="page-spacer">
      <ProductosSection />
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import ProductosSection from '../components/ProductosSection.vue'
import FooterBar from '../components/FooterBar.vue'
</script>

<style scoped>
.page-spacer {
  padding-top: 90px; /* deja espacio bajo el navbar fijo */
  min-height: 70vh;
}
</style>