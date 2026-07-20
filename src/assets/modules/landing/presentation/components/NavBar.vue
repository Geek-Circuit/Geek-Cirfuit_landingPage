<template>
  <nav class="navbar">
    <img src="/logo.jpeg" alt="Geek Circuits" class="logo" />
    <ul class="nav-links">
      <li><a href="#nosotros" @click.prevent="irA('nosotros')">Nosotros</a></li>
      <li><a href="#productos" @click.prevent="irA('productos')">Productos</a></li>
      <li><a href="#servicios" @click.prevent="irA('servicios')">Servicios</a></li>
      <li><a href="#organizacion" @click.prevent="irA('organizacion')">Organización</a></li>
      <li><a href="#convenios" @click.prevent="irA('convenios')">Convenios</a></li>
      <li><a href="#geek-ai" @click.prevent="irA('geek-ai')">Geek AI</a></li>
      <li><a href="#contacto" @click.prevent="irA('contacto')">Contacto</a></li>
    </ul>
  </nav>
</template>

<script setup>
function irA(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8%;
  background: rgba(10, 15, 44, 0.85);
  backdrop-filter: blur(8px);
  z-index: 100;
}

.logo {
  height: 50px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 28px;
}

.nav-links a {
  color: var(--color-text-light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--color-accent);
}
:global(.section) {
  scroll-margin-top: 90px;
}
</style>