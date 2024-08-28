export default function LandingBento() {
	return (
		<div className="px-4 md:px-20 lg:px-24 2xl:px-28">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
				{/* First row */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:col-span-2">
					{/* First vertical div */}
					<div className="flex items-center justify-center bg-green-500 rounded-xl aspect-w-1 aspect-h-1">
						<div className="flex items-center justify-center w-full h-full">
							Vertical Div
						</div>
					</div>
					{/* Second div with two stacked divs */}
					<div className="flex flex-col gap-3">
						<div className="flex items-center justify-center bg-blue-500 rounded-xl aspect-w-1 aspect-h-1">
							<div className="flex items-center justify-center w-full h-full">
								Upper Stacked Div
							</div>
						</div>
						<div className="flex items-center justify-center bg-yellow-500 rounded-xl aspect-w-1 aspect-h-1">
							<div className="flex items-center justify-center w-full h-full">
								Lower Stacked Div
							</div>
						</div>
					</div>
				</div>

				{/* Second row */}
				<div className="lg:col-span-2">
					<div className="flex items-center justify-center bg-purple-500 rounded-xl w-full aspect-w-16 aspect-h-9">
						<div className="flex items-center justify-center w-full h-full">
							Full Width Div
						</div>
					</div>
				</div>

				{/* Third row */}
				<div>
					<div className="flex items-center justify-center bg-red-400 rounded-xl w-full lg:w-[400px] aspect-w-1 aspect-h-1">
						<div className="flex items-center justify-center w-full h-full">
							Square Div
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
