<template>
  <div>
    <Header />
    <main>
      <h1>Добро пожаловать</h1>
      <section aria-labelledby="categories-heading">
        <h2 id="categories-heading">Популярные категории</h2>
        <div class="category-list">
          <div class="category-item" v-for="category in categories" :key="category.id">
            <img :src="category.image" :alt="category.name" />
            <p>{{ category.name }}</p>
          </div>
        </div>
      </section>
      <section aria-labelledby="promotions-heading">
        <h2 id="promotions-heading">Акции</h2>
        <div class="promotion-list">
          <div class="promotion-item" v-for="promotion in promotions" :key="promotion.id">
            <img :src="promotion.image" :alt="promotion.title" />
            <h3>{{ promotion.title }}</h3>
            <p>{{ promotion.description }}</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      categories: [
        { id: 1, name: 'Электроника', image: 'src/assets/img/Frame 1.png'},
        { id: 2, name: 'Одежда', image: 'src/assets/img/Frame 2.png'},
        { id: 3, name: 'Книги', image: 'src/assets/img/Frame 3.png'},
      ],
      promotions: [
        {
          id: 1,
          title: 'Скидка 20% на всё!',
          description: 'Только до конца месяца.',
          image: 'src/assets/img/Frame 4.png',
        },
        {
          id: 2,
          title: 'Бесплатная доставка',
          description: 'При заказе от 5000 рублей.',
          image: 'src/assets/img/Frame 5.png',
        },
      ],
    };
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

.categories, .promotions {
  margin-top: 1rem;
}

.category-list, .promotion-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.category-item, .promotion-item {
  text-align: center;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.category-item img, .promotion-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Стили для планшетов (768px и выше) */
@media (min-width: 768px) {
  .category-list, .promotion-list {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .category-item, .promotion-item {
    flex: 1 1 calc(50% - 1rem);
  }
}

/* Стили для десктопов (1024px и выше) */
@media (min-width: 1024px) {
  .category-item, .promotion-item {
    flex: 1 1 calc(33.333% - 1rem);
  }
}
</style>