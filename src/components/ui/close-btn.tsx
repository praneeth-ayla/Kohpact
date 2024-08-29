import Image from "next/image";

export default function closebtn({ isLight }: { isLight: boolean }) {
	return (
		<div>
			{isLight ? (
				<Image
					src={"/close.svg"}
					alt="logo"
					width={25}
					height={25}
				/>
			) : (
				<Image
					src={"/closeDark.svg"}
					alt="logo"
					width={25}
					height={25}
				/>
			)}
		</div>
	);
}
