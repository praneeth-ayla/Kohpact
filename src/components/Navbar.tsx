"use client";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	const pathname = usePathname();
	const isLight = isActive("/");
	function isActive(href: string) {
		return pathname === href ? "text-secondary " : "";
	}

	return (
		<div
			className={`flex w-full flex-col relative z-30 ${
				!isLight && "bg-black text-white-purple"
			}`}>
			<header className="sticky top-0 flex h-16 items-center gap-4  px-4 md:px-20 lg:px-24 2xl:px-28">
				<div className="flex lg:grid grid-cols-3 w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-10 justify-between">
					<Link
						href="/"
						className="flex items-center gap-2  col-start-1">
						<div className="flex justify-center items-center ">
							{isLight ? (
								<Image
									className="h-10 w-10 md:h-16 md:w-16 lg:h-18 lg:w-18"
									src={"/logo.svg"}
									alt="logo"
									width={70}
									height={70}
								/>
							) : (
								<Image
									className="h-10 w-10 md:h-16 md:w-16 lg:h-18 lg:w-18"
									src={"/logoDark.svg"}
									alt="logo"
									width={70}
									height={70}
								/>
							)}
						</div>
						<span className="sr-only">Kohpact Studioz</span>
					</Link>
					<nav className="hidden justify-between gap-6 md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  font-extrabold col-start-2 col-span-2">
						<div className="flex gap-3 md:gap-10 lg:gap-12 xl:gap-16 font-extrabold">
							<Link
								href="/"
								className={`transition-colors hover:text-primary ${isActive(
									"/"
								)}`}>
								HOME
							</Link>
							<Link
								href="/services"
								className={`transition-colors hover:text-primary ${isActive(
									"/services"
								)}`}>
								SERVICES
							</Link>
							<Link
								href="/clients"
								className={`transition-colors  hover:text-primary ${isActive(
									"/clients"
								)}`}>
								CLIENTS
							</Link>
							<Link
								href="/about-us"
								className={`transition-colors  hover:text-primary ${isActive(
									"/about-us"
								)}`}>
								ABOUT US
							</Link>
						</div>
						<Link href="/contact">
							<Button className="bg-primary rounded-full pt-3 font-extrabold px-5">
								CONTACT
							</Button>
						</Link>
					</nav>
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<button className="shrink-0 md:hidden">
							{isLight ? (
								<Image
									alt="Menu Btn"
									src={"/hamburgerMenu.svg"}
									width={30}
									height={30}
								/>
							) : (
								<Image
									alt="Menu Btn"
									src={"/hamburgerDark.svg"}
									width={30}
									height={30}
								/>
							)}
							<span className="sr-only">
								Toggle navigation menu
							</span>
						</button>
					</SheetTrigger>
					<SheetContent
						side="top"
						className={`w-full border-0 ${
							isLight
								? "bg-white-purple"
								: "bg-black text-white-purple"
						}`}>
						<nav className="grid gap-6 font-extrabold text-2xl">
							<div>
								<Link
									href="/"
									className="flex items-center gap-2 ">
									<div className="flex justify-center items-center ">
										{isLight ? (
											<Image
												src={"/logo.svg"}
												alt="logo"
												width={30}
												height={30}
											/>
										) : (
											<Image
												src={"/logoDark.svg"}
												alt="logo"
												width={30}
												height={30}
											/>
										)}
									</div>
									<span className="sr-only">
										Kohpact Studioz
									</span>
								</Link>
							</div>
							<div className="my-10 flex flex-col gap-5">
								<Link
									href="/"
									className={`transition-colors  ${isActive(
										"/"
									)}`}>
									Home
								</Link>
								<Link
									href="/services"
									className={`transition-colors ${isActive(
										"/services"
									)}`}>
									Services
								</Link>
								<Link
									href="/clients"
									className={`transition-colors ${isActive(
										"/clients"
									)}`}>
									Clients
								</Link>
								<Link
									href="/about"
									className={`transition-colors ${isActive(
										"/about"
									)}`}>
									About
								</Link>
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</header>
		</div>
	);
}