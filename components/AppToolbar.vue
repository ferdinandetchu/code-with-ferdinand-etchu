<template>
  <v-app-bar
		fixed
		color="transparent"
		dark
		hide-on-scroll
		flat
	>
	<nuxt-link to="/">
		<v-avatar color="white" class="btn-animated btn btn-white btn-animate">
			<v-img src="/av.jpg" />
		</v-avatar>
	</nuxt-link>

	<v-btn class="text-capitalize mx-2 btn-animated btn btn-white btn-animate primary" text rounded>Book Meeting</v-btn>
	
	<v-spacer></v-spacer>
	<v-btn to="/mentorship" class="text-capitalize mx-2 btn-animated btn btn-white btn-animate" text rounded>Mentorship</v-btn>
	<v-btn href="https://wa.me/237671097299" target="_blank" class="text-capitalize mx-2 btn btn-white btn-animate" color="primary" outlined rounded>Say Hello</v-btn>
	</v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>