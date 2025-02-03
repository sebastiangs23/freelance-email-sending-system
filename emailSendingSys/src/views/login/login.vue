<script setup>
import { ref } from "vue";

// Variables reactivas para email y password
const email = ref("");
const password = ref("");

// Función para manejar el inicio de sesión
const handleLogin = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
};
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Bienvenid@</h2>
      <p class="login-subtitle">Inicia sesión para continuar</p>

      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input 
            v-model="email"
            type="email" 
            id="email" 
            placeholder="Ingresa tu email"
            required
          />
        </div>

        <!-- Contraseña -->
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input 
            v-model="password"
            type="password" 
            id="password" 
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <!-- Botón de Iniciar Sesión -->
        <button type="submit" class="login-button">
          Iniciar Sesión
        </button>
      </form>

      <!-- Enlace para Registro -->
      <p class="register-link">
        ¿No tienes una cuenta? 
        <RouterLink to="/register">Regístrate</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Fuente y fondo */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9fafb;
}

/* Contenedor principal */
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 20px;
}

/* Tarjeta de inicio de sesión */
.login-card {
  background-color: #ffffff;
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

/* Títulos */
.login-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.login-subtitle {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

/* Grupo de formularios */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-group input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
}

/* Botón de inicio de sesión */
.login-button {
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.login-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Enlace para registro */
.register-link {
  margin-top: 15px;
  font-size: 0.9rem;
  color: #555;
}

.register-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
