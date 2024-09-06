import Image from "next/image";

export default function EnoughTalkComp() {
	const cards = [
		{ src: "/891x904 (1).png" },
		{ src: "/891x904 (2).png" },
		{ src: "/891x904 (3).png" },
	];
	return (
		<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-20 md:py-28 lg:py-36">
			<div className="text-center font-bomstad text-5xl">Enough Talk</div>
			<div className="flex flex-col gap-4 md:flex-row pt-20">
				{cards.map((card, i) => (
					<div
						className=""
						key={i}>
						<Image
							alt="Enough Talk 1"
							className="rounded-2xl"
							src={card.src}
							height={904}
							width={891}
						/>
					</div>
				))}
			</div>
		</div>
	);
}