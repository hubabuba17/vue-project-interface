<template>
    <div class="admin-dashboard">
      <button @click="goBack" class="back-button">⬅ Назад</button>
      <h1>Админка</h1>
      <div class="admin-links">
        <router-link to="/admin/users" class="admin-link">
          <span>👤</span>
          Управление пользователями
        </router-link>
        <router-link to="/admin/orders" class="admin-link">
          <span>📦</span>
          Управление заказами
        </router-link>
        <router-link to="/admin/finance" class="admin-link">
          <span>💰</span>
          Финансовый контроль
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const goBack = () => {
    router.push('/');
    };
  </script>
  
  <style scoped>
/* Базовые стили для мобильных устройств */
.admin-dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: #f9f9f9;
  position: relative;
}

h1 {
  color: #1C466D;
  margin-bottom: 1rem;
  text-align: center;
}

.admin-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.admin-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #1C466D;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
}

.admin-link span {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.back-button {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #1C466D;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

/* Стили для планшетов (768px и выше) */
@media (min-width: 768px) {
  .admin-links {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .admin-link {
    flex: 1 1 calc(50% - 1rem);
  }
}

/* Стили для десктопов (1024px и выше) */
@media (min-width: 1024px) {
  .admin-link {
    flex: 1 1 calc(33.333% - 1rem);
  }
}
</style>