<script setup>
defineProps({
    title: {
        type: String,
        required: false,
        default: ''
    }
})
</script>

<template>
    <form class="form">
        <h2 class="form__title" v-if="title"> {{ title }} </h2>
        <slot />
    </form>
</template>

<style lang="scss" scoped>
.form {
    border: 1px solid #808080;
    border-radius: 5px;
    max-width: 400px;
    padding: 20px;
    width: 100%;

    &__title {
        margin-bottom: 20px;
    }
}
</style>