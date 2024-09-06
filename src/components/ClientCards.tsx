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

export default function ClientCards() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);

	const clientsList = [
		{
			src: "/assets/Haldiram_logo.webp",
			imgType: true,
			hoverSrc: "/assets/Haldiram_work.jpg",
			title: "Haldiram's",
			content:
				"We recently designed a social media post for Haldiram's latest launch—the Punjabi Samosa. The goal was to create something that felt minimal and aesthetic while keeping it in line with the product's packaging.",
		},
		{
			src: "/assets/Fizzy_logo.png",
			hoverSrc: "/assets/Fizzy_work.mp4",
			imgType: false,
			title: "Fizzy Goblet",
			content:
				"A short promotional video was crafted to celebrate the grand opening of Fizzy Goblet's first offline store in Bangalore, India. The video captures the essence of the brand's unique blend of contemporary fashion.",
		},
		{
			src: "/assets/Evolet_logo.png",
			hoverSrc: "/assets/Evolet_work.png",
			imgType: true,
			title: "Evolet India",
			content:
				"For Evolet's lates ad campaign, we designed a compelling post to showcase their newly launched series of electric vehicles. The campaign emphasizes Evolet's vision of a sustainable future, blending innovation with style. ",
		},
	];
	return (
		<div className="flex gap-5 flex-wrap justify-center">
			{clientsList.map((client, index: number) => (
				<div
					key={index}
					className="relative h-[170px] w-[170px] md:h-96 md:w-96"
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}>
					<Image
						alt={`kohpact ${client.title}`}
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
											src={client.hoverSrc}
											autoPlay
											muted
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
								<div className="w-full aspect-square">
									{client.imgType ? (
										<Image
											src={client.hoverSrc}
											alt={client.title + " image"}
											className="rounded-lg w-full h-full object-cover"
											width={4009}
											height={4000}
										/>
									) : (
										<>
											<div>
												<div className="h-[83vw] w-[83vw] flex mx-auto">
													{hasWindow && (
														<video
															src={
																client.hoverSrc
															}
															autoPlay
															muted
															inlist={true}
															loop
															className={`h-[83vw] w-[83vw] inset-0 rounded-lg object-cover transition-opacity duration-300 ease-in-out`}
															width={4009}
															height={4000}
														/>
													)}
												</div>
											</div>
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
											alt={client.title + " image"}
											className="rounded-lg w-auto aspect-square h-96"
											width={4009}
											height={4000}
										/>
									) : (
										<div>
											<div className="h-96 w-96">
												{hasWindow && (
													<video
														src={client.hoverSrc}
														autoPlay
														muted
														inlist={true}
														loop
														className={`inset-0 h-96 w-full md:w-96 rounded-lg object-cover transition-opacity duration-300 ease-in-out`}
														width={4009}
														height={4000}
													/>
												)}
											</div>
										</div>
									)}
								</div>
							</div>
						</DialogContent>
					</Dialog>
				</div>
			))}
		</div>
	);
}
