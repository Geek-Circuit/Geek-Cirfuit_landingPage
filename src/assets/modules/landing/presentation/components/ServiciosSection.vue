<template>
  <section id="servicios" class="section">
    <h2 class="section-title">Nuestros Servicios</h2>
    <p class="subtitle">Transformamos tus ideas e investigaciones en prototipos funcionales</p>
    <div class="grid">
      <div class="card" v-for="servicio in servicios" :key="servicio.id">
        <div class="card-image">
          <img :src="servicio.imagen" :alt="servicio.titulo" />
        </div>
        <div class="card-body">
          <span class="icon">{{ servicio.icono }}</span>
          <h3>{{ servicio.titulo }}</h3>
          <p>{{ servicio.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { LandingService } from '../../applications/services/LandingService.js'

const service = new LandingService()
const servicios = ref(service.getServicios())
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
</style>