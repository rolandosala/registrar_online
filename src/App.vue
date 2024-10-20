<template>
    <!-- <p v-for="country in countries" :key="country.name">
        Country: {{ country.name }}
    </p> -->
    <RouterView />

</template>
<script>
import { RouterView } from 'vue-router';
import app from './firebase/init';
</script>
