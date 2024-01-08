<script setup>
import { useUsers } from '@/stores/users'

const usersStore = useUsers()
const users = ref([])

const getUsers = async () => {
    await usersStore.getUsers()
    users.value = [...usersStore.getUsersList]
}

getUsers()

</script>

<template>
    <div class="users container">
        <div class="users__content">
            <UserCard v-for="user in users" :key="user.id" :user="user" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.users {
    &__content {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
}
</style>