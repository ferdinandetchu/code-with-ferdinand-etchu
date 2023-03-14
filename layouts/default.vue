<template>
  <v-app class="fe-bg" dark>
    <app-toolbar />
    <v-main>
      <Nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppToolbar from '~/components/AppToolbar.vue'
export default {
  components: { AppFooter, AppToolbar },
  name: 'DefaultLayout',
}
</script>
