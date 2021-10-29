<template>
  <Hero menu="Gallery" />
  <main>
    <div class="lg:container lg:mx-auto px-5 py-5 space-y-5 lg:py-28 lg:px-10">
      <!-- Top Gallery -->
      <div
        class="
          flex flex-col-reverse
          lg:flex-row
          space-y-5
          lg:space-y-0 lg:space-x-10
        "
      >
        <div
          class="
            pt-6
            lg:pt-0 lg:w-4/12
            space-y-5
            lg:space-y-10
            flex flex-col
            overflow-hidden
            rounded-xl
          "
        >
          <div
            class="relative w-full h-60 md:h-96 lg:h-auto overflow-hidden"
            id="gallery-2"
          >
            <img
              src="../assets/images/gallery2.png"
              alt=""
              class="w-full h-full object-cover rounded-xl"
            />
            <div class="gallery-text">
              <p class="text-white pb-2">Category</p>
              <h1
                class="text-lg lg:text-2xl text-white font-bold tracking-wide"
              >
                Lorem Ipsum is simply dummy
              </h1>
            </div>
          </div>
          <div
            class="relative w-full h-60 md:h-96 lg:h-auto overflow-hidden"
            id="gallery-3"
          >
            <img
              src="../assets/images/gallery3.png"
              alt=""
              class="w-full h-full object-cover rounded-xl"
            />
            <div class="gallery-text">
              <p class="text-white pb-2">Category</p>
              <h1
                class="text-lg lg:text-2xl text-white font-bold tracking-wide"
              >
                Lorem Ipsum is simply dummy
              </h1>
            </div>
          </div>
        </div>
        <div class="h-60 md:h-96 lg:h-auto lg:w-8/12" id="gallery-item">
          <div
            class="w-full md:h-full h-auto relative overflow-hidden rounded-xl"
            id="gallery-1"
          >
            <img
              src="../assets/images/gallery5.png"
              alt=""
              class="w-full h-full object-cover rounded-xl"
            />
            <div class="gallery-text">
              <p class="text-white pb-2">Category</p>
              <h1
                class="text-lg lg:text-2xl text-white font-bold tracking-wide"
              >
                Lorem Ipsum is simply dummy
              </h1>
            </div>
          </div>
        </div>
      </div>

      <!-- Mid Gallery -->
      <div
        class="
          lg:pt-5
          flex flex-col
          lg:flex-row
          space-y-5
          lg:space-y-0 lg:space-x-10
        "
      >
        <div
          class="
            h-60
            md:h-96
            lg:h-auto lg:w-4/12
            relative
            overflow-hidden
            rounded-xl
          "
          id="gallery-1"
        >
          <img
            src="../assets/images/gallery.png"
            alt=""
            class="w-full h-full lg:h-full object-cover rounded-xl"
          />
          <div class="gallery-text">
            <p class="text-white pb-2">Category</p>
            <h1 class="text-lg lg:text-2xl text-white font-bold tracking-wide">
              Lorem Ipsum is simply dummy
            </h1>
          </div>
        </div>
        <div
          class="
            lg:w-8/12
            flex flex-col
            justify-between
            space-y-5
            lg:space-y-10
          "
        >
          <div
            class="
              flex flex-col
              lg:flex-row
              space-y-5
              lg:space-y-0 lg:space-x-10
            "
          >
            <div
              class="relative w-full h-60 md:h-96 lg:h-full overflow-hidden"
              id="gallery-2"
            >
              <img
                src="../assets/images/gallery2.png"
                alt=""
                class="w-full h-full object-cover rounded-xl"
              />
              <div class="gallery-text">
                <p class="text-white pb-2">Category</p>
                <h1
                  class="text-lg lg:text-2xl text-white font-bold tracking-wide"
                >
                  Lorem Ipsum is simply dummy
                </h1>
              </div>
            </div>
            <div
              class="relative w-full h-60 md:h-96 lg:h-full overflow-hidden"
              id="gallery-3"
            >
              <img
                src="../assets/images/gallery3.png"
                alt=""
                class="w-full h-full object-cover rounded-xl"
              />
              <div class="gallery-text">
                <p class="text-white pb-2">Category</p>
                <h1
                  class="text-lg lg:text-2xl text-white font-bold tracking-wide"
                >
                  Lorem Ipsum is simply dummy
                </h1>
              </div>
            </div>
          </div>
          <div
            class="relative w-full h-60 md:h-96 lg:h-full overflow-hidden"
            id="gallery-4"
          >
            <img
              src="../assets/images/gallery4.png"
              alt=""
              class="w-full h-full object-cover rounded-xl"
            />
            <div class="gallery-text">
              <p class="text-white pb-2">Category</p>
              <h1
                class="text-lg lg:text-2xl text-white font-bold tracking-wide"
              >
                Lorem Ipsum is simply dummy
              </h1>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Gallery -->
      <div
        class="
          lg:pt-5
          flex flex-col
          lg:flex-row
          space-y-5
          lg:space-y-0 lg:space-x-10
        "
      >
        <div class="h-60 md:h-96 lg:h-auto lg:w-8/12" id="gallery-item">
          <div
            class="w-full md:h-full h-auto relative overflow-hidden rounded-xl"
            id="gallery-1"
          >
            <img
              src="../assets/images/gallery5.png"
              alt=""
              class="w-full h-full object-cover rounded-xl"
            />
            <div class="gallery-text">
              <p class="text-white pb-2">Category</p>
              <h1
                class="text-lg lg:text-2xl text-white font-bold tracking-wide"
              >
                Lorem Ipsum is simply dummy
              </h1>
            </div>
          </div>
        </div>
        <div
          class="
            h-auto
            lg:w-4/12
            relative
            space-y-5
            lg:space-y-10
            flex flex-col
            overflow-hidden
            rounded-xl
          "
        >
          <div
            class="relative w-full h-60 md:h-96 lg:h-auto overflow-hidden"
            id="gallery-2"
          >
            <img
              src="../assets/images/gallery2.png"
              alt=""
              class="w-full h-full object-cover rounded-xl"
            />
            <div class="gallery-text">
              <p class="text-white pb-2">Category</p>
              <h1
                class="text-lg lg:text-2xl text-white font-bold tracking-wide"
              >
                Lorem Ipsum is simply dummy
              </h1>
            </div>
          </div>
          <div
            class="relative w-full h-60 md:h-96 lg:h-auto overflow-hidden"
            id="gallery-3"
          >
            <img
              src="../assets/images/gallery3.png"
              alt=""
              class="w-full h-full object-cover rounded-xl"
            />
            <div class="gallery-text">
              <p class="text-white pb-2">Category</p>
              <h1
                class="text-lg lg:text-2xl text-white font-bold tracking-wide"
              >
                Lorem Ipsum is simply dummy
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  name: "Gallery",
  components: {
    Hero,
  },
};
</script>

<style>
</style>