<template>
  <div
    class="
      md:w-10/12
      lg:w-full
      p-10
      w-72
      text-center
      rounded-xl
      shadow-xl
      bg-white
      relative
      z-30
    "
  >
    <img src="../assets/images/orang.png" alt="Orang" class="mx-auto" />
    <h3 class="pt-5 font-semibold text-yellow-400">{{ name }}</h3>
    <p class="pb-5 text-gray-600">{{ jabatan }}</p>
    <div class="flex md:justify-center md:space-x-10 justify-around">
      <a @click="redirect(facebook)"
        ><img src="../assets/images/facebook.svg" alt="Facebook Icon"
      /></a>
      <a @click="redirect(twitter)"
        ><img src="../assets/images/twitter.svg" alt="Twitter Icon"
      /></a>
      <a @click="redirect(linked)"
        ><img src="../assets/images/linkedin.svg" alt="Linkedin Icon"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    image: String,
    jabatan: String,
    facebook: String,
    twitter: String,
    linked: String,
  },
  methods: {
    redirect: function (link = "/", target = "_blank") {
      window.open(link, target);
    },
  },
};
</script>