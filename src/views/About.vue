<template>
    <Hero menu="About" />
    <!-- Main -->
    <main>
        <div class="lg:container lg:mx-auto px-5 py-20 lg:py-32 lg:px-10">
            <div>
                <h3 class="font-medium uppercase text-yellow-400 text-3xl lg:text-3xl">
                    Tepokol Team
                </h3>
                <h1 class="font-semibold text-xl lg:text-4xl uppercase">
                    Politeknik Negeri Jember
                </h1>
                <p class="lg:text-lg opacity-80 lg:pt-9 text-gray-500">
                    Examples of anxiety disorders include generalized anxiety disorder,
                    social anxiety disorder (social phobia), specific phobias and
                    separation anxiety disorder. You can have more than one anxiety
                    disorder. Sometimes anxiety results from a medical condition that
                    needs treatment.
                </p>
                <div class="flex">
                    <div
                        class="uppercase py-5 px-10 cursor-pointer"
                        :class="
                        active == 'visi'
                            ? `border-b-4 border-yellow-400
                        text-yellow-400 font-bold`
                            : `text-gray-500 opacity-80 border-b-4 border-gray-300`
                        "
                        @click="changeContent('visi')"
                    >
                        Visi
                    </div>
                    <div
                        class="uppercase py-5 px-10 cursor-pointer"
                        :class="
                        active == 'misi'
                            ? `border-b-4 border-yellow-400 font-bold
                        text-yellow-400`
                            : `text-gray-500 opacity-80 border-b-4 border-gray-300`
                        "
                        @click="changeContent('misi')"
                    >
                        Misi
                    </div>
                </div>
                <p
                class="max-w-xl lg:text-lg text-gray-500 opacity-80 pt-5"
                :class="active == 'visi' ? 'block' : 'hidden'"
                >
                Examples of anxiety disorders include generalized anxiety disorder.
                </p>
                <div
                class="max-w-xl lg:text-lg text-gray-500 opacity-80 pt-5"
                :class="active == 'misi' ? 'block' : 'hidden'"
                >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odit.</p>
                <p>Examples of anxiety disorders include generalized anxiety disorder.</p>
                <p>Examples of anxiety disorders include generalized anxiety disorder.</p>
                </div>
            </div>
            <h1 class="lg:text-center font-semibold text-xl lg:text-3xl pt-10" id="recent-post-title">
                Structure Organization
            </h1>
            <div class="
						flex flex-col
						space-y-10
						lg:space-y-0
						pt-10
						items-center
						lg:flex-row lg:justify-center lg:space-x-10
					">
                <Card v-for="team in teams" :key="team.index" :name="team.name" :image="image" :jabatan="team.jabatan" />
            </div>
            <div class="
						flex flex-col
						space-y-10
						lg:space-y-0
						pt-10
						items-center
						lg:flex-row lg:justify-center lg:space-x-10
					">
                <Card v-for="team in teams" :key="team.index" :name="team.name" :image="image" :jabatan="team.jabatan" />
            </div>
            <h1 class="
						lg:text-center
						font-semibold
						text-xl
						lg:text-3xl
						pt-10
						lg:pt-20
					" id="recent-post-title">
                Departement
            </h1>
            <div class="
						flex flex-col
						space-y-10
						lg:space-y-0
						pt-10
						items-center
						lg:flex-row lg:justify-center lg:space-x-10
					">
                <Card v-for="team in teams" :key="team.index" :name="team.name" :image="image" :jabatan="team.jabatan" />
            </div>
        </div>
    </main>
</template>

<script>
    import Hero from "../components/Hero.vue";
    import Card from "../components/Card.vue";

export default ({
    data() {
        return {
            teams: [{
                    name: 'Hikari Rei',
                    image: 'Tadek',
                    jabatan: 'Wakil Ketua HMJ II 2021'
                }, {
                    name: 'Itoshi Asuka',
                    image: 'Tadek',
                    jabatan: 'Ketua HMJ 2021'
                }, {
                    name: 'Miya Mizu',
                    image: 'Tadek',
                    jabatan: 'Wakil Ketua HMJ II 2021'
                },
            ],
            active: "visi",
        }
    },
  methods: {
    changeContent(data) {
      this.active = data;
    },
  },
    name: 'About',
    components: {
        Hero,
        Card,
    },
})
</script>
