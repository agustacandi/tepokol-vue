<template>
  <section
    class="pt-40 pb-32 bg-gradient-to-tr from-tp-blue-1 to-tp-blue-2"
    id="hero"
  >
    <div class="lg:container lg:mx-auto px-5 lg:px-10 text-center">
      <h1 class="text-2xl md:text-4xl font-bold text-white">{{ menu }}</h1>
      <p class="text-white pt-5">
        <a href="../index.html">Home</a>
        <span> &gt; </span>
        <a href="" :class="slug ? 'text-white' : 'text-yellow-400'">{{
          menu
        }}</a>
        <span :class="slug ? 'block-inline' : 'hidden'"> &gt; </span>
        <a href="" :class="slug ? 'block-inline text-yellow-400' : 'hidden'">{{
          slug
        }}</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    menu: String,
    slug: String,
  },
};
</script>

<style>
</style>