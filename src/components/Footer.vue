<template>
    <footer class="py-12 lg:py-14 bg-tp-dark">
			<div class="container mx-auto px-10">
				<div
					class="
						flex flex-col
						lg:flex-row
						justify-center
						flex-nowrap
						lg:space-x-5
						text-white
					"
				>
					<div class="flex justify-center lg:justify-left space-x-4">
						<a href="/" class="text-sm lg:text-lg">Home</a>
						<a href="/" class="text-sm lg:text-lg">Profile</a>
						<a href="/" class="text-sm lg:text-lg">Blog</a>
						<a href="/" class="text-sm lg:text-lg">Contact Us</a>
					</div>
					<div class="flex justify-center lg:justify-left space-x-4">
						<a href="/" class="text-sm lg:text-lg">Polije</a>
						<a href="/" class="text-sm lg:text-lg">TI Polije</a>
						<a href="/" class="text-sm lg:text-lg">BEM Polije</a>
					</div>
				</div>
				<div class="flex justify-center space-x-5 pt-5">
					<a
						href="/"
						class="
							flex
							justify-center
							items-center
							h-10
							w-10
							text-center
							bg-white
							rounded-full
						"
						><img
							src="./../assets/images/instagram.svg"
							alt="Instagram Icon"
							class="w-5 h-5"
					/></a>
					<a
						href="/"
						class="
							flex
							justify-center
							items-center
							h-10
							w-10
							text-center
							bg-white
							rounded-full
						"
						><img
							src="./../assets/images/youtube.svg"
							alt="youtube Icon"
							class="w-5 h-5"
					/></a>
					<a
						href="/"
						class="
							flex
							justify-center
							items-center
							h-10
							w-10
							text-center
							bg-white
							rounded-full
						"
						><img
							src="./../assets/images/envelope.svg"
							alt="Envelope Icon"
							class="w-5 h-5"
					/></a>
				</div>
				<p class="text-center text-sm lg:text-lg text-gray-500 pt-10">
					© Copyright 2021 Tepokol Team
				</p>
			</div>
		</footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>