<template>
  <div class="fe-skill-bg">
		<div class="white-glassmorphism">
			<v-container class="fe-body-width text-center py-12">
				<h2 class="my-6">How It Works</h2>
				<v-row justify="center">
					<v-col v-for="(process, i) in process" :key="i + process.icon" cols="12" md="3">
						<v-row justify="center">
							<process-card :process="process" />
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</div>
</template>

<script>
import ProcessCard from '~/components/mentorship/ProcessCard.vue'
export default {
  components: { ProcessCard },
  data() {
    return {
      process: [
        {
          icon: 'mdi-account',
          title: 'Register/Login',
          description: 'Create an acount for free so you can book a lesson'
        },
        {
          icon: 'mdi-account',
          title: 'Schedule A Trail Class',
          description: 'Schedule a first class for free to discus how the lessons will be.'
        },
        {
          icon: 'mdi-account',
          title: 'Buy A Lesson Package',
          description: 'Buy a lesson package that works for you'
        },
        {
          icon: 'mdi-account',
          title: 'Schedule Lessons',
          description: 'Schedule lessons on a time that is convinient for you.'
        }
      ]
    }
  }

}
</script>

<style>

</style>