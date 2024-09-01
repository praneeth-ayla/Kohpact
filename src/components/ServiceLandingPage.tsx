import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServiceLandingPage() {
	return (
		<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-20">
			<div className="md:grid grid-cols-2 gap-14">
				<div className="text-lg md:text-2xl max-w-lg flex md:pt-4">
					We create impactful digital experiences for top brands by
					integrating AI, design, and technology.
				</div>
				<div>
					<Accordion
						type="single"
						collapsible
						className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger className={`text-nowrap`}>
								Web Design/Development
							</AccordionTrigger>
							<AccordionContent>
								Kohpact is a young team of designers and
								developers crafting authentic digital
								experiences. We deliver seamless,
								high-performing web solutions that elevate
								brands in the modern economy.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger className={` `}>
								Branding
							</AccordionTrigger>
							<AccordionContent>
								A brand is more than just a logo and color
								palette. We&apos;ll craft a distinct visual and
								verbal identity, create necessary assets, and
								establish clear brand guidelines to maintain
								consistency across all touchpoints.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger className={` `}>
								Photo/Video Editing
							</AccordionTrigger>
							<AccordionContent>
								Kohpact specializes in photo and video editing
								that captures your brand’s essence. We blend
								creativity with technical precision to produce
								stunning visuals, telling compelling stories.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger className={` -2xl`}>
								Graphic Design
							</AccordionTrigger>
							<AccordionContent>
								At Kohpact, we don’t just do graphic design, we
								make your brand pop, sizzle, and stand out in
								all the right ways. Our designs aren’t just eye
								candy; they’re conversation starters that keeps
								your brand unforgettable.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger className={` `}>
								Motion Design
							</AccordionTrigger>
							<AccordionContent>
								We bring your brand to life with motion design
								that’s anything but static. We add the flair
								that make your visuals dance off the screen,
								capturing attention, and keeping your brand in
								motion long after the first look.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
