<template>
  <a @click="redirect(url)" class="flex flex-col">
    <div class="relative pb-5">
      <img src="../../assets/images/wave_event.png" alt="" class="absolute" />
      <div class="absolute top-8 left-10 font-bold text-2xl text-white">
        <span class="text-4xl">{{ date }}</span> {{ month }}
      </div>
      <img
        src="../../assets/images/event-1.png"
        alt="Event Image"
        class="card-img w-full rounded-lg"
      />
    </div>
    <h1 class="text-gray-800 text-2xl font-bold">{{ title }}</h1>
    <p class="text-gray-800 m-0" style="margin-top: 0">
      {{ description }}
    </p>
  </a>
</template>

<script>
export default {
  name: "EventCard",
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

<style>
</style>