<template>
  <hero menu="Blog" />
  <main class="py-5 lg:py-10 bg-tp-white">
    <div
      class="
        lg:container
        flex flex-col
        lg:flex-row lg:space-x-10 lg:mx-auto
        px-5
        lg:px-10
      "
    >
      <div class="lg:w-8/12 space-y-5 lg:space-y-10">
        <div
          class="w-full h-60 md:h-96 p-5 md:p-10 flex items-end rounded-xl"
          style="
            background-image: url('src/assets/images/card-blog4.png');
            background-size: cover;
            background-repeat: no-repeat;
          "
        >
          <div>
            <h1 class="text-white md:text-2xl font-bold">
              Having a trouble with an anxiety?
            </h1>
            <p class="text-white text-sm md:text-base py-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <router-link
              to="/blog/having-a-trouble-with-an-anxiety"
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
              >Read More</router-link
            >
          </div>
        </div>
        <div
          class="
            w-full
            flex flex-col
            space-y-5
            lg:space-x-10 lg:space-y-0 lg:flex-row
          "
        >
          <div
            class="
              p-5
              md:px-10 md:py-12
              space-y-24
              md:space-y-48
              2xl:space-y-96
              text-white
              rounded-xl
            "
            style="
              background-image: url('src/assets/images/card-blog.png');
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
              space-y-24
              md:space-y-48
              2xl:space-y-96
              text-white
              rounded-xl
            "
            style="
              background-image: url('src/assets/images/card-blog2.png');
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
        <div
          class="
            w-full
            flex flex-col
            space-y-5
            lg:space-x-10 lg:space-y-0 lg:flex-row
          "
        >
          <div
            class="
              p-5
              md:px-10 md:py-12
              space-y-24
              md:space-y-48
              2xl:space-y-96
              text-white
              rounded-xl
            "
            style="
              background-image: url('src/assets/images/card-blog3.png');
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
              space-y-24
              md:space-y-48
              2xl:space-y-96
              text-white
              rounded-xl
            "
            style="
              background-image: url('src/assets/images/card-blog5.png');
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
        <div class="flex justify-center py-8 lg:py-14">
          <div class="w-full lg:w-auto lg:inline-block">
            <div
              class="
                bg-white
                flex
                justify-between
                space-x-5
                lg:space-x-14
                py-3
                px-3
                lg:px-5
                rounded-md
              "
            >
              <a href="#" class="flex items-center space-x-3">
                <img
                  src="../assets/images/arrow-left.svg"
                  alt=""
                  class="w-auto"
                />
                <p class="text-sm hidden lg:block">Prev</p>
              </a>
              <div class="flex items-center space-x-5">
                <a href="#" class="font-bold">1</a>
                <a href="#" class="font-bold">2</a>
                <a href="#" class="font-bold">3</a>
                <a
                  href="#"
                  class="
                    font-bold
                    inline-block
                    bg-blue-500
                    w-8
                    h-8
                    rounded-full
                    text-white
                    flex
                    justify-center
                    items-center
                  "
                  >4</a
                >
                <a href="#" class="font-bold">5</a>
                <a href="#" class="font-bold">6</a>
                <a href="#" class="font-bold">7</a>
              </div>
              <a href="#" class="flex items-center lg:space-x-3">
                <p class="text-sm hidden lg:block">Next</p>
                <img src="../assets/images/arrow-right.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <aside class="lg:w-4/12 py-10 md:py-0">
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
        <h1 class="lg:text-2xl font-semibold pt-8" id="title-1">Popular</h1>
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
        <h1 class="lg:text-2xl font-semibold pt-8" id="title-2">Category</h1>
        <div class="border border-blue-500 bg-blue-500 mt-5 rounded-lg">
          <div class="p-3 text-white">Technology(20)</div>
          <div class="p-3 bg-white border border-blue-500">Sains(20)</div>
          <div class="p-3 bg-white border border-blue-500">Computer(18)</div>
          <div class="p-3 bg-white border border-blue-500">Network(15)</div>
          <div class="p-3 bg-white border border-blue-500 rounded-b-lg">
            Digital(15)
          </div>
        </div>
        <h1 class="lg:text-2xl font-semibold pt-8" id="title-3">Tags</h1>
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