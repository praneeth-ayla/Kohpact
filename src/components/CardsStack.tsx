export default function CardsStack() {
	const cards = [
		{
			id: "card1",
			color: "bg-white-purple",
			title: "We’re digital-first.",
			description:
				"We create brands, products, and marketing strategies that meet your customers where they are. In today’s world, that often means catching their attention on one screen—or sometimes two or three.",
		},
		{
			id: "card2",
			color: "bg-white-purple",
			title: "We’re digital-first.",
			description:
				"We create brands, products, and marketing strategies that meet your customers where they are. In today’s world, that often means catching their attention on one screen—or sometimes two or three.",
		},
		{
			id: "card3",
			color: "bg-white-purple",
			title: "We’re brand-led.",
			description:
				"Your brand is the heart of everything we do. We design products and build websites that not only work beautifully but also genuinely reflect the soul of your brand. ",
		},
		{
			id: "card4",
			color: "bg-white-purple",
			title: "We’re full-service.",
			description:
				"At Kohpact, we’re your all-in-one creative partner, guiding you from the initial idea all the way to launch. We handle everything under one roof—strategy, design, and development.",
		},
		{
			id: "card5",
			color: "bg-white-purple",
			title: "Our teams are small but mighty.",
			description:
				"Not everything is designed to scale. Our team is small, close-knit, and passionate about what they do. It’s a straightforward approach, but we’ve found it’s the best.",
		},
	];
	return (
		<div className="mx-auto min-h-screen md:w-3/4 lg:w-1/2  mt-20 pb-48">
			<h1 className="uppercase text-3xl md:text-5xl font-bold mb-8 md:mb-14 lg:mb-20 xl:mb-28 bg-white text-center font-bomstad">
				Good to know.
			</h1>
			<ul className="list-none grid grid-cols-1 gap-[4vw] px-4">
				{cards.map((card, index) => (
					<li
						key={card.id}
						id={card.id}
						className="sticky top-[100px]"
						style={{
							paddingTop: `calc(${index + 1} * 1.5em)`,
						}}>
						<div
							className={`box-border p-8 md:p-10 lg:p-14 rounded-2xl shadow border flex flex-col gap-3 transition-all duration-500 ${card.color}`}>
							<p className="text-2xl md:text-3xl font-bomstadBlack">
								{card.title}
							</p>
							<p className="md:text-xl text-lg">
								{card.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
