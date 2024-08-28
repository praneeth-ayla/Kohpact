"use client";
import Link from "next/link";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	const pathname = usePathname();

	function isActive(href: string) {
		return pathname === href ? "text-secondary " : "";
	}

	return (
		<div className="flex w-full flex-col relative z-30">
			<header className="sticky top-0 flex h-16 items-center gap-4  px-4 md:px-20 lg:px-24 2xl:px-28">
				<div className="flex lg:grid grid-cols-3 w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-10 justify-between">
					<Link
						href="/"
						className="flex items-center gap-2  col-start-1">
						<div className="flex justify-center items-center ">
							<Image
								className="h-10 w-10"
								src={"/logo.svg"}
								alt="logo"
								width={70}
								height={70}
							/>
						</div>
						<span className="sr-only">Kohpact Studioz</span>
					</Link>
					<nav className="hidden justify-between gap-6 md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6  font-extrabold col-start-2 col-span-2">
						<div className="flex gap-3 md:gap-10 lg:gap-12 xl:gap-16 font-extrabold">
							<Link
								href="/"
								className={`transition-colors hover:text-blue-400 ${isActive(
									"/"
								)}`}>
								HOME
							</Link>
							<Link
								href="/services"
								className={`transition-colors hover:text-blue-400 ${isActive(
									"/services"
								)}`}>
								SERVICES
							</Link>
							<Link
								href="/clients"
								className={`transition-colors  hover:text-blue-400 ${isActive(
									"/clients"
								)}`}>
								CLIENTS
							</Link>
							<Link
								href="/about-us"
								className={`transition-colors  hover:text-blue-400 ${isActive(
									"/about-us"
								)}`}>
								ABOUT US
							</Link>
						</div>
						<Link href="/contact">
							<Button className="bg-primary rounded-full">
								CONTACT
							</Button>
						</Link>
					</nav>
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<button className="shrink-0 md:hidden bg-blue-primary">
							<Image
								alt="Menu Btn"
								src={"/hamburgerMenu.svg"}
								width={30}
								height={30}
							/>
							<span className="sr-only">
								Toggle navigation menu
							</span>
						</button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="w-full bg-white-purple">
						<nav className="grid gap-6 font-extrabold text-2xl">
							<div>
								<Link
									href="/"
									className="flex items-center gap-2 ">
									<div className="flex justify-center items-center ">
										<Image
											src={"/logo.svg"}
											alt="logo"
											width={30}
											height={30}
										/>
									</div>
									<span className="sr-only">
										Kohpact Studioz
									</span>
								</Link>
								<SheetClose
									onClick={() => {
										close();
									}}></SheetClose>
							</div>
							<Link
								href="/"
								className={`transition-colors  hover:text-blue-400 ${isActive(
									"/"
								)}`}>
								Home
							</Link>
							<Link
								href="/services"
								className={`transition-colors  hover:text-blue-400 ${isActive(
									"/services"
								)}`}>
								Services
							</Link>
							<Link
								href="/clients"
								className={`transition-colors  hover:text-blue-400 ${isActive(
									"/clients"
								)}`}>
								Clients
							</Link>
							<Link
								href="/about"
								className={`transition-colors  hover:text-blue-400 ${isActive(
									"/about"
								)}`}>
								About
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</header>
		</div>
	);
}
