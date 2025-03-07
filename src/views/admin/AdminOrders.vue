<template>
  <div>
    <h1>Управление заказами</h1>
    <Button label="⬅ Назад" @click="goBack" class="p-button-secondary" />
    <section class="admin-content">
      <p>Здесь вы можете управлять заказами, разрешать споры и контролировать возвраты.</p>
      <DataTable :value="orders" responsiveLayout="scroll">
        <Column field="id" header="ID заказа"></Column>
        <Column field="customer" header="Покупатель"></Column>
        <Column field="status" header="Статус"></Column>
        <Column header="Действия">
          <template #body="slotProps">
            <Button
              label="Разрешить спор"
              class="p-button-success p-mr-2"
              @click="resolveOrder(slotProps.data.id)"
            />
            <Button
              label="Отменить заказ"
              class="p-button-danger"
              @click="cancelOrder(slotProps.data.id)"
            />
          </template>
        </Column>
      </DataTable>
    </section>
  </div>
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
h1 {
  color: #1C466D;
  text-align: center;
}

.admin-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

/* Стили для планшетов и десктопов */
@media (min-width: 768px) {
  .admin-content {
    max-width: 90%;
  }
}

@media (min-width: 1024px) {
  .admin-content {
    max-width: 800px;
  }
}
</style>