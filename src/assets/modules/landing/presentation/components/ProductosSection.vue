<template>
  <section id="productos" class="section">
    <transition name="fade" mode="out-in">

      <!-- Nivel 1: Grid de categorías -->
      <div v-if="!categoriaSeleccionada" key="grid">
        <h2 class="section-title">Nuestros Productos</h2>
        <p class="subtitle">Encuentra el hardware exacto para tus laboratorios y prototipos</p>
        <div class="grid">
          <div class="card clickable" v-for="producto in productos" :key="producto.id" @click="categoriaSeleccionada = producto">
            <div class="card-image">
              <img :src="producto.imagen" :alt="producto.nombre" />
            </div>
            <div class="card-body">
              <h3>{{ producto.nombre }}</h3>
              <p>{{ producto.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Nivel 2: Lista de items de la categoría -->
      <div v-else-if="categoriaSeleccionada && !itemSeleccionado" key="lista">
        <button class="back-btn" @click="categoriaSeleccionada = null">← Volver a Productos</button>
        <h2 class="section-title">{{ categoriaSeleccionada.nombre }}</h2>
        <p class="subtitle">{{ categoriaSeleccionada.descripcion }}</p>

        <div class="items-list" v-if="categoriaSeleccionada.items.length">
          <div class="item-row" v-for="item in categoriaSeleccionada.items" :key="item.id" @click="itemSeleccionado = item">
            <div class="item-image">
              <img :src="item.imagen" :alt="item.nombre" />
            </div>
            <span class="item-name">{{ item.nombre }}</span>
            <span class="item-price">S/ {{ item.precio.toFixed(2) }}</span>
          </div>
        </div>
        <p class="empty-msg" v-else>
          Muy pronto agregaremos el listado de productos de esta categoría.
        </p>
      </div>

      <!-- Nivel 3: Detalle grande del producto -->
      <div v-else key="producto-detalle">
        <button class="back-btn" @click="itemSeleccionado = null">← Volver a {{ categoriaSeleccionada.nombre }}</button>
        <div class="detalle-producto">
          <div class="detalle-imagen">
            <img :src="itemSeleccionado.imagen" :alt="itemSeleccionado.nombre" />
          </div>
          <div class="detalle-info">
            <h2 class="detalle-titulo">{{ itemSeleccionado.nombre }}</h2>
            <p class="detalle-precio">S/ {{ itemSeleccionado.precio.toFixed(2) }} <span>IGV incluido</span></p>
            <p class="detalle-categoria">Categoría: {{ categoriaSeleccionada.nombre }}</p>
          </div>
        </div>
      </div>

    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { LandingService } from '../../applications/services/LandingService.js'

const service = new LandingService()
const productos = ref(service.getProductos())
const categoriaSeleccionada = ref(null)
const itemSeleccionado = ref(null)
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

.items-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 600px;
}

.item-row {
  display: flex;
  align-items: center;
  gap: 18px;
  background: rgba(75, 47, 203, 0.15);
  border: 1px solid var(--color-primary);
  border-radius: 10px;
  padding: 12px 20px;
  cursor: pointer;
  transition: transform 0.15s, border-color 0.15s;
}

.item-row:hover {
  transform: translateX(4px);
  border-color: var(--color-accent);
}

.item-image {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-name {
  flex: 1;
  color: var(--color-text-light);
  font-weight: 500;
}

.item-price {
  color: var(--color-accent);
  font-weight: 700;
  white-space: nowrap;
}

.empty-msg {
  color: var(--color-text-muted);
}

/* Nivel 3: detalle grande */
.detalle-producto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.detalle-imagen {
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 520px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 24px;
}

.detalle-imagen img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.detalle-info {
  padding-top: 12px;
}

.detalle-titulo {
  font-size: 1.8rem;
  color: var(--color-text-light);
  margin-bottom: 20px;
  line-height: 1.3;
}

.detalle-precio {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--color-accent);
  margin-bottom: 16px;
}

.detalle-precio span {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-text-muted);
  margin-left: 8px;
}

.detalle-categoria {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .detalle-producto {
    grid-template-columns: 1fr;
  }
}
</style>
