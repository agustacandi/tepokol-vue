<template>
  <HomeSection />
  <AboutSection />
  <TeamSection />
  <EventSection />
  <GallerySection />
  <BlogSection />
</template>

<script>
// @ is an alias to /src
import HomeSection from '../components/organizms/HomeSection.vue'
import AboutSection from '../components/organizms/AboutSection.vue'
import TeamSection from '../components/organizms/TeamSection.vue'
import EventSection from '../components/organizms/EventSection.vue'
import GallerySection from '../components/organizms/GallerySection.vue'
import BlogSection from '../components/organizms/BlogSection.vue'

export default {
  name: 'Home',
  components: {
    HomeSection,
    AboutSection,
    TeamSection,
    EventSection,
    GallerySection,
    BlogSection
  },
  
}
</script>

<style>
#home {
	background: linear-gradient(265.3deg, #7c83fd 0%, #5c7aea 100%);
}

.gallery-text {
	position: absolute;
	transition: all 0.3s;
	left: 1.5rem;
	bottom: -10rem;
	text-shadow: -2px 3px 8px rgba(0, 0, 0, 0.23);
}

#gallery-1:hover .gallery-text,
#gallery-2:hover .gallery-text,
#gallery-3:hover .gallery-text,
#gallery-4:hover .gallery-text {
	bottom: 1.5rem;
}

/* Team */
#rectangle-2 {
	left: -24rem;
}

/* Event */
#rectangle-3 {
	right: -30rem;
}

/* Gallery */
#particle-6 {
	position: absolute;
	top: 3rem;
	left: 30rem;
}

#particle-7 {
	position: absolute;
	top: 8rem;
	right: 18rem;
}

/* Blog */
#particle-8 {
	position: absolute;
	top: 10rem;
	left: 24rem;
}

#particle-9 {
	position: absolute;
	top: 3rem;
	right: 28rem;
}

#rectangle-5 {
	position: absolute;
	bottom: 0rem;
	left: -18rem;
	transform: rotate(-30deg);
}

#rectangle-6 {
	position: absolute;
	top: 5rem;
	right: -30rem;
	transform: rotate(-25deg);
}

/* Screen 768px */
@media (min-width: 768px) {
	#rectangle-2 {
		left: -28rem;
	}
}

/* Screen 1024px */
@media (min-width: 1024px) {
	/* Home */
	#home {
		background-image: url("../assets/images/wave.png");
		background-size: auto;
		background-position: -1px;
		background-repeat: no-repeat;
		background-position-x: right;
	}

	.gallery-text {
		left: 2.5rem;
	}

	#gallery-1:hover .gallery-text,
	#gallery-2:hover .gallery-text,
	#gallery-3:hover .gallery-text,
	#gallery-4:hover .gallery-text {
		bottom: 2.5rem;
	}
}
</style>
