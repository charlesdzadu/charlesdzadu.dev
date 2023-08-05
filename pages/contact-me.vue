<template>
	<div class="w-full h-full  flex">
		<SidebarBase class="hidden lg:flex">
			<div class="flex flex-col ">
				<div class="flex justify-start items-center gap-3 py-3 text-white pl-4">
					<i class="ri-arrow-down-s-fill"></i>
					<h2>contact-me</h2>
				</div>
				<LineH></LineH>
				<div class="px-4 py-5 flex flex-col gap-2">
					<a class="flex gap-2 hover:text-white transition-colors" href="mailto:charles@dzadu.dev">
						<i class="ri-mail-fill"></i>
						<span>charles@dzadu.dev</span>
					</a>
					<a class="flex gap-2 hover:text-white transition-colors" href="tel:+22892569918">
						<i class="ri-phone-fill"></i>
						<span>(228) 92 56 99 18</span>
					</a>
				</div>
			</div>
			<div class="flex flex-col ">
				<LineH></LineH>
				<div class="flex justify-start items-center gap-3 py-3 text-white pl-4">
					<i class="ri-arrow-down-s-fill"></i>
					<h2>find-me-also-in</h2>
				</div>
				<LineH></LineH>
				<div class="px-4 py-4 flex flex-col gap-2">
					<a class="flex gap-2 hover:text-white transition-colors" href="https://twitter.com/charlesdzadu">
						<i class="ri-share-box-line"></i>
						<span>Twitter</span>
					</a>
					<a class="flex gap-2 hover:text-white transition-colors" href="">
						<i class="ri-share-box-line"></i>
						<span>Youtube</span>
					</a>
					<a class="flex gap-2 hover:text-white transition-colors" href="">
						<i class="ri-share-box-line"></i>
						<span>Instagram</span>
					</a>
					<a class="flex gap-2 hover:text-white transition-colors" href="">
						<i class="ri-share-box-line"></i>
						<span>Github</span>
					</a>
				</div>
			</div>
		</SidebarBase>
		<div class="w-full ">
			<div class="flex flex-col h-full">
				<div class="hidden lg:flex justify-start items-center gap-5 pl-4">
					<h2 class="py-3">contact-form</h2>
					<i class="ri-close-line"></i>
					<LineV></LineV>
				</div>
				<LineH class="hidden lg:flex"></LineH>

				<div class="w-full h-full  flex justify-between">
					<div class="w-full lg:w-5/12 flex justify-center items-start lg:items-center ">
						<form action="" class="w-full">
							<div class="flex flex-col gap-4 w-full px-8 lg:px-20">
								<div class="flex flex-col gap-2">
									<label for="name">_name: </label>
									<input type="text" name="name" v-model="data.name"
										class="w-full h-[50px] border border-line focus:border-gray  rounded-md px-3 bg-primary-dark outline-none transition-all  focus:ring-2 focus:ring-gray focus:ring-opacity-30" />
								</div>

								<div class="flex flex-col gap-2">
									<label for="name">_email: </label>
									<input type="email" name="email" v-model="data.email"
										class="w-full h-[50px] border border-line focus:border-gray  rounded-md p-3 bg-primary-dark outline-none transition-all  focus:ring-2 focus:ring-gray focus:ring-opacity-30" />
								</div>

								<div class="flex flex-col gap-2">
									<label for="name">_message: </label>
									<textarea name="message" id="" rows="5" v-model="data.message"
										class="w-full  border border-line focus:border-gray  rounded-md p-3 bg-primary-dark outline-none transition-all  focus:ring-2 focus:ring-gray focus:ring-opacity-30">
								</textarea>
								</div>

								<div>
									<button class="px-5 py-2 bg-line rounded-md hover:text-white transition-colors">
										send-message
									</button>
								</div>
							</div>
						</form>
					</div>
					<LineV></LineV>
					<div class="hidden lg:flex w-7/12 justify-center items-center ">
						<div class="flex flex-col  w-full px-20">
							<div>
								<span class="number">1</span> <span class="text-purple">const</span> <span
									class="text-blue-dark">button</span> <span class="text-purple">=</span> <span
									class="text-blue-dark">document</span>.<span
									class="text-blue-dark">querySelector</span>(<span
									class="text-orange">'#sendBtn'</span>);
							</div>
							<div>
								<span class="number">2</span>
							</div>
							<div>
								<span class="number">3</span> <span class="text-purple">const</span> <span
									class="text-blue-dark">message</span> <span class="text-purple">=</span> {
							</div>
							<div>
								<span class="number">4</span> <span class="pl-5"><span class="text-blue-dark">name</span>:
									<span class="text-orange">"{{ data.name }}"</span>,</span>
							</div>
							<div>
								<span class="number">5</span> <span class="pl-5"><span class="text-blue-dark">email</span>:
									<span class="text-orange">"{{ data.email }}"</span>,</span>
							</div>
							<div>
								<span class="number">6</span> <span class="pl-5"><span
										class="text-blue-dark">message</span>: <span class="text-orange">"{{ data.message
										}}"</span>,</span>
							</div>
							<div>
								<span class="number">7</span> <span class="pl-5"><span class="text-blue-dark">date</span>:
									<span class="text-orange">"{{ data.date }}"</span> </span>
							</div>
							<div>
								<span class="number">8</span> }

							</div>
							<div>
								<span class="number">9</span>
							</div>
							<div>
								<span class="number">10</span> <span class="text-blue-dark">button</span>.<span
									class="text-blue-dark">addEventListener</span>(<span class="text-orange">'click'</span>,
								() <span class="text-purple">=></span> {
							</div>
							<div>
								<span class="number">11</span> <span class="pl-5"><span
										class="text-blue-dark">form</span>.<span class="text-blue-dark">send</span>(<span
										class="text-blue-dark">message</span>);</span>
							</div>
							<div>
								<span class="number">12</span> })
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>



<script setup>

let data = reactive({
	name: '',
	email: '',
	message: '',
	date: '',
})
</script>

<style>
.number {
	color: #607B96;
	padding-right: 24px;
}
</style>
