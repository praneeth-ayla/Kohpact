export default function ServiceSection({
	title,
	highlightedText,
	content,
	listTitle,
	listItems,
}: any) {
	return (
		<div className="px-4 md:px-20 lg:px-24 2xl:px-28 md:grid grid-cols-4 gap-10 lg:h-[70vh] flex flex-col justify-center md:items-center">
			<div className="flex flex-col gap-12 col-span-3">
				<div className="capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bomstad">
					{title} <br />
					<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
						{highlightedText}
					</span>
				</div>
				<div
					className="max-w-2xl text-base lg:text-xl"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
			<div className="text-nowrap text-left">
				<div className="text-xl lg:text-2xl text-secondary pt-7 md:pt-0 font-semibold">
					{listTitle}
				</div>
				<div className="flex flex-col gap-4 pt-6 md:pt-10 lg:text-xl">
					{listItems.map((item: any, index: number) => (
						<li key={index}>{item}</li>
					))}
				</div>
			</div>
		</div>
	);
}
