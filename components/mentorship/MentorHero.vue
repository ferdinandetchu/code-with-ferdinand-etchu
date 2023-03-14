<template>
	<div>
		<video class="fe-hero-video" autoplay loop muted>
			<source src="hero-video.mp4" type="video/mp4">
			Your browser does not support the video tag
		</video>
		<v-row class="white-glassmorphism fe-video-overlay justify-center">
			<v-row class="fill-height fe-body-width" justify="center" align="end">
				<v-col class="fill-height" sm="12" md="4">
					<v-row class="fill-height" align="center">
						<v-col cols="12">
							<div class="main">
								<h1>Want to learn<div class="roller">
								<span id="rolltext">
									Javascript?<br/>
									HTML &amp; CSS?<br/>
									Reactjs?<br/>
									Vuejs?<br/>
								</span>
								<span id="spare-time">too much spare time?</span><br/>
								</div>
								</h1>
							</div>

							<h3 class="text-center mt-12">Get 50% OFF <span><del>50$/hr</del></span> <v-chip color="secondary">25$/hr</v-chip></h3>
              <p class="text-center grey--text">Free first lesson</p>
              <v-row class="mt-2" justify="center">
                <v-btn class="mt-4 text-capitalize btn btn-white btn-animate" color="primary" rounded>Book Now</v-btn>
              </v-row>
              <v-row class="hidden-md-and-up" justify="center">
                <v-col cols="12">
                  <v-card shaped class="py-6">
                    <h3 class="text-center">
                      &lt;Code /&gt; With Ferdinand Etchu
                    </h3>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>mdi-github</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-youtube</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-instagram</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>mdi-whatsapp</v-icon>
                      </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
						</v-col>
					</v-row>
				</v-col>
				<v-col class="hidden-sm-and-down pb-0" md="8">
					<v-img style="height: 80vh" src="/mentor-hero.png">
            <v-row class="fill-height" justify="end" align="end">
              <v-col md="9">
                <v-card class="mb-6" shaped>
                  <v-card-title>
                    <span class="primary--text">&lt;Code /&gt; With Ferdinand Etchu</span>
                    <v-btn icon>
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-youtube</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-whatsapp</v-icon>
                    </v-btn>
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-img>
				</v-col>
			</v-row>
		</v-row>
	</div>
</template>

<script>
import NewsLetter from '../NewsLetter.vue'
export default {
  components: { NewsLetter },

}
</script>

<style>
.main{
  /* height:100vh; */
  width:100%;  
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
}
h1{
  text-align:center;
  text-transform: uppercase;
  color: #F1FAEE; 
  font-size: 3rem;
}

.roller{
  height: 4.125rem;
  line-height: 4rem;
  position: relative;
  overflow: hidden; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: #f0cf13;
}


#spare-time{
  font-size: 1rem;
  font-style: italic;
  letter-spacing: 1rem;
  margin-top: 0;
  color: #A8DADC;
  
}

.roller #rolltext {
  position: absolute;
  top: 0;
  animation: slide 10s infinite;  
}

@keyframes slide {
  0%{
    top:0;
  }
  25%{
    top: -4rem;    
  }
  50%{
    top: -8rem;
  }
  72.5%{
    top: -12.25rem;
  }
}

@media screen and (max-width: 600px){
  h1{
  text-align:center;
  text-transform: uppercase;
  color: #F1FAEE; 
  font-size: 2.125rem;
}
  
  .roller{
  height: 2.6rem; 
  line-height: 2.125rem;  
  }
  
  #spare-time {
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
  
  .roller #rolltext {  
  animation: slide-mob 5s infinite;  
}
  
  @keyframes slide-mob {
  0%{
    top:0;
  }
  25%{
    top: -2.125rem;    
  }
  50%{
    top: -4.25rem;
  }
  72.5%{
    top: -6.375rem;
  }
}
}
</style>