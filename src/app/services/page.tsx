import ServiceSection from "@/components/ServiceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services",
};

export default function page() {
	const sections = [
		{
			title: "Customer-focused digital",
			highlightedText: "brands that resonate.",
			content: `<b>A brand is like a narrative.</b> It exists to convey why you&apos;re here and why you matter in a way that resonates with your audience. That&apos;s our starting point. Once your story is clear, we build the elements that bring it to life—colors, typefaces, logos, icons, photos, tone of voice, and more.
      <p class="pt-2">And that&apos;s pretty much it. Blend it all together, and you&apos;ll have a digital-first brand that breathes life into your product and marketing across every touchpoint with your audience.</p>`,
			listTitle: "EXCLUSIVE PICKS",
			listItems: [
				"Brand Story",
				"Brand Strategy",
				"Visual Identity",
				"Verbal Identity",
				"Brand Guidelines",
				"Delivery & Roll-Out",
			],
		},
		{
			title: "Story-Driven Marketing",
			highlightedText: "Websites That Drive Sales.",
			content: `<b>Few will acknowledge it</b>, but truly great websites are all about persuasion. Your website should be fast, visually appealing, and capture the enduring, unique spirit of your brand. However, to be exceptional, it must also motivate visitors to take action—whether that&apos;s purchasing your products, joining your team, investing in your company, or a fourth thing we&apos;re still crafting.
      <p class="pt-2">Our goal is to ensure that every website we create is fast-loading, visually appealing, and true to your brand. More importantly, it will effectively encourage visitors to take action.</p>`,
			listTitle: "POSSIBLY INCLUDES",
			listItems: [
				"Research & Content Strategy",
				"Sitemaps & User Flows",
				"Moodboard/Storyboard",
				"UI/UX Design",
				"Mockups/Prototypes",
				"Design System",
				"Development & Hosting",
			],
		},
		{
			title: "Digital solutions that",
			highlightedText: "fulfill your commitments.",
			content: `<b>Imagine your product as a compact yet impactful machine</b>, residing in people&apos;s pockets, on their desks, wrists, or in their hands, designed to help them accomplish real-world tasks. Beyond that, it&apos;s often where your most loyal customers interact with you the most. For these users, your product and your brand become essentially one and the same.
      <p class="pt-2">When we say &apos;brand-led&apos; products, we mean designing beyond functionality. We create products that act as strong brand ambassadors, enhancing your connection with users each time they engage with it.</p>`,
			listTitle: "BEYOND THE CLICHÉS",
			listItems: [
				"Motion/Graphic Design",
				"Photo & Video Editing",
				"Brand Experiences",
			],
		},
	];

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
			<div className="text-black py-20 grid gap-20">
				{sections.map((section, index) => (
					<ServiceSection
						key={index}
						{...section}
					/>
				))}
			</div>
		</div>
	);
}

import React from "react";
