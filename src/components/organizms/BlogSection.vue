<template>
  <section
    class="relative z-30 bg-tp-white overflow-hidden py-12 lg:py-28 bg-tp"
  >
    <img src="../../assets/images/particle8.png" alt="" id="particle-8" />
    <img src="../../assets/images/particle9.png" alt="" id="particle-9" />
    <img
      src="../../assets/images/rectangle_small.png"
      alt=""
      id="rectangle-5"
    />
    <img src="../../assets/images/rectangle.png" alt="" id="rectangle-6" />
    <div class="lg:container lg:mx-auto px-5 lg:px-10 relative z-30">
      <h3
        class="
          lg:text-center
          font-medium
          lg:text-2xl
          text-yellow-400
          tracking-wider
        "
      >
        Blog
      </h3>
      <h1
        class="lg:text-center font-semibold text-xl lg:text-3xl tracking-wider"
      >
        Our Blog
      </h1>
      <p class="lg:text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur a dipiscing elit. Nam ut tortor
        iaculis ipsum <br />suscipit aliquam eget eu ante
      </p>
      <div
        class="
          flex flex-col
          space-y-5
          lg:space-y-0 lg:flex-row lg:space-x-10
          pt-10
        "
      >
        <div
          class="
            p-5
            md:px-10 md:py-12
            lg:w-1/3
            space-y-24
            md:space-y-48
            2xl:space-y-96
            text-white
            rounded-xl
          "
          style="
            background-image: url('/card-blog.png');
            background-size: cover;
            background-repeat: no-repeat;
          "
        >
          <div>
            <p class="text-sm md:text-base">Category</p>
            <h1 class="md:text-2xl font-bold tracking-wide">
              Lorem Ipsum is simply dummy
            </h1>
          </div>
          <a
            href="/"
            class="
              text-xs
              md:text-base
              inline-block
              py-2
              px-5
              md:px-8
              bg-white
              text-black
              rounded
              tracking-wide
            "
            >Read More</a
          >
        </div>
        <div
          class="
            p-5
            md:px-10 md:py-12
            lg:w-1/3
            space-y-24
            md:space-y-48
            2xl:space-y-96
            text-white
            rounded-xl
          "
          style="
            background-image: url('/card-blog2.png');
            background-size: cover;
            background-repeat: no-repeat;
          "
        >
          <div>
            <p class="text-sm md:text-base">Category</p>
            <h1 class="md:text-2xl font-bold tracking-wide">
              Lorem Ipsum is simply dummy
            </h1>
          </div>
          <a
            href="/"
            class="
              text-xs
              md:text-base
              inline-block
              py-2
              px-5
              md:px-8
              bg-white
              text-black
              rounded
              tracking-wide
            "
            >Read More</a
          >
        </div>
        <div
          class="
            p-5
            md:px-10 md:py-12
            lg:w-1/3
            space-y-24
            md:space-y-48
            2xl:space-y-96
            text-white
            rounded-xl
          "
          style="
            background-image: url('/card-blog3.png');
            background-size: cover;
            background-repeat: no-repeat;
          "
        >
          <div>
            <p class="text-sm md:text-base">Category</p>
            <h1 class="md:text-2xl font-bold tracking-wide">
              Lorem Ipsum is simply dummy
            </h1>
          </div>
          <a
            href="/"
            class="
              text-xs
              md:text-base
              inline-block
              py-2
              px-5
              md:px-8
              bg-white
              text-black
              rounded
              tracking-wide
            "
            >Read More</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogSection",
};
</script>