<script setup>
import { ref, computed } from "vue";

// Lista de usuarios (simulación, puedes conectarlo a una API)
const usuarios = ref([
  { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
  { id: 2, nombre: "María García", email: "maria@example.com" },
  { id: 3, nombre: "Carlos López", email: "carlos@example.com" }
]);

const selectedUsers = ref([]); // Almacena los usuarios seleccionados
const selectAll = ref(false); // Controla si todos están seleccionados

// Computed property para saber si todos están seleccionados
const allSelected = computed(() => selectedUsers.value.length === usuarios.value.length);

// Función para manejar la selección de todos los usuarios
const toggleSelectAll = () => {
  selectAll.value = !selectAll.value;
  if (selectAll.value) {
    selectedUsers.value = usuarios.value.map(user => user.email);
  } else {
    selectedUsers.value = [];
  }
};

// Datos del email
const emailSubject = ref("");
const emailMessage = ref("");

// Función para enviar el correo
const sendEmail = () => {
  if (selectedUsers.value.length === 0) {
    alert("Debes seleccionar al menos un usuario.");
    return;
  }
  console.log("Enviando correo a:", selectedUsers.value);
  console.log("Asunto:", emailSubject.value);
  console.log("Mensaje:", emailMessage.value);
  alert("Correo enviado con éxito 🎉");
  
  // Reiniciar campos
  emailSubject.value = "";
  emailMessage.value = "";
  selectedUsers.value = [];
  selectAll.value = false;
};
</script>

<template>
  <div class="send-email-container">
    <h2>Enviar Correo a Usuarios</h2>

    <!-- Lista de usuarios con checkboxes -->
    <div class="users-list">
      <label>
        <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
        <strong>Seleccionar todos</strong>
      </label>

      <div v-for="usuario in usuarios" :key="usuario.id" class="user-item">
        <label>
          <input type="checkbox" v-model="selectedUsers" :value="usuario.email" />
          {{ usuario.nombre }} ({{ usuario.email }})
        </label>
      </div>
    </div>

    <!-- Campos para escribir el email -->
    <div class="email-form">
      <label>Asunto:</label>
      <input type="text" v-model="emailSubject" placeholder="Escribe el asunto..." />

      <label>Mensaje:</label>
      <textarea v-model="emailMessage" placeholder="Escribe el mensaje..."></textarea>

      <button @click="sendEmail">Enviar Correo</button>
    </div>
  </div>
</template>

<style scoped>
.send-email-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

/* Lista de usuarios */
.users-list {
  text-align: left;
  margin-bottom: 20px;
}

.user-item {
  margin-top: 5px;
}

input[type="checkbox"] {
  margin-right: 10px;
}

/* Formulario de email */
.email-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

.email-form input, .email-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.email-form textarea {
  resize: vertical;
  height: 100px;
}

/* Botón de envío */
button {
  margin-top: 10px;
  padding: 10px;
  border: none;
  background: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #0056b3;
}
</style>
