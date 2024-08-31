import CardsStack from "@/components/CardsStack";
import Reviews from "@/components/Reviews";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
	title: "About",
};

export default function Page() {
	return (
		<>
			<Head>
				<title>Kohpact - Making Customers Love You More</title>
				<meta
					name="description"
					content="Kohpact is a team of genuinely nice people dedicated to helping your customers love you more. We care about your business as much as you do."
				/>
				<meta
					name="keywords"
					content="customer service, customer satisfaction, business growth, Kohpact, customer engagement"
				/>
				<meta
					name="author"
					content="Kohpact"
				/>
				<meta
					property="og:title"
					content="Kohpact - Making Customers Love You More"
				/>
				<meta
					property="og:description"
					content="Kohpact is a team of genuinely nice people dedicated to helping your customers love you more. We care about your business as much as you do."
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:url"
					content="https://yourwebsite.com"
				/>
				<meta
					property="og:image"
					content="https://yourwebsite.com/og-image.jpg"
				/>
				<link
					rel="canonical"
					href="https://yourwebsite.com"
				/>
			</Head>
			<div
				className="min-h-screen"
				id="scroll">
				<div className="text-white-purple">
					<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-20 md:py-28 lg:py-36 bg-black h-screen flex justify-center items-center">
						<div className="max-w-7xl">
							<h1 className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bomstadBlack">
								Every one of us is{" "}
								<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
									fully committed
								</span>{" "}
								to this and we&apos;re all pulling together.
							</h1>
						</div>
					</div>
				</div>
				<div className="text-black pt-20 min-h-screen flex justify-center items-center">
					<div className="px-4 md:px-20 lg:px-40 2xl:px-48 py-10 text-center text-xl md:text-2xl lg:text-3xl">
						Kohpact is a bunch of genuinely nice people who spend
						their days figuring out how to make your customers love
						you more. And honestly, they’d probably offer to water
						your plants while you’re away {":)"}
					</div>
				</div>
			</div>

			<CardsStack />
			<div className="text-white-purple ">
				<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-20 md:py-28 lg:py-36 bg-black h-screen flex justify-center items-center">
					<div>
						<h1 className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bomstadBlack">
							A{" "}
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								Brand
							</span>
							, A{" "}
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								Website
							</span>{" "}
							& A{" "}
							<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
								Digital Product
							</span>{" "}
							walk into an agency.
						</h1>
						<p className="py-10 text-gray-400 text-center text-xl">
							An integrated, digital-first approach to bringing
							brands and their customers closer together.
						</p>
					</div>
				</div>
			</div>
			<Reviews />
		</>
	);
}
