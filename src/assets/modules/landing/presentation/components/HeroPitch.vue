<template>
  <section class="hero">
    <img src="/logo.jpeg" alt="Geek Circuits" class="hero-logo" />
    <h1>GEEK CIRCUITS</h1>
    <p>Electrónica, componentes y soluciones para tus proyectos</p>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(circle at center, var(--color-primary-dark), var(--color-bg-dark));
  padding-top: 80px;
}

.hero-logo {
  width: 220px;
  margin-bottom: 24px;
  -webkit-mask-image: radial-gradient(
      circle,
      black 35%,
      rgba(0, 0, 0, 0.6) 55%,
      transparent 80%
  );
  mask-image: radial-gradient(
      circle,
      black 35%,
      rgba(0, 0, 0, 0.6) 55%,
      transparent 80%
  );
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  filter: blur(0.4px);
}

.hero h1 {
  font-size: 3rem;
  letter-spacing: 4px;
  background: linear-gradient(90deg, var(--color-secondary), var(--color-accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero p {
  margin-top: 12px;
  color: var(--color-text-muted);
  font-size: 1.1rem;
}
</style>
