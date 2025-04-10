<template>
  <div class="primary-page">
    <h1>Добро пожаловать!</h1>
    <div class="switch-buttons">
      <router-link to="/marketplace" class="switch-button"
        >Маркетплейс</router-link
      >
      <router-link to="/admin" class="switch-button">Админка</router-link>
    </div>
    <div class="wrapper">
      <input
        type="checkbox"
        id="custom-checkbox"
        class="custom-checkbox-input"
      />
      <label for="custom-checkbox" class="custom-checkbox-label">
        <span class="custom-checkbox-button"></span>
        Согласен с условиями
      </label>
    </div>
  </div>
</template>

<script setup></script>

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
  color: #1c466d;
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
  background-color: #1c466d;
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

/* Сбрасываем стандартные стили */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.wrapper {
  margin-top: 2rem;
}

/* Прячем стандартный чекбокс */
.custom-checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* Стили для лейбла */
.custom-checkbox-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  font-size: 16px;
  color: #333;
}

/* Стили для кастомного чекбокса */
.custom-checkbox-button {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #999;
  border-radius: 4px;
  margin-right: 10px;
  transition: all 0.2s ease;
  background-color: #fff;
}

/* Стиль при наведении */
.custom-checkbox-input:hover + .custom-checkbox-label .custom-checkbox-button {
  border-color: #666;
}

/* Стиль при фокусе (доступность) */
.custom-checkbox-input:focus + .custom-checkbox-label .custom-checkbox-button {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  border-color: #4299e1;
}

/* Стиль для активного состояния */
.custom-checkbox-input:checked
  + .custom-checkbox-label
  .custom-checkbox-button {
  background-color: #4299e1;
  border-color: #4299e1;
}

/* Галочка внутри чекбокса */
.custom-checkbox-input:checked
  + .custom-checkbox-label
  .custom-checkbox-button::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Стиль для отключенного состояния */
.custom-checkbox-input:disabled + .custom-checkbox-label {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
