<template>
    <v-card class="pa-8 rounded-xl" min-height="300px" max-width="300px">
        <v-avatar  color="white">
            <v-icon color="primary">{{ process.icon }}</v-icon>
        </v-avatar>
        <h3 class="text-center mt-12">{{ process.title }}</h3>
        <p class="text-center grey--text">{{ process.description }}</p>
    </v-card>
</template>

<script>
export default {
    name: 'process-card',
    props: {
        process: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>