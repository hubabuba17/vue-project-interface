<template>
  <div>
    <Header />
    <main>
      <h1>Пользовательское соглашение</h1>
      <section class="terms-content">
        <p>
          Используя наш маркетплейс, вы соглашаетесь с условиями данного соглашения.
        </p>
        <h2>Общие положения</h2>
        <p>
          Вы обязуетесь использовать наш сервис только в законных целях и не нарушать права
          других пользователей.
        </p>
        <h2>Ограничения</h2>
        <p>
          Мы оставляем за собой право ограничить доступ к сервису в случае нарушения правил.
        </p>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'TermsOfService',
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

h1, h2 {
  color: #1C466D;
  text-align: center;
}

.terms-content {
  max-width: 100%;
  margin: 0 auto;
  text-align: left;
}

/* Стили для планшетов (768px и выше) */
@media (min-width: 768px) {
  .terms-content {
    max-width: 90%;
  }
}

/* Стили для десктопов (1024px и выше) */
@media (min-width: 1024px) {
  .terms-content {
    max-width: 800px;
  }
}
</style>