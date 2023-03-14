<template>
  <v-card class="rounded-xl pa-md-12">
    <v-row>
			<v-col cols="12">
				<v-card-actions>
					<v-spacer />
					<v-btn icon><v-icon>mdi-close</v-icon></v-btn>
				</v-card-actions>
			</v-col>
			<v-col cols="6">
				<v-row class="fill-hight" justify="center" align="center">
					<v-avatar size="300" color="secondary">
						<img src="/angle-brand-material-yellow-email-f5728a65b77a8a9dcf900b1834b1d52f.png" />
					</v-avatar>
				</v-row>
			</v-col>
			<v-col cols="6">
				<h2>Subscribe to My Newsletter!</h2>
				<p>subscribe to my newsletter and stay updated</p>
				<v-form>
					<v-text-field label="Your email" outlined />
					<v-btn class="btn-animated btn btn-white btn-animate" color="primary" large block>Subscribe</v-btn>
				</v-form>
			</v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>