<template>
  <main>
    <header class="page-header">
      <h1>Финансовый контроль</h1>
      <Button 
        label="⬅ Назад" 
        @click="goBack" 
        class="p-button-secondary"
        aria-label="Вернуться в панель администратора"
      />
    </header>

    <section class="admin-content" aria-labelledby="financial-control-desc">
      <p id="financial-control-desc">
        Здесь вы можете мониторить платежи, расчеты и комиссии.
      </p>
      
      <div role="region" aria-label="Таблица финансовых транзакций">
        <DataTable 
          :value="transactions" 
          responsiveLayout="scroll"
          aria-label="Финансовые транзакции"
        >
          <Column field="id" header="ID транзакции"></Column>
          <Column field="amount" header="Сумма">
            <template #body="slotProps">
              <strong>{{ slotProps.data.amount }} руб.</strong>
            </template>
          </Column>
          <Column field="status" header="Статус"></Column>
          <Column header="Действия">
            <template #body="slotProps">
              <Button
                label="Подробнее"
                class="p-button-info"
                @click="viewDetails(slotProps.data.id)"
                :aria-label="`Просмотреть детали транзакции ${slotProps.data.id}`"
              />
            </template>
          </Column>
        </DataTable>
      </div>
    </section>
  </main>
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
}

.admin-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
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
}

@media (min-width: 1024px) {
  .admin-content {
    max-width: 800px;
  }
}
</style>