<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <body>
    <TheHeader />
    <RouterView />
    <TheFooter />
    </body>
</template>

<style scoped>
body{
    background-color: beige;
}
</style>
