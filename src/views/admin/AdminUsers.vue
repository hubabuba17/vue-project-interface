<template>
  <main>
    <header class="page-header">
      <h1>Управление пользователями</h1>
      <div class="action-bar">
        <Button 
          label="⬅ Назад" 
          @click="goBack" 
          class="p-button-secondary"
          aria-label="Вернуться в панель администратора"
        />
        <Button
          label="Создать пользователя"
          @click="createUser"
          class="p-button-primary"
          aria-label="Создать нового пользователя"
          icon="pi pi-plus"
        />
      </div>
    </header>

    <section class="admin-content" aria-labelledby="users-description">
      <DataTable 
        :value="users" 
        responsiveLayout="scroll"
        aria-label="Таблица пользователей"
        paginator :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
        currentPageReportTemplate="Показано {first} - {last} из {totalRecords} пользователей"
      >
        <Column field="id" header="ID" :sortable="true"></Column>
        <Column field="name" header="Имя" :sortable="true"></Column>
        <Column field="email" header="Email" :sortable="true">
          <template #body="{data}">
            <a :href="`mailto:${data.email}`" aria-label="Написать письмо пользователю">
              {{ data.email }}
            </a>
          </template>
        </Column>
        <Column header="Действия" :exportable="false">
          <template #body="slotProps">
            <div class="action-buttons">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-success p-mr-2"
                @click="editUser(slotProps.data.id)"
                :aria-label="`Редактировать пользователя ${slotProps.data.name}`"
                v-tooltip.top="'Редактировать'"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger"
                @click="deleteUser(slotProps.data.id)"
                :aria-label="`Удалить пользователя ${slotProps.data.name}`"
                v-tooltip.top="'Удалить'"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const users = ref([
  { id: 1, name: 'Иван Иванов', email: 'ivan@example.com' },
  { id: 2, name: 'Петр Петров', email: 'petr@example.com' },
]);

const createUser = () => {
  alert('Создание нового пользователя');
};

const editUser = (id) => {
  alert(`Редактирование пользователя с ID: ${id}`);
};

const deleteUser = (id) => {
  users.value = users.value.filter((user) => user.id !== id);
};

const goBack = () => {
  router.push('/admin');
};
</script>

<style scoped>
.page-header {
  margin-bottom: 1.5rem;
}

h1 {
  color: #1C466D;
  text-align: center;
  margin-bottom: 1rem;
}

.action-bar {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.admin-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

/* Стили для планшетов и десктопов */
@media (min-width: 768px) {
  .action-bar {
    justify-content: flex-start;
    padding: 0 1rem;
  }
  
  .admin-content {
    max-width: 90%;
  }
}

@media (min-width: 1024px) {
  .admin-content {
    max-width: 1200px;
  }
  
  .action-bar {
    justify-content: space-between;
    align-items: center;
  }
  
  h1 {
    margin-bottom: 0;
  }
}
</style>