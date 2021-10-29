<template>
    <section
			class="py-12 lg:py-28 relative z-30 bg-tp-white-2 overflow-hidden w-full"
		>
			<img
				src="../../assets/images/particle.png"
				alt="particle"
				class="
					absolute
					transform
					scale-75
					md:scale-100
					lg:scale-100
					right-20
					lg:right-32
				"
				id="particle-1"
			/>
			<img
				src="../../assets/images/rectangle_small.png"
				alt="Rectangle"
				class="absolute -bottom-10 -right-72 z-10"
				id="rectangle-1"
			/>
			<div
				class="
					lg:container lg:mx-auto
					px-5
					lg:px-10
					flex
					lg:justify-between lg:flex-row lg:items-center
					flex-col
				"
			>
				<img
					src="../../assets/images/ilustration2.svg"
					alt="Ilustration"
					class="w-60 mx-auto hidden lg:block lg:mx-0 lg:w-1/3"
				/>
				<div class="pt-5 lg:pt-0">
					<h3
						class="font-medium uppercase text-yellow-400 text-3xl lg:text-3xl"
					>
						Tepokol Team
					</h3>
					<h1 class="font-semibold text-xl lg:text-4xl uppercase">
						Politeknik Negeri Jember
					</h1>
					<p class="max-w-xl lg:text-lg opacity-80 lg:pt-9 text-gray-500">
						Examples of anxiety disorders include generalized anxiety disorder,
						social anxiety disorder (social phobia), specific phobias and
						separation anxiety disorder. You can have more than one anxiety
						disorder. Sometimes anxiety results from a medical condition that
						needs treatment.
					</p>
					<div class="flex">
						<div
							class="
								uppercase
								py-5
								px-10
								border-b-4 border-yellow-400
								text-yellow-400
							"
						>
							Visi
						</div>
						<div class="uppercase py-5 px-10 border-b-4 border-gray-300">
							Misi
						</div>
					</div>
					<p class="max-w-xl lg:text-lg text-gray-500 opacity-80 pt-5">
						Examples of anxiety disorders include generalized anxiety disorder.
					</p>
				</div>
			</div>
		</section>
</template>

<script>
export default {
    name: 'AboutSection'
}
</script>