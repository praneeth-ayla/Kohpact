export default function ServiceSection({
	title,
	highlightedText,
	content,
	listTitle,
	listItems,
}: any) {
	return (
		<div className="px-4 md:px-20 lg:px-24 2xl:px-28 md:grid grid-cols-4 gap-3 lg:h-[70vh] flex flex-col justify-center">
			<div className="flex flex-col gap-7 col-span-3">
				<div className="capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bomstad">
					{title} <br />
					<span className="bg-custom-gradient-r text-transparent bg-clip-text inline-block">
						{highlightedText}
					</span>
				</div>
				<div
					className="max-w-2xl lg:text-xl"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
			<div className="text-nowrap">
				<div className="text-xl lg:text-2xl text-primary pt-7 md:pt-0 font-semibold">
					{listTitle}
				</div>
				<div className="flex flex-col gap-4 pt-3 text-lg lg:text-xl">
					{listItems.map((item: any, index: number) => (
						<li key={index}>{item}</li>
					))}
				</div>
			</div>
		</div>
	);
}
