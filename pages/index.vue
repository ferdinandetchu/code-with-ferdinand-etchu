<template>
  <div>
    <hero-section />
    <v-container class="fe-body-width">
      <about-me />
    </v-container>
    <skills-section />
    <my-work />
    <v-container class="fe-body-width" style="height: 90vh;">
      <v-row class="fill-height" justify="center" align="center">
        <v-col cols="12">
          <v-row class="mb-6" justify="center">
            <v-btn class="rounded-xl btn btn-white btn-animate green text-capitalize" large>Talk To Me</v-btn>
            <v-btn class="text-capitalize mx-2 btn-animated btn btn-white btn-animate" text rounded>Mentorship</v-btn>
          </v-row>
          <v-row justify="center">
            <v-col cols="8">
              <news-letter />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MyWork from '~/components/MyWork.vue'
export default {
  components: { MyWork },
  name: 'IndexPage',
}
</script>

<style>

</style>
