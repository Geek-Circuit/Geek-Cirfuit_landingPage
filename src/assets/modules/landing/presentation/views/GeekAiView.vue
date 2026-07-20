<template>
  <div>
    <NavBar />
    <div class="page-spacer">
      <GeekAiSection />
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import GeekAiSection from '../components/GeekAiSection.vue'
import FooterBar from '../components/FooterBar.vue'
</script>

<style scoped>
.page-spacer {
  padding-top: 90px;
  min-height: 70vh;
}
</style>