<template>
    <nav
        class="
            fixed
            bg-white
            lg:bg-transparent
            shadow-xl
            lg:shadow-none
            w-full
            top-0
            z-50
        "
        :class="scrollTop > 50 ? 'lg:bg-tp-white lg:shadow-xl' : ''"
        id="navbar"
        @scroll="handleScroll"
        @click="log"
    >
        <div
            class="
                lg:container lg:mx-auto
                px-5
                lg:px-10
                py-5
                flex
                justify-between
                items-center
            "
        >
            <div class="font-bold lg:text-2xl text-white uppercase" :style="{color: navbarColors[$route.path]}" id="nav-title">
                Tepokol
            </div>
            <div class="space-x-10 hidden lg:flex" id="nav-items">
                <router-link to="/" class="font-medium">Home</router-link>
                <router-link to="/about" class="font-medium">About</router-link>
                <router-link to="/event" class="font-medium">Event</router-link>
                <router-link to="/gallery" class="font-medium">Gallery</router-link>
                <router-link to="/blog" class="font-medium">Blogs</router-link>
                <router-link to="/contact" class="font-medium">Contact</router-link>
            </div>
            <img
                src="./../assets/images/navbar-button.svg"
                alt=""
                class="w-5 h-5"
                id="nav-btn"
            />
        </div>
    </nav>
    <div
        class="fixed w-full h-screen z-40 transition-all duration-300 nav-res"
        id="nav-res"
    >
        <div class="relative w-10/12 h-full bg-white">
            <div class="w-full h-full">
                <div class="container px-5 flex flex-col pt-28 space-y-8">
                    <router-link to="/" class="font-medium text-sm">Home</router-link>
                    <router-link to="/about" class="font-medium text-sm">About</router-link>
                    <router-link to="/event" class="font-medium text-sm"
                        >Event</router-link
                    >
                    <router-link to="/gallery" class="font-medium text-sm">Gallery</router-link>
                    <router-link to="/blog" class="font-medium text-sm">Blogs</router-link>
                    <router-link to="/contact" class="font-medium text-sm">Contact</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            scrollTop: null,
            navbarColors: {
                '/' : 'black',
                '/about' : 'white',
                '/event' : 'white',
                '/gallery' : 'white',
                '/event/having-a-trouble-with-an-anxiety': 'white',
                '/blog/having-a-trouble-with-an-anxiety': 'white',
                '/blog' : 'white',
                '/contact' : 'white'
            }
        }
    },
    methods: {
        handleScroll(e) {
            this.scrollTop = document.documentElement.scrollTop
        },
        log() {
      console.log(this.path)
    },
    pathname() {
        this.path = this.$route.fullPath
    }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style>
#nav-title {
	color: black;
}

#navbar {
	transition: all 0.2s;
}

#navbar a.router-link-exact-active {
    position: relative;
}

#navbar a.router-link-exact-active::after {
    content: "";
	position: absolute;
	right: -0.5rem;
	bottom: 0;
	display: block;
	height: 0.2rem;
	width: 2.5rem;
	border-radius: 10rem;
	background-color: #fbbf24;
}

#nav-icon {
	display: block;
}

.nav-colored {
	background-color: white;
	color: black;
	box-shadow: 0px 0px 2.2px rgba(0, 0, 0, 0.02),
		0px 0.1px 5.3px rgba(0, 0, 0, 0.028), 0px 0.1px 10px rgba(0, 0, 0, 0.035),
		0px 0.2px 17.9px rgba(0, 0, 0, 0.042), 0px 0.4px 33.4px rgba(0, 0, 0, 0.05),
		0px 1px 80px rgba(0, 0, 0, 0.07);
}

.nav-res {
    background-color: rgba(0, 0, 0, 0.7);
	left: -1000rem;
}

#nav-res a.router-link-exact-active::after {
    content: "";
    display: block;
    height: 0.2rem;
    width: 2rem;
    border-radius: 10rem;
    background-color: #fbbf24;
}

.active {
	left: 0;
}

.hide {
	display: none;
}


.black {
	color: black !important;
}

@media (max-width: 768px) {
    #nav-title {
        color: black !important;
    }
}

@media (min-width: 1024px) {
	/* Navbar */

	#nav-icon {
		display: none;
	}

	#nav-icon-white {
		display: none;
	}
}
</style>