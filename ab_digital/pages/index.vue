<script setup>
import { useUsers } from '@/stores/users'

const usersStore = useUsers()
const users = ref([])
const loading = ref(true)

const getUsers = async () => {
    await usersStore.getUsers()
    users.value = [...usersStore.getUsersList]
    loading.value = false
}

onMounted(async () => {
    await getUsers()
})


</script>

<template>
    <div class="users container">
        <div class="users__content" v-if="!loading">
            <UserCard v-for="user in users" :key="user.id" :user="user" />
        </div>
        <Loader v-else />
    </div>
</template>

<style lang="scss" scoped>
.users {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__content {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
}
</style>