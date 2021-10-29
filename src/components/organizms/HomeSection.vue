<template>
    <section class=" bg-gradient-to-tr from-tp-blue-1 to-tp-blue-2 lg:bg-tp-white py-20 lg:pb-30 lg:pt-44 w-full" id="home">
			<div
				class="
					lg:container lg:mx-auto
					px-5
					lg:px-10
					flex
					lg:justify-between lg:flex-row lg:items-center
					flex-col-reverse
				"
			>
				<div class="pt-10">
					<h3 class="font-bold text-yellow-400 lg:text-3xl">Hi, Welcome to</h3>
					<h1
						class="
							font-bold
							text-white
							lg:text-black
							text-2xl
							lg:text-5xl
							pt-2
							uppercase
						"
					>
						Tepokol Team
					</h1>
					<p class="max-w-xl text-white lg:text-black lg:text-xl pt-4">
						Kami adalah sebuah kelompok untuk membangun dan memamerkan
						karya-karya anak teknologi informasi yang aktif, inovatif dan
						komunikatif serta meningkatkan pelayanan pengabdian yang lebih baik.
					</p>
				</div>
				<img
					src="../../assets/images/ilustration.svg"
					alt="Ilustration"
					class="hidden lg:block w-60 mx-auto lg:mx-0 lg:w-1/3"
				/>
			</div>
		</section>
</template>

<script>
export default {
    name: 'HomeSection'
}
</script>

<style scoped>
.gallery-text {
	position: absolute;
	transition: all 0.3s;
	left: 1.5rem;
	bottom: -10rem;
	text-shadow: -2px 3px 8px rgba(0, 0, 0, 0.23);
}

#gallery-1:hover .gallery-text,
#gallery-2:hover .gallery-text,
#gallery-3:hover .gallery-text,
#gallery-4:hover .gallery-text {
	bottom: 1.5rem;
}

/* Team */
#rectangle-2 {
	left: -24rem;
}

/* Event */
#rectangle-3 {
	right: -30rem;
}

/* Gallery */
#particle-6 {
	position: absolute;
	top: 3rem;
	left: 30rem;
}

#particle-7 {
	position: absolute;
	top: 8rem;
	right: 18rem;
}

/* Blog */
#particle-8 {
	position: absolute;
	top: 10rem;
	left: 24rem;
}

#particle-9 {
	position: absolute;
	top: 3rem;
	right: 28rem;
}

#rectangle-5 {
	position: absolute;
	bottom: 0rem;
	left: -18rem;
	transform: rotate(-30deg);
}

#rectangle-6 {
	position: absolute;
	top: 5rem;
	right: -30rem;
	transform: rotate(-25deg);
}

/* Screen 768px */
@media (min-width: 768px) {
	#rectangle-2 {
		left: -28rem;
	}
}

/* Screen 1024px */
@media (min-width: 1024px) {
	/* Home */
	#home {
		background-image: url("../../assets/images/wave.png");
		background-size: auto;
		background-position: -1px;
		background-repeat: no-repeat;
		background-position-x: right;
	}

	.gallery-text {
		left: 2.5rem;
	}

	#gallery-1:hover .gallery-text,
	#gallery-2:hover .gallery-text,
	#gallery-3:hover .gallery-text,
	#gallery-4:hover .gallery-text {
		bottom: 2.5rem;
	}
}
</style>