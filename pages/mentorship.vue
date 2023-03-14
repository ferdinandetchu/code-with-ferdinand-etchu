<template>
  <div>
    <mentor-hero />

    <how-it-works />

    <totur-style />

    <skills-section />

    <testimonials />

    <my-work />

    <v-container class="fe-body-width" style="height: 90vh;">
      <v-row class="fill-height" justify="center" align="center">
        <v-col cols="12">
          <v-row class="mb-6" justify="center">
            <v-btn class="rounded-xl btn btn-white btn-animate green text-capitalize" large>Book A Lesson</v-btn>
            <v-btn to="/" class="text-capitalize mx-2 btn-animated btn btn-white btn-animate" text rounded>About Tutor</v-btn>
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
import MentorHero from '~/components/mentorship/MentorHero.vue'
import HowItWorks from '~/components/mentorship/HowItWorks.vue'
import ToturStyle from '~/components/mentorship/ToturStyle.vue'
import Testimonials from '~/components/mentorship/Testimonials.vue'
export default {
  components: { MentorHero, HowItWorks, ToturStyle, Testimonials },
}
</script>

<style>

</style>