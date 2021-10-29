<template>
  <section class="py-12 lg:py-28 relative bg-tp-white-2 overflow-hidden">
    <img src="../../assets/images/particle6.png" alt="" id="particle-6" />
    <img src="../../assets/images/particle7.png" alt="" id="particle-7" />
    <img
      src="../../assets/images/rectangle_small.png"
      alt=""
      class="absolute top-96 -left-80 transform -rotate-12 scale-125"
    />
    <div class="relative z-30 lg:container lg:mx-auto px-5 lg:px-10">
      <h3
        class="
          lg:text-center
          font-medium
          lg:text-2xl
          text-yellow-400
          tracking-wider
        "
      >
        Gallery
      </h3>
      <h1
        class="lg:text-center font-semibold text-xl lg:text-3xl tracking-wider"
      >
        Our Gallery
      </h1>
      <p class="lg:text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur a dipiscing elit. Nam ut tortor
        iaculis ipsum <br />suscipit aliquam eget eu ante
      </p>
      <div
        class="
          pt-10
          flex flex-col
          lg:flex-row lg:justify-between
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
            src="../../assets/images/gallery.png"
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
                src="../../assets/images/gallery2.png"
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
                src="../../assets/images/gallery3.png"
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
              src="../../assets/images/gallery4.png"
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
  </section>
</template>

<script>
export default {
  name: "GallerySection",
};
</script>