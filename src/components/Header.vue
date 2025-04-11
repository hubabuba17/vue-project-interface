<template>
  <header class="site-header" aria-label="Шапка сайта">
    <nav aria-label="Основная навигация">
      <ul class="ul_nav">
        <li class="nav-item">
          <router-link 
            to="/" 
            class="nav-link"
            tabindex="0"
            aria-current="page"
            @keydown.enter="$router.push('/')"
            @keydown.space.prevent="$router.push('/')"
            aria-label="Перейти на главную страницу"
          >
            Главная
          </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            to="/about" 
            class="nav-link"
            tabindex="0"
            @keydown.enter="$router.push('/about')"
            @keydown.space.prevent="$router.push('/about')"
            aria-label="Информация о компании"
          >
            О компании
          </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            to="/contacts" 
            class="nav-link"
            tabindex="0"
            @keydown.enter="$router.push('/contacts')"
            @keydown.space.prevent="$router.push('/contacts')"
            aria-label="Контактная информация"
          >
            Контакты
          </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            to="/login" 
            class="nav-link auth-link"
            tabindex="0"
            @keydown.enter="$router.push('/login')"
            @keydown.space.prevent="$router.push('/login')"
            aria-label="Вход или регистрация в личном кабинете"
          >
            Вход/Регистрация
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
  
  <script setup>

  </script>
  
  <style scoped>
  /* Базовые стили для мобильных устройств */
  header {
    background-color: #1C466D;
    padding: 1rem;
    color: white;
  }
  
  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  .ul_nav {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }


  nav a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
  /* Стили для планшетов (768px и выше) */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media (min-width: 320px) and (max-width: 460px) {
    .ul_nav {
      flex-direction: column;
      gap: 1rem;
    }
  }
  
  /* Стили для десктопов (1024px и выше) */
  @media (min-width: 1024px) {
    nav a {
      font-size: 1.2rem;
    }
  }
  </style>