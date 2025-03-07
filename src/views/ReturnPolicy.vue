<template>
  <div>
    <Header />
    <main>
      <h1>Политика возвратов</h1>
      <section class="policy-content">
        <p>
          Если вы не удовлетворены покупкой, вы можете вернуть товар в течение 14 дней с момента
          получения заказа.
        </p>
        <h2>Условия возврата</h2>
        <ul>
          <li>Товар должен быть в оригинальной упаковке.</li>
          <li>Необходимо предоставить чек или номер заказа.</li>
          <li>Возврат осуществляется за счёт покупателя.</li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'ReturnPolicy',
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

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
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