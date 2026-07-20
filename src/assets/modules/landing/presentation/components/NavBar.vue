<template>
  <nav class="navbar">
    <router-link to="/" class="logo-link" @click="menuAbierto = false">
      <img src="/logo.jpeg" alt="Geek Circuits" class="logo" />
      <span class="logo-text">GEEK CIRCUITS</span>
    </router-link>

    <button class="hamburger" :class="{ active: menuAbierto }" @click="menuAbierto = !menuAbierto" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" :class="{ open: menuAbierto }">
      <li><router-link to="/" @click="menuAbierto = false">Nosotros</router-link></li>
      <li><router-link to="/productos" @click="menuAbierto = false">Productos</router-link></li>
      <li><router-link to="/servicios" @click="menuAbierto = false">Servicios</router-link></li>
      <li><router-link to="/organizacion" @click="menuAbierto = false">Organización</router-link></li>
      <li><router-link to="/convenios" @click="menuAbierto = false">Convenios</router-link></li>
      <li><router-link to="/geek-ai" @click="menuAbierto = false">Geek AI</router-link></li>
      <li><router-link to="/contacto" @click="menuAbierto = false">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuAbierto = ref(false)
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

.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo {
  height: 50px;
}

.logo-text {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  white-space: nowrap;
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

.nav-links a:hover,
.nav-links a.router-link-exact-active {
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

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .logo-text {
    font-size: 1rem;
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
