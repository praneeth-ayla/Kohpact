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
							<AccordionTrigger
								className={`text-nowrap text-3xl`}>
								Web Design/Development
							</AccordionTrigger>
							<AccordionContent>
								A modern brand is defined by its digital
								presence, starting with the website. We focus on
								creating websites that effectively convey the
								brand&apos;s identity and perspective for an
								enhanced user experience.
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
								consistency across all touchpoints.{" "}
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger className={` `}>
								Photo/Video Editing
							</AccordionTrigger>
							<AccordionContent>
								Yes. It&apos;s animated by default, but you can
								disable it if you prefer.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger className={` -2xl`}>
								Graphic Design
							</AccordionTrigger>
							<AccordionContent>
								Yes. It&apos;s animated by default, but you can
								disable it if you prefer.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger className={` `}>
								Motion Design
							</AccordionTrigger>
							<AccordionContent>
								Yes. It&apos;s animated by default, but you can
								disable it if you prefer.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
