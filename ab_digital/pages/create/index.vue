<script setup>
import { useUsersStore } from "@/stores/users";
const { $toast } = useNuxtApp()

useHead({
    title: 'Create'
})

const userStore = useUsersStore()
const router = useRouter()

const userData = reactive({
    first_name: '',
    email: '',
    avatar: '/_nuxt/assets/images/banner.png',
    last_name: '',
    isCustomCreated: true
})

const submitHandler = async () => {
    $toast('success', 'Данные обробатываются!')
    await userStore.createUser(userData)
    router.push('/')
    $toast('success', 'Пользователь успешно создан!')
}

</script>

<template>
    <div class="create">
        <div class="create__content container">
            <h2 class="create__content-title"> Создание пользователя </h2>
            <form class="create__content-form" @submit.prevent="submitHandler">
                <input type="email" class="create__content-input" v-model="userData.email" placeholder="Введите email">
                <input type="text" class="create__content-input" v-model="userData.first_name" placeholder="Введите имя">
                <input type="text" class="create__content-input" v-model="userData.last_name" placeholder="Введите фамилию">
                <button class="button"> Создать </button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.create {
    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        &-title {
            margin-bottom: 20px;
            font-size: 30px;
        }

        &-form {
            display: flex;
            flex-direction: column;
            border: 1px solid #808080;
            max-width: 300px;
            width: 100%;
            padding: 20px;
            border-radius: 10px;
            background: #284b63;
        }

        &-input {
            border-radius: 5px;
            border: 1px solid #808080;
            padding: 5px;
            
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }
}
</style>