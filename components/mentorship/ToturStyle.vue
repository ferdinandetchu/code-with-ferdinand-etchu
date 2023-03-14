<template>
   <div class="fe-hero-bg">
		<div class="white-glassmorphism">
			<v-container class="fe-body-width text-center">
				<h2 class="my-6 display-1">My Teaching Style</h2>
				<v-row>
					<v-col md="6">
						<v-card class="card_image">
							<v-img src="blockchain.png" height="300">
								<v-row class="fill-height glassmorphism my-0" align="center" justify="center">
									<v-col cols="12">
										<h4 class="display-1 mb-3">Learn Basic Concepts</h4>
										<v-btn class="text-capitalize mr-3" rounded>
											<v-btn outlined fab style="width: 20px; height: 20px;">
												<v-icon x-small>mdi-eye</v-icon>
											</v-btn> 
											Preview
										</v-btn>
									</v-col>
								</v-row>
							</v-img>
						</v-card>
					</v-col>

					<v-col md="6">
						<v-card class="card_image">
							<v-img src="amozon-clone.png" height="300">
								<v-row class="fill-height glassmorphism my-0" align="center" justify="center">
									<v-col cols="12">
										<h4 class="display-1 mb-3">Build Projects</h4>
										<v-btn class="text-capitalize mr-3" rounded>
											<v-btn outlined fab style="width: 20px; height: 20px;">
												<v-icon x-small>mdi-eye</v-icon>
											</v-btn> 
											Preview
										</v-btn>
									</v-col>
								</v-row>
							</v-img>
						</v-card>
					</v-col>

					<v-col md="6">
						<v-card class="card_image">
							<v-img src="blockchain.png" height="300">
								<v-row class="fill-height glassmorphism my-0" align="center" justify="center">
									<v-col cols="12">
										<h4 class="display-1 mb-3">Test Your Skills</h4>
										<v-btn class="text-capitalize mr-3" rounded>
											<v-btn outlined fab style="width: 20px; height: 20px;">
												<v-icon x-small>mdi-eye</v-icon>
											</v-btn> 
											Preview
										</v-btn>
									</v-col>
								</v-row>
							</v-img>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card_image{
	.glassmorphism{
		display: flex;
		background: rgba(0, 0, 0, 0.7);
		/* border-radius: 16px; */
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		/* border: 1px solid rgba(16, 87, 240, 0.3); */
	}
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
	.glassmorphism{
		display: flex;
		background: rgba(0, 0, 0, 0.7);
		/* border-radius: 16px; */
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		/* border: 1px solid rgba(16, 87, 240, 0.3); */
	}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
	.glassmorphism{
		display: flex;
		background: rgba(0, 0, 0, 0.7);
		/* border-radius: 16px; */
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		/* border: 1px solid rgba(16, 87, 240, 0.3); */
	}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
	.glassmorphism{
		display: none;
	}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
	.glassmorphism{
		display: none;
	}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
	.glassmorphism{
		display: none;
	}
}
</style>