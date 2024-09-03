export default function HeroSection() {
	return (
		<div>
			<div className="py-14 md:py-32 lg:py-40">
				<h1 className="text-center text-[41px] md:text-5xl lg:text-6xl xl:text-8xl font-bomstadBlack">
					<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
						Kohpact
					</span>
				</h1>
				<div className="mt-3 text-center px-4 text-[#747380] font-normal">
					<p className="max-w-xl mx-auto text-lg md:text-xl">
						Finally, you&apos;ve found us - your new strategy,
						design, and development partner, ready to{" "}
						<b>elevate your brand.</b>
					</p>
				</div>
			</div>
			<div className="my-12 h-52 md:h-72 lg:h-[500px] px-4 md:px-20 lg:px-24 2xl:px-28">
				<div className="h-full flex items-center justify-center bg-pink-300 rounded-lg">
					ShowReel
				</div>
			</div>
		</div>
	);
}
