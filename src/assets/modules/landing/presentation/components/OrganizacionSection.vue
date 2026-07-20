<template>
  <section id="organizacion" class="section">
    <h2 class="section-title">Nuestra Organización</h2>
    <p class="subtitle">Detrás de Geek Circuits hay un equipo de futuros ingenieros apasionados por la tecnología</p>
    <div class="grid">
      <div class="member-card" v-for="miembro in miembros" :key="miembro.id">
        <h3>{{ miembro.nombre }}</h3>
        <p>{{ miembro.rol }}</p>
        <!-- REEMPLAZAR  los links  el '#' de cada miembro en LandingRepository.js -->
        <a :href="miembro.link" class="member-link" target="_blank" rel="noopener">Ver perfil</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { LandingService } from '../../applications/services/LandingService.js'

const service = new LandingService()
const miembros = ref(service.getMiembros())

function getInitials(nombre) {
  return nombre
      .split(/[\s,]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(p => p[0])
      .join('')
      .toUpperCase()
}
</script>

<style scoped>
.subtitle {
  color: var(--color-text-muted);
  margin-bottom: 28px;
  max-width: 700px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.member-card {
  background: rgba(0, 230, 118, 0.06);
  border: 1px solid var(--color-accent);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}

.avatar {
  width: 60px;
  height: 60px;
  margin: 0 auto 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
  color: var(--color-bg-dark);
}

.member-card h3 {
  color: var(--color-text-light);
  font-size: 1rem;
  margin-bottom: 6px;
}

.member-card p {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  margin-bottom: 14px;
}

.member-link {
  color: var(--color-accent);
  text-decoration: none;
  font-size: 0.85rem;
  border: 1px solid var(--color-accent);
  padding: 6px 14px;
  border-radius: 20px;
  transition: background 0.2s, color 0.2s;
}

.member-link:hover {
  background: var(--color-accent);
  color: var(--color-bg-dark);
}
</style>