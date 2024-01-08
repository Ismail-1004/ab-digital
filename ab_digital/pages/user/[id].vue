<script setup>
import { useUsers } from '@/stores/users'

const route = useRoute()
const usersStore = useUsers()

let user = ref(null)

const getUser = async () => {
    const userData = await usersStore.getSingleUser(route.params.id)
    user.value = valueToKey(userData.data)

    console.log(user.value);
}

getUser()

function valueToKey (user) {
    return Object.fromEntries(
        Object.entries(user).map(([key, value]) => [key, {key, value, edit: false }]).sort()
    )
}

</script>

<template>
    <div class="user">
        <div class="user__content container">
            <div class="user__content-field" v-for="field in user" :key="field.value">
                <div class="user__content-update"  v-if="field.key !== 'avatar'">
                    <span> <strong> {{ field.key }} </strong>: {{ field.value }} </span>
                    <Icon name="ph:pencil-duotone" class="user__content-icon" />
                </div>
                <img :src="field.value" alt="" class="user__content-img" v-else>
            </div>
            <!-- <Form class="user__form">
                <Input />
            </Form> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user {
    &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-field {
            width: 100%;
            padding: 10px 20px;
            border: 1px solid white;
        }

        &-update {
            display: flex;
            align-items: center;
        }

        &-icon {
            margin-left: 5px;
        }

        &-img {
            border-radius: 5px;
        }
    }
}
</style>