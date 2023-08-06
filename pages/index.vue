<template>
	<div class="w-full h-full flex p-4">
		<div class="hidden lg:flex lg:w-[300px] ">

		</div>
		<div class="flex justify-center items-center gap-24 px-5">
			<div>
				<div class="flex flex-col gap-3">

					<h2 class="text-white">Hi all. I am</h2>
					<h1 class="text-6xl text-white leading-tight">Charles DZADU</h1>
					<h3 class="text-green-light lg:text-purple text-xl lg:text-2xl flex "> <span>> </span> <span
							class="pl-4 leading-tight">Fullstack Developper, UX/UI
							Designer</span></h3>
				</div>
				<div class="h-40 lg:h-48">

				</div>
				<div>
					<div class="hidden lg:flex lg:flex-col">
						<span>// Complete the game to continue</span>
						<span>// You can also check my Github page </span>
					</div>
					<div class="flex lg:hidden">
						<span>// Find my profile on github</span>
					</div>
					<br>
					<a href="https://github.com/charlesdzadu" class="text-white"> <span class="text-purple">const </span>
						<span class="text-green-light">githubLink</span> = <span
							class="text-orange">"https://github.com/charlesdzadu"</span> </a>
				</div>
			</div>
			<div class="hidden lg:flex">
				<GamesTicTacToe></GamesTicTacToe>
			</div>
		</div>
	</div>
</template>

<script setup>


</script>
