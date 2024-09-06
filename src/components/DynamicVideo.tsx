"use client";
import { useState } from "react";
import Loading from "./Loading";

export default function DynamicVideo() {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadedData = () => {
		setIsLoading(false);
	};

	return (
		<div className="relative">
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
					{/* Loading spinner or any loading UI */}
					<Loading />
				</div>
			)}

			<video
				autoPlay
				playsInline
				className={`h-auto rounded-lg ${
					isLoading ? "hidden" : "block"
				}`}
				controls={!isLoading} // Show controls only when video is loaded
				controlsList="nodownload"
				src={"/assets/kohpact_showreel.mp4"}
				onLoadedData={handleLoadedData}
			/>
		</div>
	);
}
