import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import localFont from "next/dist/compiled/@next/font/dist/local";

export default function ServiceLandingPage() {
	return (
		<div>
			<div className="text-lg">
				We create impactful digital experiences for top brands by
				integrating AI, design, and technology.
			</div>
			<div>
				<Accordion
					type="single"
					collapsible
					className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger className={` text-2xl`}>
							Web Design/Development
						</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className={` text-2xl`}>
							Branding
						</AccordionTrigger>
						<AccordionContent>Photo/Video Editing</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className={` text-2xl`}>
							Photo/Video Editing
						</AccordionTrigger>
						<AccordionContent>
							Yes. It&apos;s animated by default, but you can
							disable it if you prefer.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger className={` text-2xl`}>
							Graphic Design
						</AccordionTrigger>
						<AccordionContent>
							Yes. It&apos;s animated by default, but you can
							disable it if you prefer.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger className={` text-2xl`}>
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
	);
}
