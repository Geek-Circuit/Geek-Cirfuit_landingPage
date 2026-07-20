<template>
  <section id="organizacion" class="section">
    <h2 class="section-title">Nuestra Organización</h2>
    <p class="subtitle">Detrás de Geek Circuits hay un equipo de futuros ingenieros apasionados por la tecnología</p>
    <div class="grid">
      <div class="member-card" v-for="miembro in miembros" :key="miembro.id">
        <h3>{{ miembro.nombre }}</h3>
        <p>{{ miembro.rol }}</p>

        <div class="member-icons" v-if="miembro.linkedin || miembro.whatsapp">
          <a v-if="miembro.linkedin" :href="miembro.linkedin" target="_blank" rel="noopener" class="icon-btn linkedin" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
          </a>
          <a v-if="miembro.whatsapp" :href="miembro.whatsapp" target="_blank" rel="noopener" class="icon-btn whatsapp" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.92C21.95 6.45 17.5 2 12.04 2zm5.8 14.11c-.24.68-1.4 1.33-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.58-.35.77-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z"/></svg>
          </a>
        </div>
        <p class="pending-msg" v-else>Contacto próximamente</p>
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

.member-icons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #fff;
  transition: transform 0.2s;
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

.pending-msg {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 0;
}
</style>
