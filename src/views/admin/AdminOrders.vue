<template>
  <main>
    <header class="page-header">
      <h1>Управление заказами</h1>
      <Button 
        label="⬅ Назад" 
        @click="goBack" 
        class="p-button-secondary"
        aria-label="Вернуться в панель администратора"
      />
    </header>

    <section class="admin-content" aria-labelledby="orders-description">
      <p id="orders-description">
        Здесь вы можете управлять заказами, разрешать споры и контролировать возвраты.
      </p>
      
      <article aria-label="Список заказов">
        <DataTable 
          :value="orders" 
          responsiveLayout="scroll"
          aria-label="Таблица заказов"
          rowHover
        >
          <Column field="id" header="ID заказа" sortable></Column>
          <Column field="customer" header="Покупатель" sortable></Column>
          <Column field="status" header="Статус" sortable>
            <template #body="{data}">
              <span :class="'status-badge status-' + data.status.toLowerCase()">
                {{ data.status }}
              </span>
            </template>
          </Column>
          <Column header="Действия">
            <template #body="slotProps">
              <div class="action-buttons">
                <Button
                  label="Разрешить спор"
                  class="p-button-success"
                  @click="resolveOrder(slotProps.data.id)"
                  :aria-label="`Разрешить спор по заказу #${slotProps.data.id}`"
                />
                <Button
                  label="Отменить заказ"
                  class="p-button-danger"
                  @click="cancelOrder(slotProps.data.id)"
                  :aria-label="`Отменить заказ #${slotProps.data.id}`"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const orders = ref([
  { id: 1, customer: 'Иван Иванов', status: 'В обработке' },
  { id: 2, customer: 'Петр Петров', status: 'Доставлен' },
]);

const resolveOrder = (id) => {
  alert(`Разрешение спора по заказу с ID: ${id}`);
};

const cancelOrder = (id) => {
  orders.value = orders.value.filter((order) => order.id !== id);
};

const goBack = () => {
  router.push('/admin');
};
</script>

<style scoped>
.page-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

h1 {
  color: #1C466D;
  text-align: center;
  width: 100%;
  margin-bottom: 0;
}

.admin-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
}

.status-в обработке {
  background-color: #e1f5fe;
  color: #0288d1;
}

.status-доставлен {
  background-color: #e8f5e9;
  color: #388e3c;
}

/* Стили для планшетов и десктопов */
@media (min-width: 768px) {
  .page-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  .admin-content {
    max-width: 90%;
  }
  
  .action-buttons {
    flex-wrap: nowrap;
  }
}

@media (min-width: 1024px) {
  .admin-content {
    max-width: 1200px;
  }
}
</style>