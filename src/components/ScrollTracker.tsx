"use client";
import { useEffect, useState } from "react";

export function ScrollTracker() {
	const [state, setState] = useState<number>();
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			console.log(`You have scrolled ${scrollTop}px`);
			setState(scrollTop);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return state;
}
