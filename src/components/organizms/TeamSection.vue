<template>
    <section class="py-12 lg:py-28 relative w-full bg-tp-white overflow-hidden">
			<img
				src="../../assets/images/particle2.png"
				alt=""
				class="absolute transform scale-75 lg:top-20 right-20 lg:right-96"
				id="particle-2"
			/>
			<img
				src="../../assets/images/particle3.png"
				alt=""
				class="absolute top-60 left-40 lg:left-80"
				id="particle-3"
			/>
			<img
				src="../../assets/images/rectangle.png"
				alt="Rectangle"
				id="rectangle-2"
				class="
					absolute
					transform
					rotate-6
					lg:rotate-90
					top-96
					lg:top-28
					-left-80
					z-10
				"
			/>
			<div class="lg:container lg:mx-auto px-5 lg:px-10">
				<h3
					class="
						lg:text-center
						font-medium
						lg:text-2xl
						text-yellow-400
						tracking-wider
					"
				>
					Our Team
				</h3>
				<h1
					class="
						lg:text-center
						font-semibold
						text-xl
						lg:text-3xl
						tracking-wider
					"
				>
					Meet Our Team
				</h1>
				<p class="lg:text-center text-gray-500">
					Lorem ipsum dolor sit amet, consectetur a dipiscing elit. Nam ut
					tortor iaculis ipsum <br />suscipit aliquam eget eu ante
				</p>
				<div
					class="
						flex flex-col
						space-y-10
						lg:space-y-0
						pt-10
						items-center
						lg:flex-row lg:justify-center lg:space-x-20 lg:pt-32
					"
				>
					<div
						class="
							md:w-10/12
							lg:w-auto
							p-10
							w-72
							text-center
							rounded-xl
							shadow-xl
							bg-white
							relative
							z-30
						"
					>
						<img src="../../assets/images/orang.png" alt="Orang" class="mx-auto" />
						<h3 class="pt-5 font-semibold text-yellow-400">Hikari Rei</h3>
						<p class="pb-5 text-gray-600">Wakil Ketua HMJ I 2021</p>
						<div class="flex md:justify-center md:space-x-10 justify-around">
							<a href="/"
								><img src="../../assets/images/facebook.svg" alt="Facebook Icon"
							/></a>
							<a href="/"
								><img src="../../assets/images/twitter.svg" alt="Twitter Icon"
							/></a>
							<a href="/"
								><img src="../../assets/images/linkedin.svg" alt="Linkedin Icon"
							/></a>
						</div>
					</div>
					<div
						class="
							md:w-10/12
							lg:w-auto
							p-10
							w-72
							text-center
							rounded-xl
							shadow-xl
							bg-white
							relative
							z-30
							lg:transform lg:-translate-y-16
						"
					>
						<img src="../../assets/images/orang2.png" alt="Orang" class="mx-auto" />
						<h3 class="pt-5 font-semibold text-yellow-400">Itoshi Asuka</h3>
						<p class="pb-5 text-gray-600">Ketua HMJ 2021</p>
						<div class="flex md:justify-center md:space-x-10 justify-around">
							<a href="/"
								><img src="../../assets/images/facebook.svg" alt="Facebook Icon"
							/></a>
							<a href="/"
								><img src="../../assets/images/twitter.svg" alt="Twitter Icon"
							/></a>
							<a href="/"
								><img src="../../assets/images/linkedin.svg" alt="Linkedin Icon"
							/></a>
						</div>
					</div>
					<div
						class="
							md:w-10/12
							lg:w-auto
							p-10
							w-72
							text-center
							rounded-xl
							shadow-xl
							bg-white
							relative
							z-30
						"
					>
						<img src="../../assets/images/orang3.png" alt="Orang" class="mx-auto" />
						<h3 class="pt-5 font-semibold text-yellow-400">Miya Mizu</h3>
						<p class="pb-5 text-gray-600">Wakil Ketua HMJ II 2021</p>
						<div class="flex md:justify-center md:space-x-10 justify-around">
							<a href="/"
								><img src="../../assets/images/facebook.svg" alt="Facebook Icon"
							/></a>
							<a href="/"
								><img src="../../assets/images/twitter.svg" alt="Twitter Icon"
							/></a>
							<a href="/"
								><img src="../../assets/images/linkedin.svg" alt="Linkedin Icon"
							/></a>
						</div>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
export default {
    name: 'TeamSection'
}
</script>