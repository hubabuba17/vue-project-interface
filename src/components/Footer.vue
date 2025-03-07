<template>
    <footer>
      <p>&copy; 2023 Маркетплейс. Все права защищены.</p>
      <nav>
        <router-link to="/privacy-policy">Политика конфиденциальности</router-link>
        <router-link to="/return-policy">Политика возвратов</router-link>
        <router-link to="/terms-of-service">Пользовательское соглашение</router-link>
      </nav>
    </footer>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  /* Базовые стили для мобильных устройств */
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #1C466D;
    padding: 1rem;
    color: white;
    text-align: center;
    width: 100%;
  }
  
  footer nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.5rem;
  }
  
  footer a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  footer a:hover {
    text-decoration: underline;
  }
  
  /* Стили для планшетов (768px и выше) */
  @media (min-width: 768px) {
    footer nav {
      flex-direction: row;
      justify-content: center;
    }
  }
  
  /* Стили для десктопов (1024px и выше) */
  @media (min-width: 1024px) {
    footer a {
      font-size: 1.2rem;
    }
  }
  </style>