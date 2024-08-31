"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const clientsList = [
		{
			src: "/Haldiram_logo.webp",
			hoverSrc: "/Haldiram_work.jpg",
		},
		{
			src: "/Fizzy_logo.png",
			hoverSrc: "/Fizzy_work.jpg",
		},
		{
			src: "/Evolet_logo.png",
			hoverSrc: "/Evolet_work.jpg",
		},
	];

	return (
		<div
			className="min-h-screen"
			id="scroll">
			<div>
				<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-20 md:py-28 lg:py-36 h-[95vh] flex justify-center items-center">
					<div className="max-w-7xl">
						<h1 className=" text-center text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-bomstadBlack">
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								They inspired us{" "}
							</span>{" "}
							to take action.
						</h1>
						<p className="py-8 md:py-10 text-gray-500 text-center md:text-xl px-4">
							We work with a mix of ambitious startups and
							well-established companies, but what they all have
							in common is their drive to go great places.
						</p>
					</div>
				</div>
			</div>
			<div className="py-24 flex justify-center items-center">
				<div className="flex gap-5 flex-wrap justify-center">
					{clientsList.map((client, index: number) => (
						<div
							key={index}
							className="relative h-[170px] w-[170px] md:h-96 md:w-96"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}>
							<Image
								alt=""
								className="rounded-lg object-cover border"
								src={client.src}
								width={400}
								height={400}
							/>
							<Image
								src={client.hoverSrc}
								alt="hover image"
								className={`absolute inset-0 h-full w-full rounded-lg object-cover transition-opacity duration-300 ease-in-out ${
									hoveredIndex === index
										? "opacity-100 scale-100"
										: "opacity-0"
								}`}
								width={400}
								height={400}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
