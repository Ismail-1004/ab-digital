<script setup>
defineProps({
    user: {
        type: Object,
        required: true,
        default: {}
    }
})
</script>

<template>
    <div class="card">
        <img :src="user.avatar" alt="" class="card__img">
        <span class="card__name"> {{ user.first_name }} </span>
        <span class="card__email"> {{ user.email }} </span>
        <nuxt-link :to="`user/${user.id}`" class="card__link" v-if="!user.isCustomCreated"> Подробнее </nuxt-link>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0px 0px 8px 4px rgba(34, 60, 80, 0.2);
    border-radius: 5px;

    padding: 20px;

    cursor: pointer;
    transition: .3s;

    &:hover {
        transform: scale(1.1);
    }

    &__img {
        border-radius: 5px;
        width: 100px;
        height: 100px;
        object-fit: cover;
    }

    &__name {
        margin: 10px 0;
    }

    &__email {
        font-size: 13px;
    }

    &__link {
        border: 1px solid #284b63;
        display: inline-block;
        width: 100%;
        margin-top: 10px;
        color: black;
        text-align: center;
        padding: 5px 0;
        border-radius: 5px;
        font-size: 14px;
    }
}
</style>