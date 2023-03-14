<template>
	<v-card shaped>
			<v-img :src="imageUrl">
			</v-img>
	</v-card>
</template>

<script>
export default {
	props:{
		imageUrl: {
			type: String,
			required: true
		}
	}
}
</script>

<style>

</style>