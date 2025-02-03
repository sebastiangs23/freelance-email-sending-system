<script setup>
import { ref, computed } from "vue";

// Lista de usuarios de ejemplo (puedes conectar con una API en el futuro)
const usuarios = ref([
  { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
  { id: 2, nombre: "María García", email: "maria@example.com" },
  { id: 3, nombre: "Carlos López", email: "carlos@example.com" }
]);

const searchQuery = ref("");

// Filtrar usuarios según el término de búsqueda
const filteredUsuarios = computed(() => {
  return usuarios.value.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    usuario.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Función para agregar un usuario (simulación)
const agregarUsuario = () => {
  alert("Aquí abrirás un modal o una nueva vista para agregar un usuario.");
};
</script>

<template>
  <div class="usuarios-container">
    <h2>Lista de Usuarios</h2>

    <!-- Barra de búsqueda -->
    <div class="search-bar">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Buscar usuario..." 
      />
      <button @click="agregarUsuario">+ Agregar Usuario</button>
    </div>

    <!-- Tabla de usuarios -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in filteredUsuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.usuarios-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  color: #333;
}

/* Barra de búsqueda */
.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.search-bar button {
  margin-left: 10px;
  padding: 10px 15px;
  border: none;
  background: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.search-bar button:hover {
  background: #0056b3;
}

/* Tabla de usuarios */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background: #007bff;
  color: white;
}

tr:hover {
  background: #f2f2f2;
}
</style>
