<template>
  <footer class="footer">
    <p> {{ year }} Geek Circuits, todos los derechos reservados</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 24px;
  color: var(--color-text-muted);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>