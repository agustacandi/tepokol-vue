<template>
  <HomeSection />
  <AboutSection />
</template>

<script>
// @ is an alias to /src
import HomeSection from '../components/organizms/HomeSection.vue'
import AboutSection from '../components/organizms/AboutSection.vue'

export default {
  name: 'Home',
  components: {
    HomeSection,
    AboutSection
}
}
</script>
