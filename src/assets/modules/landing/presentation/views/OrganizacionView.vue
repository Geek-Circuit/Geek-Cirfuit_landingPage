<template>
  <div>
    <NavBar />
    <div class="page-spacer">
      <OrganizacionSection />
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import OrganizacionSection from '../components/OrganizacionSection.vue'
import FooterBar from '../components/FooterBar.vue'
</script>

<style scoped>
.page-spacer {
  padding-top: 90px;
  min-height: 70vh;
}
</style>