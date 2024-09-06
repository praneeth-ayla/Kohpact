"use client";

export default function DynamicVideo({ src }: any) {
	return (
		<video
			autoPlay
			loop
			playsInline
			className="h-auto rounded-lg"
			src={"/showreel.mp4"}
		/>
	);
}
