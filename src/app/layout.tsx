import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";

const bomstad = localFont({
	src: "./static-font/BomstadDisplay-Bold.ttf",
	variable: "--font-bomstad",
});
const sofiapro = localFont({
	src: "./static-font/Sofia Pro Regular Az.otf",
	variable: "--font-sofia",
});

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
			<body className={`${bomstad.variable} ${sofiapro.variable}`}>
				<div className="font-sofia">
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
