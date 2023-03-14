<template>
  <v-container class="fe-body-width">
		<div class="text-center my-12">
			<h2 class="my-6 display-1">What Students Say</h2>
			<v-row>
				<v-col cols="12">
					<v-card class="rounded-xl">
						<v-img src="/comment_2.png">
						</v-img>
				</v-card>
				</v-col>
				<v-col v-for="(imageUrl, i) in testimonials" :key="i + imageUrl" md="6">
					<testimonial-card :imageUrl="imageUrl" />
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue'
export default {
  components: { TestimonialCard },
	data(){
		return {
			testimonials: [
				'/comment_1.png',
				'/comment_3.png',
				'/comment_4.png',
				'/comment_5.png',
				'/comment_6.png',
				'/comment_7.png',
				'/comment_8.png',
				'/comment_9.png',
				'/comment_10.png',
			]
		}
	}

}
</script>

<style>

</style>