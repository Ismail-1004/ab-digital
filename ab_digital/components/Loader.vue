<template>
    <div class="loader">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
</template>

<style scoped>
.loader {
    position: relative;
}

.dot {
    position: absolute;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: #284b63;
    animation: bounce 1.3s linear infinite;
}

.dot:nth-child(1) {
    left: -1.5rem;
}

.dot:nth-child(2) {
    animation-delay: -1s;
}

.dot:nth-child(3) {
    right: -2.5rem;
    animation-delay: -0.8s;
}

@keyframes bounce {
    0%,
    66%,
    100% {
        transform: initial;
    }

    33% {
        transform: translatey(-1rem);
    }
}
</style>