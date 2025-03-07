<template>
  <div>
    <Header />
    <main>
      <h1>О компании</h1>
      <section class="about-content">
        <p>
          Мы — современный маркетплейс, который предлагает широкий ассортимент товаров
          по доступным ценам. Наша миссия — сделать покупки удобными и приятными для каждого клиента.
        </p>
        <p>
          Мы работаем с 2020 года и уже заслужили доверие тысяч покупателей. Наша команда
          постоянно улучшает сервис, чтобы вы могли наслаждаться покупками.
        </p>
        <h2>Наши ценности</h2>
        <ul>
          <li>Качество товаров</li>
          <li>Доступные цены</li>
          <li>Быстрая доставка</li>
          <li>Поддержка клиентов 24/7</li>
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
  name: 'About',
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

.about-content {
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
  .about-content {
    max-width: 90%;
  }
}

/* Стили для десктопов (1024px и выше) */
@media (min-width: 1024px) {
  .about-content {
    max-width: 800px;
  }
}
</style>