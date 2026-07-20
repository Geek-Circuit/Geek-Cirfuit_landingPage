<template>
  <section id="productos" class="section">
    <h2 class="section-title">Nuestros Productos</h2>
    <p class="subtitle">Encuentra el hardware exacto para tus laboratorios y prototipos</p>
    <div class="grid">
      <div class="card" v-for="producto in productos" :key="producto.id">
        <div class="card-image">
          <img :src="producto.imagen" :alt="producto.nombre" />
        </div>
        <div class="card-body">
          <h3>{{ producto.nombre }}</h3>
          <p>{{ producto.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { LandingService } from '../../applications/services/LandingService.js'

const service = new LandingService()
const productos = ref(service.getProductos())
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
  background: rgba(75, 47, 203, 0.15);
  border: 1px solid var(--color-primary);
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

.card h3 {
  color: var(--color-accent);
  margin-bottom: 8px;
  font-size: 1.05rem;
}

.card p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>