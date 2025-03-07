<template>
    <div class="primary-page">
      <h1>Добро пожаловать!</h1>
      <div class="switch-buttons">
        <router-link to="/marketplace" class="switch-button">Маркетплейс</router-link>
        <router-link to="/admin" class="switch-button">Админка</router-link>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  /* Базовые стили для мобильных устройств */
  .primary-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 1rem;
    background-color: #f9f9f9;
  }
  
  h1 {
    color: #1C466D;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .switch-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  
  .switch-button {
    padding: 1rem;
    background-color: #1C466D;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1rem;
    text-align: center;
    transition: background-color 0.3s ease;
  }
  
  .switch-button:hover {
    background-color: #15314d;
  }
  
  /* Стили для планшетов (768px и выше) */
  @media (min-width: 768px) {
    .switch-buttons {
      flex-direction: row;
      justify-content: center;
    }
  
    .switch-button {
      width: 200px;
    }
  }
  
  /* Стили для десктопов (1024px и выше) */
  @media (min-width: 1024px) {
    .switch-button {
      font-size: 1.2rem;
      padding: 1.5rem;
    }
  }
  </style>