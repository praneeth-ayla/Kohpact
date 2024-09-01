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
			<div className="rounded-xl"></div>
			{hasWindow && (
				<div className="px-2 md:px-20 lg:px-24 2xl:px-28 flex flex-col gap-6 lg:gap-24">
					<div className="grid gap-6 lg:flex lg:gap-24">
						<div>
							<video
								autoPlay
								loop
								muted
								playsInline
								className="h-auto rounded-lg"
								src="/749x904.mp4"
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
									src="/627x374.mp4"
								/>
							</div>
							<div className="rounded-xl">
								<video
									autoPlay
									loop
									muted
									playsInline
									className="h-auto rounded-lg"
									src="/627x418.mp4"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-6 justify-between">
						<div className="w-full lg:w-auto">
							<Image
								alt="img"
								// className="rounded-xl h-[813px] w-[436px]"
								className="rounded-xl h-[904px] w-[485px]"
								// className="rounded-xl h-[625px] w-[336px]"
								width={1003}
								height={100}
								src="/485x904.png"
							/>
						</div>
						<div className="rounded-xl">
							<Image
								alt="img"
								// className="rounded-xl h-[813px] w-[801px]"
								className="rounded-xl h-[891px] w-[904px]"
								// className="rounded-xl h-[625px] w-[645px]"
								width={1003}
								height={100}
								src="/891x904.png"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
