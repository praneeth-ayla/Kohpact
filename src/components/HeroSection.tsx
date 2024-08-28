export default function HeroSection() {
	return (
		<div>
			<div className="py-20">
				<h1 className="text-center text-[41px] md:text-5xl lg:text-6xl xl:text-7xl font-bomstad">
					<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
						Kohpact
					</span>
				</h1>
				<div className="mt-3 text-center px-4 text-gray-500 font-normal">
					<p className="max-w-xl mx-auto">
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
