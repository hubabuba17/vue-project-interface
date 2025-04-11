<template>
  <div class="page-wrapper">
    <Header />
    
    <main class="main-content" aria-label="Основное содержимое страницы">
      <article>
        <header>
          <h1 tabindex="0">Добро пожаловать в наш магазин</h1>
        </header>
        
        <section aria-labelledby="categories-heading" class="categories-section">
          <h2 id="categories-heading" tabindex="0">Популярные категории</h2>
          <figure class="category-list">
            <ul class="category-grid">
              <li 
                v-for="category in categories" 
                :key="category.id" 
                class="category-item"
                tabindex="0"
                @keydown.enter="navigateToCategory(category.id)"
                @keydown.space.prevent="navigateToCategory(category.id)"
                aria-label="Категория: {{ category.name }}"
              >
                <img 
                  :src="category.image" 
                  :alt="category.name" 
                  aria-hidden="true"
                >
                <figcaption>
                  <h3>{{ category.name }}</h3>
                </figcaption>
              </li>
            </ul>
          </figure>
        </section>

        <section aria-labelledby="promotions-heading" class="promotions-section">
          <h2 id="promotions-heading" tabindex="0">Акции</h2>
          <ol class="promotion-list">
            <li 
              v-for="promotion in promotions" 
              :key="promotion.id" 
              class="promotion-item"
              tabindex="0"
              @keydown.enter="showPromotionDetails(promotion.id)"
              @keydown.space.prevent="showPromotionDetails(promotion.id)"
              aria-label="Акция: {{ promotion.title }}"
            >
              <img 
                :src="promotion.image" 
                :alt="promotion.title" 
                aria-hidden="true"
              >
              <div class="promotion-content">
                <h3>{{ promotion.title }}</h3>
                <blockquote>
                  <p>{{ promotion.description }}</p>
                  <footer>
                    <cite>Специальное предложение</cite>
                  </footer>
                </blockquote>
                <time datetime="2023-12-31">Действует до 31 декабря 2023</time>
              </div>
            </li>
          </ol>
        </section>
      </article>
    </main>

    <Footer />
    
    <!-- Кнопка "Наверх" с клавиатурным управлением -->
    <button
      class="back-to-top"
      aria-label="Вернуться к началу страницы"
      tabindex="0"
      @click="scrollToTop"
      @keydown.enter="scrollToTop"
      @keydown.space.prevent="scrollToTop"
    >
      ↑
    </button>
    
    <div class="phone-number" aria-hidden="true">
      Телефон: 8-800-123-45-67
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      categories: [
        { id: 1, name: 'Электроника', image: 'src/assets/img/Frame 1.png' },
        { id: 2, name: 'Одежда', image: 'src/assets/img/Frame 2.png' },
        { id: 3, name: 'Книги', image: 'src/assets/img/Frame 3.png' },
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
  methods: {
    navigateToCategory(id) {
      console.log(`Переход к категории ${id}`);
      // this.$router.push(`/category/${id}`);
    },
    showPromotionDetails(id) {
      console.log(`Открытие акции ${id}`);
      // this.$router.push(`/promotions/${id}`);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleGlobalKeyDown(e) {
      // Глобальная обработка клавиш
      if (e.key === 'Escape') {
        console.log('Закрытие модальных окон или меню');
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleGlobalKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleGlobalKeyDown);
  }
};
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

article {
  margin-bottom: 2rem;
}

header h1 {
  color: #1C466D;
  text-align: center;
  margin-bottom: 2rem;
}

/* Стили для категорий */
.categories-section,
.promotions-section {
  margin: 3rem 0;
}

.category-grid,
.promotion-list {
  display: grid;
  gap: 1.5rem;
  padding: 0;
  list-style: none;
}

.category-item,
.promotion-item {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.category-item:hover,
.promotion-item:hover {
  transform: translateY(-5px);
}

.category-item img,
.promotion-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.category-item figcaption,
.promotion-content {
  padding: 1rem;
}

.category-item h3 {
  color: #1C466D;
  text-align: center;
}

/* Стили для акций */
.promotion-content h3 {
  color: #D32F2F;
  margin-bottom: 0.5rem;
}

blockquote {
  margin: 1rem 0;
  padding-left: 1rem;
  border-left: 3px solid #1C466D;
}

time {
  display: block;
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* Адаптивные стили */
@media (min-width: 768px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .promotion-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .category-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.phone-number {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #1C466D;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  opacity: 0.9;
}


/* Новые стили для клавиатурного фокуса */
[tabindex="0"]:focus,
button:focus {
  outline: 3px solid #1C466D;
  outline-offset: 3px;
}

.category-item:focus,
.promotion-item:focus {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.back-to-top {
  position: fixed;
  bottom: 60px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1C466D;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.9;
  transition: transform 0.2s;
}

.back-to-top:hover,
.back-to-top:focus {
  transform: scale(1.1);
}
</style>