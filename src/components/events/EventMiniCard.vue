<template>
  <div class="flex bg-white rounded-lg overflow-hidden shadow-lg">
    <div
      class="
        w-full
        bg-white
        flex
        items-center
        p-5
        space-x-5
        rounded-xl
        shadow-lg
      "
    >
      <div class="text-center px-5">
        <h1 class="text-4xl font-bold text-purple-400">{{ date }}</h1>
        <p class="font-semibold">{{ month }}</p>
      </div>
      <div>
        <h1 class="font-semibold">{{ title }}</h1>
        <p class="text-sm text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventMiniCard",
  props: {
    date: String,
    month: String,
    title: String,
    description: String,
  },
};
</script>