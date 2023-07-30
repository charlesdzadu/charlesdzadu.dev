<template>
	<div class="w-full h-full  flex">
		<SidebarBase>
			<div class="flex h-full">
				<div class="w-[90px] flex flex-col gap-8 py-6">
					<button class="hover:text-white transition-colors">
						<i class="ri-terminal-box-fill ri-xl"></i>
					</button>
					<button class="hover:text-white transition-colors">
						<i class="ri-user-4-fill ri-xl"></i>
					</button>
					<button class="hover:text-white transition-colors">
						<i class="ri-gamepad-fill ri-xl"></i>
					</button>

				</div>
				<LineV></LineV>
				<div class="flex flex-col w-full">
					<div class="flex justify-start items-center gap-3 py-3 text-white pl-4">
						<i class="ri-arrow-down-s-fill"></i>
						<h2>personal-info</h2>
					</div>
					<LineH></LineH>
					<div class="px-4 py-5 flex flex-col gap-2">
						<div class="flex flex-col">
							<button class="flex gap-2 group">
								<i class="ri-arrow-right-s-line "></i>
								<i class="ri-folder-3-fill text-orange-dark"></i>
								<span class="group-hover:text-white transition-colors">bio</span>
							</button>

						</div>
						<button class="flex gap-2 group">
							<i class="ri-arrow-right-s-line"></i>
							<i class="ri-folder-3-fill text-green-light"></i>
							<span class="group-hover:text-white transition-colors">interest</span>
						</button>
						<div class="flex flex-col gap-2">
							<button class="flex gap-2 group">
								<i class="ri-arrow-right-s-line group-hover:text-white transition-colors rotate-90"></i>
								<i class="ri-folder-3-fill text-blue-dark"></i>
								<span class="group-hover:text-white transition-colors">education</span>
							</button>
							<div class="flex flex-col gap-2 pl-6">
								<a href="" class="flex gap-2">
									<i class="ri-markdown-fill"></i>
									<span>high-school</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SidebarBase>
		<div class="w-full ">
			<div class="flex flex-col h-full">
				<div class="flex justify-start items-center gap-5 pl-4">
					<h2 class="py-3">personal-info</h2>
					<i class="ri-close-line"></i>
					<LineV></LineV>
				</div>
				<LineH></LineH>

				<div class="w-full h-full  flex justify-between">
					<div class="w-full flex justify-start items-start p-6">
						<div class="flex flex-col">
							<span><span class="mr-16">1</span>/** </span>
							<span><span class="mr-16">2</span>* What i am going to say. I'm another good dev</span>
							<span><span class="mr-16">3</span>* tring to make world better with code and coffee</span>
							<span><span class="mr-16">4</span>*/</span>
						</div>
					</div>
					<div class="flex">
						<LineV></LineV>
						<div class="h-3 w-[40px] bg-gray m-2"></div>
						<LineV></LineV>
					</div>
					<div class="w-full flex justify-start items-start p-6">
						<CodeSnippets></CodeSnippets>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
