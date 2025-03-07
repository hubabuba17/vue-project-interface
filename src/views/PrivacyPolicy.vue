<template>
  <div>
    <Header />
    <main>
      <h1>Политика конфиденциальности</h1>
      <section class="policy-content">
        <p>
          Ваша конфиденциальность важна для нас. В этом документе описано, как мы собираем,
          используем и защищаем ваши личные данные.
        </p>
        <h2>Сбор данных</h2>
        <p>
          Мы собираем информацию, которую вы предоставляете при регистрации, оформлении заказа
          или использовании наших услуг.
        </p>
        <h2>Использование данных</h2>
        <p>
          Ваши данные используются для обработки заказов, улучшения сервиса и связи с вами.
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
  name: 'PrivacyPolicy',
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

.policy-content {
  max-width: 100%;
  margin: 0 auto;
  text-align: left;
}

/* Стили для планшетов (768px и выше) */
@media (min-width: 768px) {
  .policy-content {
    max-width: 90%;
  }
}

/* Стили для десктопов (1024px и выше) */
@media (min-width: 1024px) {
  .policy-content {
    max-width: 800px;
  }
}
</style>