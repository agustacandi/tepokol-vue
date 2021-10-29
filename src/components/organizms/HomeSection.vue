<template>
    <section class=" bg-gradient-to-tr from-tp-blue-1 to-tp-blue-2 lg:bg-tp-white py-20 lg:pb-44 lg:pt-44 w-full" id="home">
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