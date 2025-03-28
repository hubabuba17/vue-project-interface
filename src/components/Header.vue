<template>
    <header>
      <nav aria-label="Основная навигация">
        <router-link to="/">Главная</router-link>
        <router-link to="/about">О компании</router-link>
        <router-link to="/contacts">Контакты</router-link>
        <router-link to="/login">Вход/Регистрация</router-link>
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
    flex-direction: column;
    gap: 1rem;
    align-items: center;
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
  
  /* Стили для десктопов (1024px и выше) */
  @media (min-width: 1024px) {
    nav a {
      font-size: 1.2rem;
    }
  }
  </style>