<template>
  <div class="fe-hero-bg">
		<div class="white-glassmorphism">
			<v-container class="fe-body-width text-center">
				<h2 class="my-6 display-1">Projects</h2>
				<v-row>
					<v-col md="6">
						<v-card class="card_image">
							<v-img src="blockchain.png" height="300">
								<v-row class="fill-height glassmorphism my-0" align="center" justify="center">
									<v-col cols="12">
										<h4 class="display-1 mb-3">Simple Web3 DAPP</h4>
										<v-btn class="text-capitalize mr-3" rounded>
											<v-btn outlined fab style="width: 20px; height: 20px;">
												<v-icon x-small>mdi-eye</v-icon>
											</v-btn> 
											Preview
										</v-btn>
										<v-btn outlined icon>
											<v-icon>mdi-github</v-icon>
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
										<h4 class="display-1 mb-3">Amzon_Clone</h4>
										<v-btn class="text-capitalize mr-3" rounded>
											<v-btn outlined fab style="width: 20px; height: 20px;">
												<v-icon x-small>mdi-eye</v-icon>
											</v-btn> 
											Preview
										</v-btn>
										<v-btn href="https://github.com/ferdinandetchu/amazon_clone" target="_blank" outlined icon>
											<v-icon>mdi-github</v-icon>
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
										<h4 class="display-1 mb-3">Simple Web3 DAPP</h4>
										<v-btn class="text-capitalize mr-3" rounded>
											<v-btn outlined fab style="width: 20px; height: 20px;">
												<v-icon x-small>mdi-eye</v-icon>
											</v-btn> 
											Preview
										</v-btn>
										<v-btn outlined icon>
											<v-icon>mdi-github</v-icon>
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
.card_image:hover{
		.glassmorphism{
			display: flex;
			background: rgba(0, 0, 0, 0.7);
			/* border-radius: 16px; */
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(5px);
			/* border: 1px solid rgba(16, 87, 240, 0.3); */
		}
}
.glassmorphism{
	display: none;
}
</style>