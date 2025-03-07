<template>
  <div>
    <h1>Управление пользователями</h1>
    <div class="button-group">
      <Button label="⬅ Назад" @click="goBack" class="p-button-secondary" />
      <Button label="Создать пользователя" @click="createUser" class="p-button-primary" />
    </div>
    <section class="admin-content">
      <DataTable :value="users" responsiveLayout="scroll">
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Имя"></Column>
        <Column field="email" header="Email"></Column>
        <Column header="Действия">
          <template #body="slotProps">
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success p-mr-2"
              @click="editUser(slotProps.data.id)"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="deleteUser(slotProps.data.id)"
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
h1 {
  color: #1C466D;
  text-align: center;
}

.button-group {
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
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