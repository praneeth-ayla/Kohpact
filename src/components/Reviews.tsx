"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";

interface RevealOnScrollProps {
	children: ReactNode;
}

const RevealOnScroll = ({ children }: RevealOnScrollProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onWindScroll = () => {
			const element = ref.current;
			if (element) {
				const { top } = element.getBoundingClientRect();
				const isVisible = top < window.innerHeight;
				setIsVisible(isVisible);
			}
		};
		window.addEventListener("scroll", onWindScroll);
		return () => {
			window.removeEventListener("scroll", onWindScroll);
		};
	}, []);

	// Increase duration for a slower transition
	const classes = `transition-opacity duration-2000 ${
		isVisible ? "opacity-100" : "opacity-0"
	}`;

	return (
		<div
			ref={ref}
			className={classes}>
			{children}
		</div>
	);
};

const App = () => {
	const reviewsList = [
		{
			message: `"Working with Kohpact was like adding an extra brain to our team. Their graphic design work blew us away, and I've never met an agency that just 'gets' us the way they do."`,
			name: "Udit Kalra",
			position: "Social Media Manager, Evolet India",
		},
		{
			message: `“The graphic design work delivered by Kohpact is exceptional! The creativity and attention to detail are top-notch. Every element is thoughtfully crafted. Fantastic job!”`,
			name: "Akbhai Kasturia",
			position: "Lead Graphic Designer, Haldiram India",
		},
		{
			message: `“They went above and beyond. This is the best Agency I've worked with . Their work is fantastic, ahead of schedule and will communicate with you right on zoom. They also have the expertise to give you something better than you anticipated. I can't recommend enough!”`,
			name: "Utsav Kataria",
			position: "Founder, Ballistic Studio",
		},
	];
	return (
		<div className="bg-black pt-40 pb-20 md:pt-80">
			<div className="container mx-auto text-center text-white-purple">
				<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-20 md:mb-40  uppercase font-bomstad">
					We&apos;re loved by all
				</h1>
				{reviewsList.map((review, index: number) => (
					<RevealOnScroll key={index}>
						<div className="flex flex-col h-[25rem] md:h-[30rem] lg:min-h-[40rem] max-w-[1150px] mx-auto items-center">
							<p className="text-xl md:text-4xl space-x-3 font-bomstad tracking-wider">
								{review.message}
							</p>
							<p className="text-[18px] md:text-xl mt-6">
								{review.name}
							</p>
							<p className="text-base text-[#747380]">
								{review.position}
							</p>
						</div>
					</RevealOnScroll>
				))}
			</div>
		</div>
	);
};

export default App;
