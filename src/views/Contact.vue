<template>
  <Hero menu="Contact" />
  <main>
    <div class="lg:container lg:mx-auto px-5 py-20 lg:px-10">
      <h1
        class="lg:text-center font-semibold text-xl lg:text-3xl tracking-wider"
      >
        Get in touch
      </h1>
      <p class="lg:text-center pt-3 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur a dipiscing elit. Nam ut tortor
        iaculis ipsum <br />suscipit aliquam eget eu ante
      </p>
      <div class="flex flex-col lg:flex-row pt-10">
        <div class="w-full lg:w-4/12 space-y-5 lg:space-y-14">
          <div>
            <h1 class="text-xl font-semibold tracking-wider">Contact Us</h1>
            <p class="text-2xl font-bold tracking-widest text-tp-blue-1">
              Tepokol Team
            </p>
          </div>

          <div class="flex space-x-7">
            <img
              src="../assets/images/location.svg"
              alt="Location Icon"
              class="h-10 w-10"
            />
            <div>
              <h3 class="font-bold">Location :</h3>
              <p class="text-gray-500">
                Lorem Ipsum summary keyword design inspiration from other
                website.
              </p>
            </div>
          </div>
          <div class="flex space-x-5">
            <img
              src="../assets/images/phone.svg"
              alt="Phone Icon"
              class="h-10 w-10 block"
            />
            <div>
              <h3 class="font-bold">Call Center :</h3>
              <p class="text-gray-500">08113755555</p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-8/12 pt-10 lg:pt-0 space-y-5">
          <div class="space-y-5 lg:space-y-0 lg:flex lg:space-x-5">
            <input
              type="text"
              class="
                block
                border border-blue-300
                py-2
                px-4
                rounded
                w-full
                lg:w-1/2
              "
              placeholder="Name"
            />
            <input
              type="text"
              class="
                block
                border border-blue-300
                py-2
                px-4
                rounded
                w-full
                lg:w-1/2
              "
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            class="block border border-blue-300 py-2 px-4 rounded w-full"
            placeholder="Subject"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="block border border-blue-300 py-2 px-4 rounded w-full"
            placeholder="Message"
          ></textarea>
          <button
            class="
              bg-tp-blue-1
              py-3
              px-10
              text-white
              rounded-xl
              tracking-widest
              font-semibold
            "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  components: {
    Hero,
  },
};
</script>
