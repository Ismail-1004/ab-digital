<script setup>
import { useUsersStore } from '@/stores/users'

useHead({
    title: 'Main'
})

const usersStore = useUsersStore()
const loading = ref(true)

onMounted(async () => {
    await usersStore.getUsers()
    loading.value = false
})
</script>

<template>
    <div class="users container">
        <div class="users__content" v-if="!loading">
            <UserCard v-for="user in usersStore.getUsersList" :key="user.id" :user="user" />
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
        flex-wrap: wrap;
        gap: 30px;

        @media (max-width: 576px) {
            flex-direction: column;
            justify-content: center;
        }
    }
}
</style>