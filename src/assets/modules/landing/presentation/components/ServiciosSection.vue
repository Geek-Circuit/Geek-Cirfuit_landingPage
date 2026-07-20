<template>
  <section id="servicios" class="section">
    <transition name="fade" mode="out-in">
      <div v-if="!seleccionado" key="grid">
        <h2 class="section-title">Nuestros Servicios</h2>
        <p class="subtitle">Transformamos tus ideas e investigaciones en prototipos funcionales</p>
        <div class="grid">
          <div class="card clickable" v-for="servicio in servicios" :key="servicio.id" @click="seleccionado = servicio">
            <div class="card-image">
              <img :src="servicio.imagen" :alt="servicio.titulo" />
            </div>
            <div class="card-body">
              <span class="icon" v-if="servicio.icono">{{ servicio.icono }}</span>
              <h3>{{ servicio.titulo }}</h3>
              <p>{{ servicio.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else key="detalle">
        <button class="back-btn" @click="seleccionado = null">← Volver a Servicios</button>
        <h2 class="section-title">{{ seleccionado.titulo }}</h2>
        <p class="subtitle">{{ seleccionado.descripcion }}</p>

        <div class="contact-card" v-if="seleccionado.encargado">
          <h3>{{ seleccionado.encargado.nombre }}</h3>
          <p class="contact-label">{{ seleccionado.encargado.rolContacto }}</p>
          <div class="contact-icons">
            <a :href="seleccionado.encargado.linkedin" target="_blank" rel="noopener" class="icon-btn linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"></path></svg>
            </a>
            <a :href="seleccionado.encargado.whatsapp" target="_blank" rel="noopener" class="icon-btn whatsapp" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.92C21.95 6.45 17.5 2 12.04 2zm5.8 14.11c-.24.68-1.4 1.33-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.58-.35.77-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z"></path></svg>
            </a>
          </div>
        </div>
        <p class="empty-msg" v-else>
          Muy pronto agregaremos el contacto del encargado de este servicio.
        </p>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { LandingService } from '../../applications/services/LandingService.js'

const service = new LandingService()
const servicios = ref(service.getServicios())
const seleccionado = ref(null)
</script>

<style scoped>
.subtitle {
  color: var(--color-text-muted);
  margin-bottom: 28px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.card {
  background: rgba(43, 76, 255, 0.12);
  border: 1px solid var(--color-secondary);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s;
}

.card.clickable {
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px);
  border-color: var(--color-accent);
}

.card-image {
  width: 100%;
  height: 220px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.card-body {
  padding: 20px;
}

.icon {
  font-size: 1.6rem;
}

.card h3 {
  color: var(--color-accent);
  margin: 8px 0;
  font-size: 1.05rem;
}

.card p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.back-btn {
  background: none;
  border: 1px solid var(--color-secondary);
  color: var(--color-text-light);
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 24px;
  font-size: 0.9rem;
  transition: background 0.2s, border-color 0.2s;
}

.back-btn:hover {
  background: rgba(43, 76, 255, 0.15);
  border-color: var(--color-accent);
}

.contact-card {
  max-width: 420px;
  background: rgba(43, 76, 255, 0.12);
  border: 1px solid var(--color-secondary);
  border-radius: 14px;
  padding: 28px;
}

.contact-card h3 {
  color: var(--color-text-light);
  font-size: 1.2rem;
  margin-bottom: 6px;
}

.contact-label {
  color: var(--color-accent);
  font-size: 0.9rem;
  margin-bottom: 18px;
}

.contact-icons {
  display: flex;
  gap: 14px;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: var(--color-text-light);
  transition: transform 0.2s, background 0.2s;
}

.icon-btn.linkedin {
  background: #0a66c2;
}

.icon-btn.whatsapp {
  background: #25d366;
}

.icon-btn:hover {
  transform: translateY(-3px);
}

.empty-msg {
  color: var(--color-text-muted);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
