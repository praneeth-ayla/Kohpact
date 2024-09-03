import ClientCards from "@/components/ClientCards";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Clients",
};

export default function Page() {
	return (
		<div
			className="min-h-screen"
			id="scroll">
			<div>
				<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-20 md:py-28 lg:py-36 h-[95vh] flex justify-center items-center">
					<div className="max-w-7xl">
						<h1 className=" text-center text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bomstadBlack">
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								They inspired us{" "}
							</span>{" "}
							<br />
							to take action.
						</h1>
						<p className="py-8 md:py-10 text-[#747380] text-center md:text-xl px-4 max-w-4xl">
							We work with a mix of ambitious startups and
							well-established companies, but what they all have
							in common is their drive to go great places.
						</p>
					</div>
				</div>
			</div>
			<div className="py-24 flex justify-center items-center">
				<ClientCards />
			</div>
		</div>
	);
}
