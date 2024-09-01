"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export default function Page() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);

	const clientsList = [
		{
			src: "/Haldiram_logo.webp",
			imgType: true,
			hoverSrc: "/Haldiram_work.jpg",
			title: "Haldiram's",
			content:
				"We recently designed a social media post for Haldiram's latest launch—the Punjabi Samosa. The goal was to create something that felt minimal and aesthetic while keeping it in line with the product's packaging.",
		},
		{
			src: "/Fizzy_logo.png",
			hoverSrc: "/Fizzy_work.jpg",
			imgType: false,
			title: "Fizzy Goblet",
			content:
				"A short promotional video was crafted to celebrate the grand opening of Fizzy Goblet's first offline store in Bangalore, India. The video captures the essence of the brand's unique blend of contemporary fashion.",
		},
		{
			src: "/Evolet_logo.png",
			hoverSrc: "/Evolet_work.jpg",
			imgType: false,
			title: "Evolet India",
			content:
				"For Evolet's lates ad campaign, we designed a compelling post to showcase their newly launched series of electric vehicles. The campaign emphasizes Evolet's vision of a sustainable future, blending innovation with style. ",
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
							<Dialog>
								<DialogTrigger>
									{client.imgType ? (
										<Image
											src={client.hoverSrc}
											alt={client.title + " image"}
											className={`absolute inset-0 h-full w-full rounded-lg object-cover transition-opacity duration-300 ease-in-out ${
												hoveredIndex === index
													? "opacity-100 scale-100"
													: "opacity-0"
											}`}
											width={400}
											height={400}
										/>
									) : (
										<>
											{hasWindow && (
												<video
													src="/627x374.mp4"
													autoPlay
													inlist={true}
													loop
													className={`absolute inset-0 h-full w-full rounded-lg object-cover transition-opacity duration-300 ease-in-out ${
														hoveredIndex === index
															? "opacity-100 scale-100"
															: "opacity-0"
													}`}
													width={4009}
													height={4000}
												/>
											)}
										</>
									)}
								</DialogTrigger>
								<DialogContent className="bg-white-purple h-[90%] w-[90%] md:h-auto md:min-w-80 max-w-6xl p-3">
									<div className="flex flex-col md:hidden">
										<div>
											{client.imgType ? (
												<Image
													src={client.hoverSrc}
													alt={
														client.title + " image"
													}
													className={`rounded-lg aspect-square w-full`}
													width={4009}
													height={4000}
												/>
											) : (
												<>
													{hasWindow && (
														<video
															// src={client.hoverSrc}
															// alt={client.title + " image"}
															src="/627x374.mp4"
															autoPlay
															loop
															inlist={true}
															className={`rounded-lg w-auto h-96 object-cover`}
															width={4009}
															height={4000}
														/>
													)}
												</>
											)}
										</div>
										<DialogTitle className="font-bomstad text-3xl py-4">
											{client.title}
										</DialogTitle>
										<DialogDescription className="text-lg">
											{client.content}
										</DialogDescription>
									</div>
									<div className="hidden md:flex flex-col">
										<div className="flex">
											<div className="p-6 lg:p-8 xl:p-9 2xl:p-10">
												<DialogTitle className="font-bomstad text-3xl py-4">
													{client.title}
												</DialogTitle>
												<DialogDescription className="text-lg">
													{client.content}
												</DialogDescription>
											</div>
											{client.imgType ? (
												<Image
													src={client.hoverSrc}
													alt={
														client.title + " image"
													}
													className={`rounded-lg w-auto h-96`}
													width={4009}
													height={4000}
												/>
											) : (
												<video
													// src={client.hoverSrc}
													// alt={client.title + " image"}
													src="/627x374.mp4"
													inlist={true}
													autoPlay
													loop
													className={`rounded-lg w-auto h-96`}
													width={4009}
													height={4000}
												/>
											)}
										</div>
									</div>
								</DialogContent>
							</Dialog>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
