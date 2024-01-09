<script setup>
import { useUsers } from "@/stores/users";

const userStore = useUsers()

const userData = reactive({
    name: '',
    job: ''
})

const submitHandler = async () => {
    await userStore.createUser(userData)
}

</script>

<template>
    <div class="create">
        <div class="create__content container">
            <h2 class="create__content-title"> Создание пользователя </h2>
            <form class="create__content-form" @submit.prevent="submitHandler">
                <input type="text" class="create__content-input" v-model="userData.name" placeholder="Введите имя">
                <input type="text" class="create__content-input" v-model="userData.job" placeholder="Введите место работы">
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