import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import Image from "next/image";
import { cn } from "@/lib/utils";

// const sofiaPro = localFont({
// 	src: [
// 		{
// 			// path: "fonts/sofia-pro/Sofia Pro Regular Italic Az.otf",
// 			// path: "sofia-pro/Sofia Pro Regular Az.otf",
// 			path: "fonts/sofia-pro/Sofia Pro Black Az.otf",
// 			weight: "base",
// 			style: "normal",
// 		},
// 	],
// });

const sofiapro = localFont({
	src: "./static-font/Sofia Pro Regular Az.otf",
	variable: "--sofiapro",
});
export const bomstad = localFont({
	src: "./static-font/BomstadDisplay-Bold.ttf",
	variable: "--bomstad",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kohpact",
	description: "Your Creative Partner",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={sofiapro.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
