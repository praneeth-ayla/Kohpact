import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const bomstad = localFont({
	src: "./static-font/BomstadDisplay-Bold.ttf",
	variable: "--font-bomstad",
});
const bomstadBlack = localFont({
	src: "./static-font/BomstadDisplay-Black.otf",
	variable: "--font-bomstad-black",
});
const sofiapro = localFont({
	src: "./static-font/Sofia Pro Regular Az.otf",
	variable: "--font-sofia",
});

export const metadata: Metadata = {
	title: {
		default: "Kohpact",
		template: "%s - Kohpact",
	},
	description: "Your Creative Partner",
	icons: {
		icon: ["/favicon.ico"],
		apple: ["/apple-touch-icon.png?v=4"],
		shortcut: ["/apple-touch-icon"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="!scroll-smooth selection:bg-secondary selection:text-black">
			<body
				className={`${bomstad.variable} ${sofiapro.variable} ${bomstadBlack.variable}`}>
				<div className="font-sofia">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
