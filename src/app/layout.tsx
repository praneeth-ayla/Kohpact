import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Script from "next/script";

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
	verification: {
		google: "QKAYP9MQPmUugrqD7pNwxbTOaGkM-o3A3hkqH7Fi7Tc",
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
			className="!scroll-smooth selection:bg-secondary selection:text-white-purple">
			<body
				className={`${bomstad.variable} ${sofiapro.variable} ${bomstadBlack.variable}`}>
				<head>
					<link
						rel="shortcut icon"
						href="/favicon.ico"
					/>
				

  <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-CGXD6E7C15"
  ></Script>
  <Script id="google-analytics">{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CGXD6E7C15');
  `}</Script>
  <Script
    id="vtag-ai-js"
    async
    src="https://r2.leadsy.ai/tag.js"
    data-pid="pd0BE2OgLv8ncnXp"
    data-version="062024"
  ></Script>
</head>


				<div className="font-sofia">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
