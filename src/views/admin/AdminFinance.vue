<template>
  <div>
    <h1>Финансовый контроль</h1>
    <Button label="⬅ Назад" @click="goBack" class="p-button-secondary" />
    <section class="admin-content">
      <p>Здесь вы можете мониторить платежи, расчеты и комиссии.</p>
      <DataTable :value="transactions" responsiveLayout="scroll">
        <Column field="id" header="ID транзакции"></Column>
        <Column field="amount" header="Сумма">
          <template #body="slotProps">
            {{ slotProps.data.amount }} руб.
          </template>
        </Column>
        <Column field="status" header="Статус"></Column>
        <Column header="Действия">
          <template #body="slotProps">
            <Button
              label="Подробнее"
              class="p-button-info"
              @click="viewDetails(slotProps.data.id)"
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
const transactions = ref([
  { id: 1, amount: 1000, status: 'Оплачено' },
  { id: 2, amount: 1500, status: 'Ожидание' },
]);

const viewDetails = (id) => {
  alert(`Подробности транзакции с ID: ${id}`);
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