<template>
    <div class="flex justify-center py-8 lg:py-14">
        <div class="w-full lg:w-auto lg:inline-block">
            <div class="
									bg-white
									flex
									justify-between
									space-x-5
									lg:space-x-14
									py-3
									px-3
									lg:px-5
									rounded-md
								">
                <a href="#" class="flex items-center space-x-3">
                    <img src="../../assets/images/arrow-left.svg" alt="" class="w-auto" />
                    <p class="text-sm hidden lg:block">Prev</p>
                </a>
                <div class="flex items-center space-x-5">
                    <a href="#" class="font-bold">1</a>
                    <a href="#" class="font-bold">2</a>
                    <a href="#" class="font-bold">3</a>
                    <a href="#" class="
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
										">4</a>
                    <a href="#" class="font-bold">5</a>
                    <a href="#" class="font-bold">6</a>
                    <a href="#" class="font-bold">7</a>
                </div>
                <a href="#" class="flex items-center lg:space-x-3">
                    <p class="text-sm hidden lg:block">Next</p>
                    <img src="../../assets/images/arrow-right.svg" alt="" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pagination'
    }
</script>