export default function page() {
	return (
		<div className="min-h-screen">
			<div className="text-white-purple">
				<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-20 md:py-28 lg:py-36 bg-black h-screen flex justify-center items-center">
					<div>
						<h1 className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bomstadBlack">
							A{" "}
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								Brand
							</span>
							, A{" "}
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								Website
							</span>{" "}
							& A{" "}
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								Digital Product
							</span>{" "}
							walk into an agency.
						</h1>
						<p className="py-10 text-gray-400 text-center text-xl">
							An integrated, digital-first approach to bringing
							brands and their customers closer together.
						</p>
					</div>{" "}
				</div>
			</div>
			<div className="text-black">
				<div className="px-4 md:px-20 lg:px-40 2xl:px-48 py-10  md:grid grid-cols-4 gap-3">
					<div className="flex flex-col gap-7 col-span-3">
						<div className="capitalize text-2xl md:text-3xl lg:text-4xl font-bomstad">
							Customer-focused digital <br />
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								brands that resonate.
							</span>
						</div>
						<div className="max-w-2xl">
							<b>A brand is like a narrative.</b> It exists to
							convey why you&apos;re here and why you matter in a
							way that resonates with your audience. That&apos;s
							our starting point. Once your story is clear, we
							build the elements that bring it to life—colors,
							typefaces, logos, icons, photos, tone of voice, and
							more.
							<p className="pt-2">
								And that&apos;s pretty much it. Blend it all
								together, and you&apos;ll have a digital-first
								brand that breathes life into your product and
								marketing across every touchpoint with your
								audience.
							</p>
						</div>
					</div>
					<div className="text-nowrap">
						<div className="text-xl text-primary pt-7 md:pt-0 font-semibold">
							EXCLUSIVE PICKS
						</div>
						<div className="flex flex-col gap-4 pt-3 text-xl">
							<li>Brand Story</li>
							<li>Brand Strategy</li>
							<li>Visual Identity</li>
							<li>Verbal Identity</li>
							<li>Brand Guidelines</li>
							<li>Delivery & Roll-Out</li>
						</div>
					</div>
				</div>

				<div className="px-4 md:px-20 lg:px-40 2xl:px-48 py-10 md:grid grid-cols-4 gap-3">
					<div className="flex flex-col gap-7 col-span-3">
						<div className="capitalize text-2xl md:text-3xl lg:text-4xl font-bomstad">
							Story-Driven Marketing <br />
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								Websites That Drive Sales.
							</span>
						</div>
						<div className="max-w-2xl">
							<b>Few will acknowledge it</b>, but truly great
							websites are all about persuasion. Your website
							should be fast, visually appealing, and capture the
							enduring, unique spirit of your brand. However, to
							be exceptional, it must also motivate visitors to
							take action—whether that&apos;s purchasing your
							products, joining your team, investing in your
							company, or a fourth thing we&apos;re still
							crafting.
							<p className="pt-2">
								Our goal is to ensure that every website we
								create is fast-loading, visually appealing, and
								true to your brand. More importantly, it will
								effectively encourage visitors to take action.
							</p>
						</div>
					</div>
					<div className="text-nowrap">
						<div className="text-xl text-primary pt-7 md:pt-0 font-semibold">
							POSSIBLY INCLUDES
						</div>
						<div className="flex flex-col gap-4 pt-3 text-xl">
							<li>Research & Content Strategy</li>
							<li>Sitemaps & User Flows</li>
							<li>Moodboard/Storyboard</li>
							<li>UI/UX Design</li>
							<li>Mockups/Prototypes</li>
							<li>Design System</li>
							<li>Development & Hosting</li>
						</div>
					</div>
				</div>
				<div className="px-4 md:px-20 lg:px-40 2xl:px-48 py-10 md:grid grid-cols-4 gap-3">
					<div className="flex flex-col gap-7 col-span-3">
						<div className="capitalize text-2xl md:text-3xl lg:text-4xl font-bomstad">
							Digital solutions that <br />
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								fulfill your commitments.
							</span>
						</div>
						<div className="max-w-2xl">
							<b>
								Imagine your product as a compact yet impactful
								machine
							</b>
							, residing in people&apos;s pockets, on their desks,
							wrists, or in their hands, designed to help them
							accomplish real-world tasks. Beyond that, it&apos;s
							often where your most loyal customers interact with
							you the most. For these users, your product and your
							brand become essentially one and the same.
							<p className="pt-2">
								When we say &apos;brand-led&apos; products, we
								mean designing beyond functionality. We create
								products that act as strong brand ambassadors,
								enhancing your connection with users each time
								they engage with it.
							</p>
						</div>
					</div>
					<div className="text-nowrap">
						<div className="text-xl text-primary pt-7 md:pt-0 font-semibold">
							BEYOND THE CLICHÉS
						</div>
						<div className="flex flex-col gap-4 pt-3 text-xl">
							<li>Motion/Graphic Design</li>
							<li>Photo & Video Editing</li>
							<li>Brand Experiences</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
