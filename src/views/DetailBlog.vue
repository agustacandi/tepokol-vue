<template>
  <Hero menu="Blog" slug="having-a-trouble-with-an-anxiety" />
  <main class="py-5 lg:py-10">
    <div
      class="
        lg:container
        flex flex-col
        lg:flex-row lg:space-x-10 lg:mx-auto
        px-5
        lg:px-10
      "
    >
      <div class="lg:w-8/12 space-y-5 lg:space-y-5">
        <img
        src="../assets/images/card-blog4.png"
          class="w-full h-60 md:h-96 rounded-xl"
        >
        <div class="space-y-5">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img
                src="../assets/images/orang2.png"
                alt=""
                class="w-8 h-8 md:w-12 md:h-12"
              />
              <div>
                <p class="font-bold text-sm md:text-base">Itoshi Asuka</p>
                <p class="text-xs md:text-sm text-blue-500">
                  Technology, 20 Mei 2021
                </p>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-center md:space-x-3">
              <p class="text-xs md:text-base">Share:</p>
              <div class="flex space-x-3">
                <img
                  src="../assets/images/facebook.svg"
                  alt="Facebook Icon"
                  class="w-5 h-5"
                />
                <img
                  src="../assets/images/twitter.svg"
                  alt="Twitter Icon"
                  class="w-5 h-5"
                />
                <img
                  src="../assets/images/linkedin.svg"
                  alt="Linkedin Icon"
                  class="w-5 h-5"
                />
              </div>
            </div>
          </div>
          <div class="space-y-5 text-gray-600">
            <h1 class="text-2xl md:text-4xl text-black font-bold">
              Having a trouble with an anxiety?
            </h1>
            <p>
              Experiencing occasional anxiety is a normal part of life. However,
              people with anxiety disorders frequently have intense, excessive
              and persistent worry and fear about everyday situations. Often,
              anxiety disorders involve repeated episodes of sudden feelings of
              intense anxiety and fear or terror that reach a peak within
              minutes (panic attacks).
            </p>
            <p>
              These feelings of anxiety and panic interfere with daily
              activities, are difficult to control, are out of proportion to the
              actual danger and can last a long time. You may avoid places or
              situations to prevent these feelings. Symptoms may start during
              childhood or the teen years and continue into adulthood.
            </p>
            <p>
              Examples of anxiety disorders include generalized anxiety
              disorder, social anxiety disorder (social phobia), specific
              phobias and separation anxiety disorder. You can have more than
              one anxiety disorder. Sometimes anxiety results from a medical
              condition that needs treatment.
            </p>
          </div>
          <div class="space-y-3 text-gray-500">
            <h1 class="text-2xl font-semibold text-black">Causes</h1>
            <p>
              The causes of anxiety disorders aren't fully understood. Life
              experiences such as traumatic events appear to trigger anxiety
              disorders in people who are already prone to anxiety. Inherited
              traits also can be a factor.
            </p>
            <h1 class="text-2xl font-semibold text-black">Medical causes</h1>
            <p>
              For some people, anxiety may be linked to an underlying health
              issue. In some cases, anxiety signs and symptoms are the first
              indicators of a medical illness. If your doctor suspects your
              anxiety may have a medical cause, he or she may order tests to
              look for signs of a problem.
            </p>
          </div>
          <div class="py-2 md:py-5 space-y-3 md:space-x-5">
            <a
              href="#"
              class="
                py-2
                px-7
                rounded-full
                border-2 border-blue-500
                inline-block
                bg-blue-100
              "
              >Tech</a
            >
            <a
              href="#"
              class="
                py-2
                px-7
                rounded-full
                border-2 border-blue-500
                inline-block
              "
              >Coding</a
            >
            <a
              href="#"
              class="
                py-2
                px-7
                rounded-full
                border-2 border-blue-500
                inline-block
              "
              >Music</a
            >
          </div>
          <div class="flex items-center justify-between py-3">
            <a href="" class="flex space-x-4 font-bold text-blue-500">
              <img
                src="../assets/images/arrow-left-blue.svg"
                alt="Arrow Left Blue Icon"
              />
              <p>Previous Page</p>
            </a>
            <a href="" class="flex space-x-4 font-bold text-blue-500">
              <p>Next Page</p>
              <img
                src="../assets/images/arrow-right-blue.svg"
                alt="Arrow Right Blue Icon"
              />
            </a>
          </div>
        </div>
      </div>
      <aside class="lg:w-4/12 pt-5 md:pt-0">
        <div
          class="
            w-full
            flex
            items-center
            justify-between
            bg-white
            py-3
            px-5
            rounded-md
          "
          id="search-bar"
        >
          <input
            type="text"
            class="w-full focus:outline-none text-gray-500"
            placeholder="Search..."
          />
          <img
            src="../assets/images/search.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
        <h1 class="text-xl lg:text-2xl font-semibold pt-8" id="title-1">
          Popular
        </h1>
        <div class="mt-5 space-y-5">
          <div class="flex bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="../assets/images/popular-post.png"
              alt="Popular Post Image"
              class="w-1/3 object-cover"
            />
            <div class="w-2/3 p-3 space-y-3">
              <h1 class="font-semibold text-xl">Post Title</h1>
              <p class="text-gray-400 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>
              <div class="flex justify-between">
                <p class="text-xs text-blue-500">Itoshi Asuka</p>
                <p class="text-xs text-blue-500">22 Mei 2021</p>
              </div>
            </div>
          </div>
          <div class="flex bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="../assets/images/popular-post2.png"
              alt="Popular Post Image"
              class="w-1/3 object-cover"
            />
            <div class="w-2/3 p-3 space-y-3">
              <h1 class="font-semibold text-xl">Post Title</h1>
              <p class="text-gray-400 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>
              <div class="flex justify-between">
                <p class="text-xs text-blue-500">Itoshi Asuka</p>
                <p class="text-xs text-blue-500">22 Mei 2021</p>
              </div>
            </div>
          </div>
          <div class="flex bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="../assets/images/popular-post3.png"
              alt="Popular Post Image"
              class="w-1/3 object-cover"
            />
            <div class="w-2/3 p-3 space-y-3">
              <h1 class="font-semibold text-xl">Post Title</h1>
              <p class="text-gray-400 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>
              <div class="flex justify-between">
                <p class="text-xs text-blue-500">Itoshi Asuka</p>
                <p class="text-xs text-blue-500">22 Mei 2021</p>
              </div>
            </div>
          </div>
        </div>
        <h1 class="text-xl lg:text-2xl font-semibold pt-8" id="title-2">
          Category
        </h1>
        <div class="border border-blue-500 bg-blue-500 mt-5 rounded-lg">
          <div class="p-3 text-white">Technology(20)</div>
          <div class="p-3 bg-white border border-blue-500">Sains(20)</div>
          <div class="p-3 bg-white border border-blue-500">Computer(18)</div>
          <div class="p-3 bg-white border border-blue-500">Network(15)</div>
          <div class="p-3 bg-white border border-blue-500 rounded-b-lg">
            Digital(15)
          </div>
        </div>
        <h1 class="text-xl lg:text-2xl font-semibold pt-8" id="title-3">
          Tags
        </h1>
        <div class="mt-5 space-y-3">
          <a
            href="#"
            class="
              py-2
              px-7
              rounded-full
              border-2 border-blue-500
              inline-block
              bg-blue-100
            "
            >Tech</a
          >
          <a
            href="#"
            class="py-2 px-7 rounded-full border-2 border-blue-500 inline-block"
            >Coding</a
          >
          <a
            href="#"
            class="py-2 px-7 rounded-full border-2 border-blue-500 inline-block"
            >Smartphone</a
          >
          <a
            href="#"
            class="py-2 px-7 rounded-full border-2 border-blue-500 inline-block"
            >Website</a
          >
          <a
            href="#"
            class="py-2 px-7 rounded-full border-2 border-blue-500 inline-block"
            >Gaming</a
          >
          <a
            href="#"
            class="py-2 px-7 rounded-full border-2 border-blue-500 inline-block"
            >Music</a
          >
        </div>
      </aside>
    </div>
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
export default {
  components: { Hero },
};
</script>

<style>
</style>