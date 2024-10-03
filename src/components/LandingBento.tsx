"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LandingBento() {
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);

	return (
		<>
			{hasWindow && (
				<div className="px-2 md:px-20 lg:px-24 2xl:px-28 flex flex-col gap-6 lg:gap-24 py-10 md:py-20 lg:py-28 xl:py-32">
					<div className="grid gap-6 lg:flex lg:gap-24">
						<div>
							<video
								autoPlay
								loop
								muted
								playsInline
								className="h-auto rounded-lg"
								src="/assets/749x904.mp4"
							/>
						</div>
						<div className="flex flex-col justify-between gap-6 md:gap-8 lg:gap-0">
							<div className="rounded-xl">
								<video
									autoPlay
									loop
									muted
									playsInline
									className="h-auto rounded-lg"
									src="/assets/627x374.mp4"
								/>
							</div>
							<div className="rounded-xl">
								<video
									autoPlay
									loop
									muted
									playsInline
									className="h-auto rounded-lg"
									src="/assets/627x418.mp4"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row gap-6 justify-between">
						<div className="w-full lg:w-auto">
							<Image
								alt="Turning ideas into popular brands kohpact image"
								className="rounded-xl h-auto w-full lg:h-[904px] lg:w-[485px]"
								width={1003}
								height={100}
								src="/assets/485x904.png"
							/>
						</div>
						<div className="rounded-xl">
							<Image
								alt="Giving a boost to your slow moving business"
								className="rounded-xl h-auto w-full lg:h-[891px] lg:w-[904px]"
								width={1003}
								height={100}
								src="/assets/891x904.png"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
