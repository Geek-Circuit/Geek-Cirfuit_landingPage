<template>
  <section id="convenios" class="section">
    <h2 class="section-title">Nuestros Convenios</h2>
    <p class="subtitle">Impulsamos la innovación y el talento en las aulas</p>
    <div class="grid">
      <div class="card" v-for="convenio in convenios" :key="convenio.id">
        <div class="card-image">
          <img :src="convenio.imagen" :alt="convenio.titulo" />
        </div>
        <div class="card-body">
          <h3>{{ convenio.titulo }}</h3>
          <p>{{ convenio.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { LandingService } from '../../applications/services/LandingService.js'

const service = new LandingService()
const convenios = ref(service.getConvenios())
</script>

<style scoped>
.subtitle {
  color: var(--color-text-muted);
  margin-bottom: 28px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 420px));
  justify-content: center;
  gap: 24px;
}

.card {
  background: rgba(75, 47, 203, 0.15);
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 220px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
}

.card-image img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.card-body {
  padding: 20px;
}

.card h3 {
  color: var(--color-accent);
  margin-bottom: 10px;
}

.card p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>