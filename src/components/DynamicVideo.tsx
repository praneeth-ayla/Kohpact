"use client";

export default function DynamicVideo() {
	return (
		<video
			autoPlay
			playsInline
			controls
			controlsList="nodownload"
			className="h-auto rounded-lg"
			src={"/kohpact_showreel.mp4"}
		/>
	);
}
