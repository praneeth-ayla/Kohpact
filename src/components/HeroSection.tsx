import { bomstad } from "@/app/layout";

export default function HeroSection() {
	return (
		<div>
			<div
				className={`${bomstad.className} text-center text-white text-[41px]`}>
				Kohpact
			</div>
			<div className="mt-3 text-center px-4 text-gray-500 font-normal">
				Finally, you've found us - your new strategy, design, and
				development partner, ready to <b>elevate your brand.</b>
			</div>
			<div>
				<div className="my-12 h-52 bg-pink-300 mx-3 rounded-lg ">
					<div className="px-3 text-center flex h-full justify-center items-center">
						ShowReel
					</div>
				</div>
			</div>
		</div>
	);
}
