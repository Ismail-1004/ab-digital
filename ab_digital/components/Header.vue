<template>
    <header class="header">
        <nav class="header__nav container">
            <nuxt-link class="header__nav-link" to="/"> AB Digital </nuxt-link>
            <nuxt-link class="button" to="/create"> Создать пользователя </nuxt-link>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background: #284b63;
    padding: 20px 0;

    &__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-link {
            color: white;
            font-size: 25px;
            font-weight: bold;
        }
    }
}
</style>