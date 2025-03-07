<template>
  <div>
    <Header />
    <main>
      <h1>Вход/Регистрация</h1>
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        
        <label for="password">Пароль:</label>
        <input type="password" id="password" required>
        
        <button type="submit">Войти</button>
      </form>
      <p>Нет аккаунта? <router-link to="/register">Зарегистрируйтесь</router-link></p>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Login',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
/* Базовые стили для мобильных устройств */
main {
  padding: 1rem;
  max-width: 100%;
  margin: 0 auto;
}

h1 {
  color: #1C466D;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  margin: 0 auto;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem;
  background-color: #1C466D;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

p {
  text-align: center;
  margin-top: 1rem;
}

/* Стили для планшетов (768px и выше) */
@media (min-width: 768px) {
  form {
    max-width: 400px;
  }
}

/* Стили для десктопов (1024px и выше) */
@media (min-width: 1024px) {
  form {
    max-width: 500px;
  }
}
</style>