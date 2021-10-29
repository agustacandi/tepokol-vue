<template>
  <router-link :to="url" class="space-y-6">
    <div class="relative">
      <img src="../../assets/images/wave_event.png" alt="" class="absolute" />
      <div class="absolute top-8 left-10 font-bold text-2xl text-white">
        <span class="text-4xl">{{ date }}</span> {{ month }}
      </div>
      <img
        src="../../assets/images/event.png"
        alt="Event Image"
        class="card-img w-full rounded-lg"
      />
    </div>
    <h1 class="text-gray-800 text-2xl font-bold">{{ title }}</h1>
    <p class="text-gray-800 pb-5" style="margin-top: 0">
      {{ description }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: "ListHeader",
  props: {
    url: String,
    image: String,
    date: String,
    month: String,
    title: String,
    description: String,
  },
  methods: {
    redirect: function (link = "/", target = "_blank") {
      window.open(link, target);
    },
  },
};
</script>