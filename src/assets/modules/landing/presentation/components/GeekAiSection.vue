<template>
  <section id="geek-ai" class="section geek-ai">
    <h2 class="section-title">Contactar con Geek AI</h2>
    <p class="subtitle">Resuelve tus dudas al instante con nuestro asistente virtual</p>
    <a href="https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/07/20/15/20260720155354-VNXJNB55.json" target="_blank" rel="noopener noreferrer" class="geek-ai-button">
      <img src="/logo.jpeg" alt="Geek Circuits AI" class="geek-ai-logo" />
      Geek Circuit AI
    </a>
  </section>
</template>

<script setup>
</script>

<style scoped>
.geek-ai {
  text-align: center;
}

.subtitle {
  color: var(--color-text-muted);
  margin-bottom: 28px;
}

.geek-ai-button {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 16px 32px;
  border-radius: 50px;
  border: 1px solid var(--color-primary);
  background: rgba(75, 47, 203, 0.15);
  color: var(--color-accent);
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.geek-ai-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 25px var(--color-accent);
}

.geek-ai-logo {
  width: 44px;
  height: 44px;
  object-fit: cover;
  clip-path: polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%);
}
</style>