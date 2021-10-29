<template>
    <Hero menu="Event" slug="having-a-trouble-with-an-anxiety"/>

    <!-- Content -->
    <main class="py-5 lg:py-10">
        <div class="
					lg:container
					flex flex-col
					lg:flex-row lg:space-x-10 lg:mx-auto
					px-5
					lg:px-10
				">
            <div class="lg:w-8/12 space-y-5 lg:space-y-5">
                <img src="../assets/images/card-blog4.png" alt="" class="w-full h-60 lg:h-96 rounded-xl">
                <div class="space-y-5">
                    <div class="space-y-5 text-gray-600">
                        <h1 class="text-2xl md:text-4xl text-black font-bold">
                            Having a trouble with an anxiety?
                        </h1>
                        <p>
                            Experiencing occasional anxiety is a normal part of life.
                            However, people with anxiety disorders frequently have intense,
                            excessive and persistent worry and fear about everyday
                            situations. Often, anxiety disorders involve repeated episodes
                            of sudden feelings of intense anxiety and fear or terror that
                            reach a peak within minutes (panic attacks).
                        </p>
                        <p>
                            These feelings of anxiety and panic interfere with daily
                            activities, are difficult to control, are out of proportion to
                            the actual danger and can last a long time. You may avoid places
                            or situations to prevent these feelings. Symptoms may start
                            during childhood or the teen years and continue into adulthood.
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
                </div>
            </div>
            <aside class="lg:w-4/12 pt-5 md:pt-0">
                <div class="
							w-full
							flex
							items-center
							justify-between
							bg-white
							py-3
							px-5
                            shadow-lg
							rounded-md
						" id="search-bar">
                    <input type="text" class="w-full focus:outline-none text-gray-500" placeholder="Search..." />
                    <img src="../assets/images/search.svg" alt="" class="cursor-pointer" />
                </div>
                <h1 class="lg:text-2xl font-semibold pt-8" id="title-1">
                    Recent Event
                </h1>
                <div class="mt-5 space-y-5">
                    <EventMiniCard v-for="recent in recents" :key="recent.index" :date="recent.date" :month="recent.month" :title="recent.title" :description="recent.description"/>
                </div>
                <h1 class="lg:text-2xl font-semibold pt-8" id="title-2">
                    Upcoming Event
                </h1>
                <div class="mt-5 space-y-5">
                    <EventMiniCard v-for="upcoming in upcomings" :key="upcoming.index" :date="upcoming.date" :month="upcoming.month" :title="upcoming.title" :description="upcoming.description"/>
                </div>
            </aside>
        </div>
    </main>

    <!-- Event -->
    <div class="py-10 md:pt-10 md:pb-20">
        <div class="lg:container lg:mx-auto px-5 lg:px-10">
            <h1 class="lg:text-center font-semibold text-xl lg:text-3xl" id="recent-post-title">
                Event
            </h1>
            <div class="
						flex flex-col
						space-y-5
						lg:space-y-0 lg:flex-row lg:space-x-10
						pt-10
					">
                <div class="
                    w-full
                    flex flex-col
                    space-y-5
                    lg:space-x-10 lg:space-y-0 lg:flex-row
                    pb-5
                ">
                    <router-link to="/event/having-a-trouble-with-an-anxiety" class="flex flex-col">
                        <div class="relative pb-5">
                            <img src="./../assets/images/wave_event.png" alt="" class="absolute" />
                            <div class="absolute top-8 left-10 font-bold text-2xl text-white">
                                <span class="text-4xl">17</span> mei
                            </div>
                            <img src="./../assets/images/event-1.png" alt="Event Image"
                                class="card-img w-full rounded-lg" />
                        </div>
                        <h1 class="text-gray-800 text-2xl font-bold">Event Title</h1>
                        <p class="text-gray-800 m-0" style="margin-top: 0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s
                        </p>
                    </router-link>
                    <router-link to="/event/having-a-trouble-with-an-anxiety" class="flex flex-col">
                        <div class="relative pb-5">
                            <img src="./../assets/images/wave_event.png" alt="" class="absolute" />
                            <div class="absolute top-8 left-10 font-bold text-2xl text-white">
                                <span class="text-4xl">17</span> mei
                            </div>
                            <img src="./../assets/images/event-2.png" alt="Event Image"
                                class="card-img w-full rounded-lg" />
                        </div>
                        <h1 class="text-gray-800 text-2xl font-bold">Event Title</h1>
                        <p class="text-gray-800 m-0" style="margin-top: 0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s
                        </p>
                    </router-link>
                    <router-link to="/event/having-a-trouble-with-an-anxiety" class="flex flex-col">
                        <div class="relative pb-5">
                            <img src="./../assets/images/wave_event.png" alt="" class="absolute" />
                            <div class="absolute top-8 left-10 font-bold text-2xl text-white">
                                <span class="text-4xl">17</span> mei
                            </div>
                            <img src="./../assets/images/event-3.png" alt="Event Image"
                                class="card-img w-full rounded-lg" />
                        </div>
                        <h1 class="text-gray-800 text-2xl font-bold">Event Title</h1>
                        <p class="text-gray-800 m-0" style="margin-top: 0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import EventMiniCard from '../components/events/EventMiniCard.vue'
export default {
    data() {
        return {
            recents: [{
                    date: '7',
                    month: 'Mei',
                    title: 'Title',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
                }, {
                    date: '7',
                    month: 'Mei',
                    title: 'Title',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
                }, {
                    date: '7',
                    month: 'Mei',
                    title: 'Title',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
                }
            ],
            upcomings: [{
                    date: '7',
                    month: 'Mei',
                    title: 'Title',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
                }, {
                    date: '7',
                    month: 'Mei',
                    title: 'Title',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
                }, {
                    date: '7',
                    month: 'Mei',
                    title: 'Title',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
                }
            ]
        }
    },
  components: { Hero, EventMiniCard },

}
</script>