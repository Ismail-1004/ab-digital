<script setup>
import { useUsersStore } from "@/stores/users";

useHead({
  title: 'User'
})

const { $toast } = useNuxtApp()

const route = useRoute();
const router = useRouter();
const usersStore = useUsersStore();

let user = ref(null);
let loading = ref(true);
const isEdit = ref(false);

const updateUser = async () => {
  $toast('success', 'Данные обробатываются!')
  await usersStore.updateUser(user.value);
  isEdit.value = false
  $toast('success', 'Данные успешно обновлены!')
};

const deleteHandler = async () => {
  $toast('success', 'Данные обробатываются!')
  await usersStore.deleteUser(user.value.id)
  router.push('/')
  $toast('success', 'Пользователь успешно удален!')
}

onMounted(async () => {
  const userData = await usersStore.getSingleUser(+route.params.id);
  user.value = userData.data;

  loading.value = false;
});
</script>

<template>
  <div class="user">
    <div class="container" v-if="!loading">
      <div class="user__content" >
      <router-link to="/" class="button"> На главную </router-link>
      <div class="user__content-field">
        <div class="user__content-update">
          <img :src="user['avatar']" alt="user" class="user__content-img" />
        </div>
      </div>

      <div class="user__content-field">
        <div class="user__content-update">
          <span> <strong> Id </strong>: {{ user["id"] }} </span>
        </div>
      </div>

      <div class="user__content-field">
        <div class="user__content-update">
          <span>
            <strong> Name </strong>:
            <input
              type="text"
              v-model="user['first_name']"
              :readonly="!isEdit"
            />
          </span>
        </div>
      </div>

      <div class="user__content-field">
        <div class="user__content-update">
          <span>
            <strong> Email </strong>:
            <input type="text" v-model="user['email']" :readonly="!isEdit" />
          </span>
        </div>
      </div>

      <div class="user__content-field">
        <div class="user__content-update">
          <span>
            <strong> LastName </strong>:
            <input type="text" v-model="user['last_name']" :readonly="!isEdit" />
          </span>
        </div>
      </div>

      <template v-if="!isEdit">
        <button class="button" @click="isEdit = true">Редактировать</button>
        <button class="button delete" @click="deleteHandler">Удалить</button>
      </template>

      <button class="button" v-if="isEdit" @click="updateUser">
        Сохранить
      </button>
    </div>
    </div>
    

    <Loader v-else />
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 576px) {
    width: 100%;
  }

  &__content {
    background: #284b63;
    padding: 10px;
    border-radius: 5px;

    &-field {
      width: 100%;
      padding: 10px 20px;
      border: 1px solid white;

      &:first-of-type {
        margin-top: 20px;
      }

      &:last-of-type {
        margin-bottom: 20px;
      }
    }

    &-update {
      display: flex;
      align-items: center;
      color: white;
    }

    &-icon {
      margin-left: 5px;
    }

    &-img {
      border-radius: 5px;
    }
  }
}

.button {
  &:not(:last-child) {
    margin-right: 20px;
  }
}
</style>