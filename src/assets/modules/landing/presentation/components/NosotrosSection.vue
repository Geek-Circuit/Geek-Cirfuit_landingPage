<template>
  <section id="nosotros" class="section">
    <h2 class="section-title">Nosotros</h2>
    <p class="text-body">
      Geek Circuits nace de la pasión por la ingeniería y el desarrollo tecnológico.
      Somos una plataforma digital peruana dedicada a la comercialización de
      componentes electrónicos y al soporte técnico especializado para
      estudiantes, makers y profesionales del sector.
    </p>
    <p class="text-body">
      No solo vendemos los insumos: te acompañamos en cada etapa de tu
      proyecto para que tus ideas funcionen a la primera.
    </p>

    <div class="mv-grid">
      <div class="mv-card">
        <h3>Misión</h3>
        <p>
          Ofrecer componentes electrónicos de alta calidad y soluciones
          integrales de ingeniería a través de un canal virtual ágil,
          brindando asesoría técnica personalizada que impulse el éxito de
          los proyectos de nuestros clientes.
        </p>
      </div>
      <div class="mv-card">
        <h3>Visión</h3>
        <p>
          Ser la plataforma líder en el mercado peruano para la adquisición
          de insumos electrónicos y soporte en desarrollo de hardware,
          reconocida por nuestra calidad, innovación y cercanía con la
          comunidad tecnológica.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.text-body {
  max-width: 700px;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 16px;
}

.mv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.mv-card {
  background: rgba(75, 47, 203, 0.15);
  border: 1px solid var(--color-primary);
  border-radius: 12px;
  padding: 24px;
}

.mv-card h3 {
  color: var(--color-accent);
  margin-bottom: 10px;
}

.mv-card p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>