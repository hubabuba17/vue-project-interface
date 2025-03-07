<template>
  <div>
    <Header />
    <main>
      <h1>Контакты</h1>
      <section class="contact-info">
        <p>Адрес: г. Москва, ул. Примерная, д. 123</p>
        <p>Телефон: +7 (999) 123-45-67</p>
        <p>Email: info@marketplace.ru</p>
      </section>
      <section class="contact-form">
        <h2>Форма обратной связи</h2>
        <form @submit.prevent="submitForm">
          <label for="name">Имя:</label>
          <input type="text" id="name" v-model="form.name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />

          <label for="message">Сообщение:</label>
          <textarea id="message" v-model="form.message" required></textarea>

          <button type="submit">Отправить</button>
        </form>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Contacts',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      alert('Сообщение отправлено!');
      this.form = { name: '', email: '', message: '' };
    },
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

h1, h2 {
  color: #1C466D;
  text-align: center;
}

.contact-info, .contact-form {
  margin-top: 1rem;
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

input, textarea {
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

/* Стили для планшетов (768px и выше) */
@media (min-width: 768px) {
  form {
    max-width: 500px;
  }
}

/* Стили для десктопов (1024px и выше) */
@media (min-width: 1024px) {
  form {
    max-width: 600px;
  }
}
</style>