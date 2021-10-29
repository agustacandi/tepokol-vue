<template>
    <Hero menu="Event"/>
    <!-- Main -->
    <main class="py-10">
        <div class="
					lg:container
					flex flex-col
					lg:flex-row lg:space-x-10 lg:mx-auto
					px-5
					lg:px-10
				">
            <div class="lg:w-8/12 lg:space-y-6">
                <ListHeader url="/event/having-a-trouble-with-an-anxiety" image="../../assets/images/event.png" date="17" month="Mei" title="Post 1" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                <div class="
							w-full
							flex flex-col
							space-y-5
							lg:space-x-10 lg:space-y-0 lg:flex-row
							pb-5
						">
                    <EventCard url="/event/having-a-trouble-with-an-anxiety" image="../../assets/images/event.png" date="17" month="Mei" title="Post 2" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                    <EventCard url="/event/having-a-trouble-with-an-anxiety" image="../../assets/images/event.png" date="17" month="Mei" title="Post 3" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                </div>
                <div class="
							w-full
							flex flex-col
							space-y-5
							lg:space-x-10 lg:space-y-0 lg:flex-row
						">
                    <EventCard url="/event/having-a-trouble-with-an-anxiety" image="../../assets/images/event.png" date="17" month="Mei" title="Post 4" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                    <EventCard url="/event/having-a-trouble-with-an-anxiety" image="../../assets/images/event.png" date="17" month="Mei" title="Post 5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                </div>
                <Pagination />
            </div>
            <aside class="lg:w-4/12">
                <div class="
							flex
							items-center
							justify-between
							bg-white
							py-3
							px-5
							rounded-md
						" id="search-bar">
                    <input type="text" class="focus:outline-none text-gray-500" placeholder="Search..." />
                    <img src="./../assets/images/search.svg" alt="" class="cursor-pointer" />
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
</template>

<script>
import Hero from '../components/Hero.vue'
import ListHeader from '../components/events/ListHeader.vue'
import EventCard from '../components/events/EventCard.vue'
import EventMiniCard from '../components/events/EventMiniCard.vue'
import Pagination from '../components/Pagination.vue'
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
    name: 'Event',
    components: { 
        Hero,
        ListHeader,
        EventCard,
        EventMiniCard,
        Pagination
    },
}
</script>