<template>
  <nav class="navbar">
    <img src="/logo.jpeg" alt="Geek Circuits" class="logo" />

    <button class="hamburger" :class="{ active: menuAbierto }" @click="menuAbierto = !menuAbierto" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" :class="{ open: menuAbierto }">
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
import { ref } from 'vue'

const menuAbierto = ref(false)

function irA(id) {
  menuAbierto.value = false
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

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--color-text-light);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

:global(.section) {
  scroll-margin-top: 90px;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 74px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    gap: 0;
    background: rgba(10, 15, 44, 0.97);
    backdrop-filter: blur(8px);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-links.open {
    max-height: 500px;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
  }

  .nav-links a {
    display: block;
    padding: 16px;
  }
}
</style>
