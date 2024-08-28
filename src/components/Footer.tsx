"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const pathname = usePathname();

	function isActive(href: string) {
		return pathname === href ? "text-secondary " : "";
	}
	return (
		<div className="bg-white-purple mt-12 text-black">
			<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-7 ">
				<div className="md:flex justify-between">
					<div>
						<div className="text-2xl font-black w-3/5 md:w-auto">
							You Could Always Click This Button
						</div>
						<Button className="rounded-full my-4 font-bold text-lg px-8 py-6 flex gap-3 justify-center items-center">
							Contact us
							<Image
								alt="side arrow"
								src={"/side-arrow.svg"}
								width={17}
								height={17}
							/>
						</Button>
					</div>
					<div className="flex flex-col gap-3 text-lg py-7">
						<div>It all starts here</div>
						<nav className="grid gap-1">
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
					</div>
					<div className="py-5 flex flex-col gap-5 text-lg">
						<div>Wait, there&apos;s more.</div>
						<div className="flex gap-6">
							<Link href={"/"}>
								<svg
									width="36"
									height="24"
									viewBox="0 0 36 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_316_318)">
										<path
											d="M10.4321 6.10314e-05C11.4101 6.10314e-05 12.3881 0.0941779 13.3195 0.282413C14.1113 0.470649 14.8564 0.80006 15.555 1.27065C16.1604 1.74124 16.6727 2.353 16.9987 3.05888C17.3713 3.953 17.5576 4.89418 17.511 5.83536C17.5576 6.87065 17.2781 7.90594 16.7658 8.80006C16.207 9.64712 15.4153 10.3059 14.5304 10.7295C15.7878 11.0589 16.859 11.8589 17.5576 12.8942C18.2561 14.0236 18.5821 15.3412 18.5821 16.6589C18.5821 17.7412 18.3959 18.7765 17.9301 19.7177C17.511 20.5648 16.9056 21.2706 16.207 21.8824C15.4618 22.4471 14.577 22.8707 13.6921 23.1059C12.7607 23.3883 11.7827 23.4824 10.8047 23.4824H0V-0.0469971H10.4321V6.10314e-05ZM9.78008 9.50594C10.5252 9.553 11.3169 9.31771 11.9224 8.84712C12.5278 8.32947 12.8538 7.52947 12.7607 6.68241C12.7607 6.21182 12.6675 5.74124 12.4812 5.31771C12.295 4.9883 12.0621 4.70594 11.7361 4.51771C11.4101 4.32947 11.0375 4.14124 10.6649 4.09418C10.2458 4.00006 9.82665 4.00006 9.4075 4.00006H4.84347V9.50594H9.78008ZM10.0595 19.5765C10.5252 19.5765 10.9909 19.5295 11.4101 19.4354C11.8292 19.3412 12.2018 19.153 12.5744 18.9177C12.9004 18.6824 13.1798 18.353 13.3661 17.9765C13.599 17.5059 13.6921 16.9883 13.6455 16.4706C13.7387 15.4824 13.3661 14.5412 12.6675 13.8824C11.9224 13.3177 11.0375 13.0824 10.1061 13.1295H4.84347V19.6236H10.0595V19.5765Z"
											fill="#16161A"
										/>
										<path
											d="M25.4748 19.4824C26.2665 20.1883 27.2911 20.5647 28.3157 20.5177C29.154 20.5177 29.9457 20.2824 30.5977 19.8118C31.1566 19.4353 31.5291 18.9177 31.762 18.3059H35.6275C35.2083 20.0471 34.1837 21.6 32.7866 22.6824C31.436 23.6235 29.806 24.0471 28.1294 24C26.9651 24 25.8008 23.8118 24.6831 23.3412C23.7051 22.9177 22.8202 22.3059 22.1216 21.5059C21.4231 20.6588 20.8642 19.7177 20.4916 18.6824C20.0725 17.5059 19.8862 16.2824 19.9328 15.0588C19.9328 13.8353 20.1191 12.6588 20.5382 11.4824C21.6559 8.18826 24.7297 5.97649 28.176 6.02355C29.4334 5.97649 30.6443 6.3059 31.762 6.87061C32.74 7.43531 33.6249 8.18826 34.2769 9.12943C34.9289 10.1177 35.4412 11.2 35.674 12.3765C35.9535 13.6 36.0466 14.9177 36 16.1883H24.4502C24.3105 17.3647 24.6831 18.5412 25.4748 19.4824ZM30.5046 10.4941C29.8526 9.83532 28.9677 9.5059 28.0363 9.55296C27.4308 9.55296 26.8254 9.64708 26.3131 9.92943C25.894 10.1647 25.5214 10.4941 25.1954 10.8706C24.9159 11.2471 24.7297 11.6235 24.5899 12.0941C24.4968 12.4706 24.4037 12.8471 24.4037 13.2236H31.5757C31.4826 12.2353 31.11 11.2941 30.5046 10.4941Z"
											fill="#16161A"
										/>
										<path
											d="M32.4137 1.55298H23.4719V3.85886H32.4137V1.55298Z"
											fill="#16161A"
										/>
									</g>
									<defs>
										<clipPath id="clip0_316_318">
											<rect
												width="36"
												height="24"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</Link>
							<Link href={"/"}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_316_328)">
										<path
											d="M7.0301 0.0841693C5.7533 0.144409 4.88138 0.348169 4.11914 0.647689C3.33026 0.955129 2.66162 1.36769 1.99634 2.03537C1.33106 2.70305 0.921379 3.37217 0.616099 4.16225C0.320659 4.92617 0.120499 5.79881 0.0640995 7.07633C0.00769946 8.35385 -0.00478054 8.76449 0.00145946 12.0232C0.00769946 15.2819 0.0220995 15.6904 0.0840195 16.9706C0.144979 18.2471 0.348019 19.1188 0.647539 19.8813C0.955459 20.6702 1.36754 21.3386 2.03546 22.0041C2.70338 22.6696 3.37202 23.0783 4.16402 23.3841C4.92722 23.6791 5.8001 23.8802 7.07738 23.9361C8.35466 23.992 8.76578 24.005 12.0235 23.9987C15.2813 23.9925 15.6915 23.9781 16.9714 23.9174C18.2513 23.8566 19.1184 23.6522 19.8811 23.3541C20.67 23.0455 21.3389 22.6341 22.0039 21.9659C22.669 21.2978 23.0784 20.6282 23.3835 19.8376C23.6791 19.0744 23.88 18.2015 23.9355 16.9252C23.9914 15.6443 24.0046 15.2354 23.9983 11.9771C23.9921 8.71889 23.9775 8.31041 23.9167 7.03073C23.856 5.75105 23.6527 4.88201 23.3535 4.11905C23.0451 3.33017 22.6335 2.66225 21.9658 1.99625C21.2981 1.33025 20.628 0.921049 19.8377 0.616729C19.074 0.321289 18.2016 0.119929 16.9243 0.0647293C15.6471 0.00952928 15.2359 -0.00463073 11.977 0.00160927C8.71802 0.00784927 8.31002 0.0217693 7.0301 0.0841693ZM7.17026 21.7773C6.00026 21.7264 5.36498 21.532 4.94162 21.3693C4.38098 21.1533 3.98162 20.8922 3.5597 20.4743C3.13778 20.0565 2.87858 19.6557 2.6597 19.0962C2.4953 18.6729 2.2973 18.0383 2.24258 16.8683C2.18306 15.6038 2.17058 15.2241 2.16362 12.0203C2.15666 8.81657 2.1689 8.43737 2.22434 7.17233C2.27426 6.00329 2.46986 5.36729 2.63234 4.94417C2.84834 4.38281 3.1085 3.98417 3.5273 3.56249C3.9461 3.14081 4.3457 2.88113 4.90562 2.66225C5.3285 2.49713 5.96306 2.30081 7.13258 2.24513C8.3981 2.18513 8.7773 2.17313 11.9806 2.16617C15.1839 2.15921 15.564 2.17121 16.83 2.22689C17.9991 2.27777 18.6353 2.47145 19.0579 2.63489C19.6188 2.85089 20.0179 3.11033 20.4396 3.52985C20.8613 3.94937 21.1212 4.34753 21.3401 4.90865C21.5055 5.33033 21.7018 5.96465 21.757 7.13489C21.8172 8.40041 21.8309 8.77985 21.8367 11.9829C21.8424 15.1859 21.8311 15.5663 21.7757 16.8309C21.7246 18.0009 21.5307 18.6364 21.3677 19.0602C21.1517 19.6206 20.8913 20.0202 20.4723 20.4417C20.0532 20.8631 19.6541 21.1228 19.0939 21.3417C18.6715 21.5066 18.0363 21.7034 16.8677 21.7591C15.6022 21.8186 15.223 21.831 12.0185 21.838C8.81402 21.845 8.43602 21.832 7.1705 21.7773M16.9529 5.58665C16.9534 5.87147 17.0383 6.14976 17.1969 6.38631C17.3556 6.62287 17.5808 6.80706 17.8442 6.9156C18.1075 7.02413 18.3971 7.05214 18.6764 6.99607C18.9556 6.94 19.212 6.80238 19.413 6.60061C19.614 6.39884 19.7507 6.14198 19.8058 5.86253C19.8608 5.58307 19.8317 5.29357 19.7222 5.03063C19.6127 4.7677 19.4277 4.54314 19.1906 4.38537C18.9534 4.22759 18.6748 4.14368 18.39 4.14425C18.0082 4.14501 17.6423 4.29739 17.3728 4.56788C17.1033 4.83837 16.9523 5.20482 16.9529 5.58665ZM5.8385 12.0122C5.84522 15.4154 8.60906 18.1679 12.0115 18.1614C15.414 18.155 18.1685 15.3914 18.162 11.9882C18.1555 8.58497 15.391 5.83169 11.988 5.83841C8.58506 5.84513 5.83202 8.60945 5.8385 12.0122ZM7.99994 12.0078C7.99837 11.2167 8.23144 10.4429 8.66968 9.7842C9.10791 9.12552 9.73162 8.61158 10.4619 8.30738C11.1923 8.00318 11.9964 7.92237 12.7726 8.07518C13.5489 8.22799 14.2624 8.60755 14.8229 9.16586C15.3834 9.72417 15.7658 10.4362 15.9217 11.2118C16.0776 11.9874 15.9999 12.7919 15.6986 13.5234C15.3973 14.2549 14.8859 14.8806 14.2289 15.3215C13.572 15.7623 12.7991 15.9984 12.0079 16C11.4826 16.0011 10.9622 15.8987 10.4765 15.6987C9.99076 15.4986 9.54918 15.2049 9.17699 14.8342C8.8048 14.4634 8.50929 14.023 8.30733 13.5381C8.10537 13.0531 8.00091 12.5332 7.99994 12.0078Z"
											fill="#16161A"
										/>
									</g>
									<defs>
										<clipPath id="clip0_316_328">
											<rect
												width="24"
												height="24"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</Link>
							<Link href={"/"}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_316_330)">
										<path
											d="M20.4829 20.2813H16.9209V14.758C16.9209 13.4409 16.8972 11.7454 15.0683 11.7454C13.2131 11.7454 12.9292 13.1804 12.9292 14.6621V20.2809H9.36721V8.92272H12.7867V10.4749H12.8346C13.1768 9.89558 13.6713 9.41898 14.2655 9.09589C14.8596 8.77279 15.5311 8.61531 16.2085 8.6402C19.8188 8.6402 20.4844 10.9915 20.4844 14.0504L20.4829 20.2813ZM5.34808 7.37014C4.93925 7.37022 4.53957 7.25025 4.1996 7.02541C3.85963 6.80058 3.59465 6.48097 3.43813 6.10701C3.28161 5.73305 3.24059 5.32153 3.32028 4.92449C3.39997 4.52745 3.59678 4.16273 3.88581 3.87644C4.17485 3.59014 4.54313 3.39515 4.94409 3.3161C5.34505 3.23706 5.76067 3.27752 6.13841 3.43236C6.51614 3.58721 6.83902 3.84948 7.06622 4.18602C7.29341 4.52256 7.41472 4.91825 7.41479 5.32306C7.41484 5.59184 7.36142 5.85799 7.25758 6.10633C7.15375 6.35467 7.00154 6.58032 6.80963 6.77041C6.61772 6.9605 6.38986 7.1113 6.13909 7.2142C5.88831 7.31711 5.61954 7.37009 5.34808 7.37014ZM7.12908 20.2813H3.56337V8.92272H7.12908V20.2813ZM22.2587 0.00143861H1.77347C1.30851 -0.00375676 0.86047 0.174036 0.527835 0.495747C0.195201 0.817459 0.00518627 1.25677 -0.000488281 1.71714V22.0848C0.00499205 22.5454 0.194895 22.985 0.527518 23.307C0.860141 23.6291 1.30828 23.8072 1.77347 23.8023H22.2587C22.7248 23.8081 23.1742 23.6305 23.5082 23.3084C23.8421 22.9864 24.0333 22.5463 24.0397 22.0848V1.71567C24.0331 1.25439 23.8418 0.814576 23.5078 0.492873C23.1739 0.171169 22.7246 -0.00611535 22.2587 -3.15404e-05"
											fill="#16161A"
										/>
									</g>
									<defs>
										<clipPath id="clip0_316_330">
											<rect
												width="24"
												height="24"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</Link>
							<Link href={"/"}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_316_332)">
										<path
											d="M20.9067 0H24.96L16.1067 10.1867L26.56 24H18.3467L11.9467 15.6267L4.58667 24H0.533333L10.0267 13.12L0 0H8.42667L14.24 7.68L20.9067 0ZM19.4667 21.5467H21.7067L7.2 2.29333H4.74667L19.4667 21.5467Z"
											fill="#16161A"
										/>
									</g>
									<defs>
										<clipPath id="clip0_316_332">
											<rect
												width="24"
												height="24"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</Link>
						</div>
					</div>
				</div>
				<div className="pt-7 pb-0 flex gap-5 text-muted-foreground">
					<p>© {currentYear} Kohpact</p>
					<Link href={"/"}>Terms</Link>
					<Link href={"/"}>Privacy</Link>
				</div>
			</div>
		</div>
	);
}
