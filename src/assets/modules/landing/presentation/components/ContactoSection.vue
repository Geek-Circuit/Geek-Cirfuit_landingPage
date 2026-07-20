<template>
  <section id="contacto" class="section">
    <h2 class="section-title">Contáctanos</h2>
    <p class="subtitle">¿Tienes alguna duda con tu circuito o necesitas cotizar componentes? ¡Escríbenos!</p>

    <div class="contact-grid">
      <div class="contact-info">
        <p>WhatsApp: +51 939 785 370 (Lunes a Sábado)</p>
        <p>contacto@geekcircuits.com</p>
        <p>TikTok: @geekcircuits.pe</p>
        <p>Facebook: @GeekCircuitsPeru</p>
        <p>Entregas en Lima Metropolitana (puntos universitarios y a domicilio)</p>
      </div>

      <div class="team-contact">
        <h3>Equipo</h3>
        <!-- TODO: reemplazar '#' con el link real de cada persona (WhatsApp/LinkedIn) cuando te lo pasen -->
        <a v-for="miembro in miembros" :key="miembro.id" :href="miembro.link" class="team-link" target="_blank" rel="noopener">
          {{ miembro.nombre }} <span>— {{ miembro.rol }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { LandingService } from '../../applications/services/LandingService.js'

const service = new LandingService()
const miembros = ref(service.getMiembros())
</script>

<style scoped>
.subtitle {
  color: var(--color-text-muted);
  margin-bottom: 28px;
  max-width: 600px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.contact-info p {
  margin: 10px 0;
  color: var(--color-text-muted);
}

.team-contact h3 {
  color: var(--color-accent);
  margin-bottom: 14px;
}

.team-link {
  display: block;
  color: var(--color-text-light);
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.2s;
}

.team-link span {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.team-link:hover {
  color: var(--color-accent);
}
</style>