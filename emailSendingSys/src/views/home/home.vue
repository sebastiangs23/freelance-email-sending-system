<script setup>
import { ref } from "vue";
import CreateUsers from "../../components/createUsers.vue"; // Asegúrate de que este archivo existe
import SendEmails from "../../components/sendEmails.vue"; // Asegúrate de que este archivo existe

const activeModule = ref("usuarios"); // Controla qué módulo se muestra

const setModule = (module) => {
  activeModule.value = module;
};
</script>

<template>
  <div class="container">
    <!-- Sidebar Izquierdo (Siempre Visible) -->
    <aside class="sidebar">
      <h2>Panel de Opciones</h2>
      <nav>
        <button
          :class="{ active: activeModule === 'usuarios' }"
          @click="setModule('usuarios')"
        >
          Usuarios
        </button>
        <button
          :class="{ active: activeModule === 'emails' }"
          @click="setModule('emails')"
        >
          Mandar Email
        </button>
      </nav>
    </aside>

    <!-- Contenido Dinámico (Cambia según el botón presionado) -->
    <div class="main-content">
      <!-- <Usuarios v-if="activeModule === 'usuarios'" /> -->
      <CreateUsers v-if="activeModule === 'usuarios'" />
      <SendEmails v-if="activeModule === 'emails'" />
    </div>
  </div>
</template>

<style scoped>
/* Estructura principal */
.container {
  display: flex;
  min-height: 100vh;
  background-color: #f9fafb;
  font-family: "Poppins", sans-serif;
}

/* Sidebar izquierdo */
.sidebar {
  width: 300px;
  height: 100vh; /* Mantiene la altura completa */
  background: white;
  padding: 20px;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
}

/* Botones de navegación */
.sidebar nav {
  width: 100%;
  margin-top: 20px;
}

.sidebar button {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: none;
  background: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.sidebar button:hover {
  background: #0056b3;
}

.sidebar button.active {
  background: #0056b3;
  transform: scale(1.05);
}

/* Contenido Principal (Donde se renderizan los componentes) */
.main-content {
  margin-left: 320px; /* Deja espacio para el sidebar */
  flex: 1;
  padding: 20px;
  text-align: center;
}
</style>
