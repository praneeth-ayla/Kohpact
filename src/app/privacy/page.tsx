export default function page() {
	return (
		<div className="min-h-screen">
			<div>
				<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-20 md:py-28 lg:py-36 h-[95vh] flex justify-center items-center">
					<div>
						<h1 className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bomstadBlack">
							Privacy Policy
						</h1>
						<p className="py-10 text-gray-400 text-center lg:text-xl  max-w-4xl">
							Kohpact is committed to safeguarding the private
							information entrusted to us by our clients and
							visitors. This privacy notice will inform you as to
							how we look after your personal data, and tell you
							about your privacy rights and how the law protects
							you.
						</p>
					</div>{" "}
				</div>
				<div className="text-black py-20 grid gap-20">
					<div className="px-4 md:px-20 lg:px-24 2xl:px-28 lg:grid w-full grid-cols-2">
						<div className="hidden lg:flex flex-col">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Where To?
							</div>
							<div className="flex flex-col gap-6 pt-8 text-[#747380]">
								<a
									className="text-xl hover:text-accent"
									href="#introduction">
									Introduction
								</a>
								<a
									className="text-xl hover:text-accent"
									href="#information-we-collect">
									Information We Collect
								</a>
								<a
									className="text-xl hover:text-accent"
									href="#how-we-use-your-information">
									How We Use Your Information
								</a>
								<a
									className="text-xl hover:text-accent"
									href="#how-we-protect-your-information">
									How We Protect Your Information
								</a>
								<a
									className="text-xl hover:text-accent"
									href="#sharing-your-information">
									Sharing Your Information
								</a>
								<a
									className="text-xl hover:text-accent"
									href="#cookies-and-tracking-technologies">
									Cookies and Tracking Technologies
								</a>
								<a
									className="text-xl hover:text-accent"
									href="#your-rights">
									Your Rights
								</a>
								<a
									className="text-xl hover:text-accent"
									href="#childrens-privacy">
									Children’s Privacy
								</a>
								<a
									className="text-xl hover:text-accent"
									href="#changes-to-this-privacy-policy">
									Changes to This Privacy Policy
								</a>
							</div>
						</div>

						<div className="text-[#747380] flex flex-col gap-20 text-lg">
							<div
								className="grid gap-8"
								id="introduction">
								<div className="font-bomstad text-black text-xl md:text-2xl">
									Introduction
								</div>
								<div>
									Welcome to Kohpact. We are committed to
									protecting your privacy and ensuring a safe
									online experience. This Privacy Policy
									explains how we collect, use, and protect
									your personal information when you use our
									website and services.
								</div>
							</div>

							<div
								className="grid gap-8"
								id="information-we-collect">
								<div className="font-bomstad text-black text-xl md:text-2xl">
									Information We Collect
								</div>
								<div className="pl-3">
									<li>
										<strong>Personal Information:</strong>{" "}
										We may collect personal information such
										as your name, email address, phone
										number, and other contact details when
										you interact with us, such as through
										our contact forms or when you sign up
										for our services.
									</li>
									<li>
										<strong>Project Information:</strong>{" "}
										When you engage us for a project, we
										collect information relevant to the
										project, including project requirements,
										deliverables, and communication records.
									</li>
									<li>
										<strong>Usage Data:</strong> We collect
										information about your interaction with
										our website, including IP addresses,
										browser types, and pages visited to
										improve our services and website
										functionality.
									</li>
								</div>
							</div>

							<div
								className="grid gap-8"
								id="how-we-use-your-information">
								<div className="font-bomstad text-black text-xl md:text-2xl">
									How We Use Your Information
								</div>
								<div>
									<li>
										<strong>Service Delivery:</strong> To
										provide, manage, and deliver our
										services, including project management
										and communication.
									</li>
									<li>
										<strong>Communication:</strong> To
										respond to your inquiries, provide
										updates on your projects, and send you
										relevant information about our services.
									</li>
									<li>
										<strong>Improvement:</strong> To analyze
										and improve our website and services
										based on usage data and feedback.
									</li>
									<li>
										<strong>Legal Obligations:</strong> To
										comply with legal obligations, protect
										our rights, and enforce our terms.
									</li>
								</div>
							</div>

							<div
								className="grid gap-8"
								id="how-we-protect-your-information">
								<div className="font-bomstad text-black text-xl md:text-2xl">
									How We Protect Your Information
								</div>
								<div className="pl-3">
									<li>
										<strong>Security Measures:</strong> We
										implement appropriate technical and
										organizational measures to safeguard
										your personal information from
										unauthorized access, disclosure,
										alteration, and destruction.
									</li>
									<li>
										<strong>Data Retention:</strong> We
										retain your personal information only
										for as long as necessary to fulfill the
										purposes for which it was collected,
										unless a longer retention period is
										required by law.
									</li>
								</div>
							</div>

							<div
								className="grid gap-8"
								id="sharing-your-information">
								<div className="font-bomstad text-black text-xl md:text-2xl">
									Sharing Your Information
								</div>
								<div className="pl-3">
									<li>
										<strong>Service Providers:</strong> We
										may share your information with
										third-party service providers who assist
										us in delivering our services, such as
										hosting providers or payment processors.
										These third parties are obligated to
										protect your information and use it only
										for the purposes for which it was
										provided.
									</li>
									<li>
										<strong>Legal Requirements:</strong> We
										may disclose your information if
										required by law, or in response to valid
										requests by public authorities or legal
										processes.
									</li>
									<li>
										<strong>Business Transfers:</strong> In
										the event of a merger, acquisition, or
										sale of assets, your information may be
										transferred as part of the transaction.
									</li>
								</div>
							</div>

							<div
								className="grid gap-8"
								id="cookies-and-tracking-technologies">
								<div className="font-bomstad text-black text-xl md:text-2xl">
									Cookies and Tracking Technologies
								</div>
								<div className="pl-3">
									<li>
										<strong>Cookies:</strong> Our website
										uses cookies and similar technologies to
										enhance your browsing experience,
										analyze website usage, and provide
										personalized content. You can manage
										your cookie preferences through your
										browser settings.
									</li>
									<li>
										<strong>Analytics:</strong> We use
										analytics tools to collect data on
										website usage and performance. This data
										helps us understand user behavior and
										improve our website.
									</li>
								</div>
							</div>

							<div
								className="grid gap-8"
								id="your-rights">
								<div className="font-bomstad text-black text-xl md:text-2xl">
									Your Rights
								</div>
								<div className="pl-3">
									<li>
										<strong>Access and Correction:</strong>{" "}
										You have the right to access and request
										correction of your personal information.
										Please contact us if you wish to
										exercise these rights.
									</li>
									<li>
										<strong>Opt-Out:</strong> You can opt
										out of receiving promotional
										communications from us by following the
										unsubscribe instructions in the emails
										or contacting us directly.
									</li>
									<li>
										<strong>Data Deletion:</strong> You may
										request the deletion of your personal
										information, subject to legal and
										contractual obligations.
									</li>
								</div>
							</div>

							<div
								className="grid gap-8"
								id="childrens-privacy">
								<div className="font-bomstad text-black text-xl md:text-2xl">
									Children’s Privacy
								</div>
								<div>
									Our services are not intended for
									individuals under the age of 18. We do not
									knowingly collect or solicit personal
									information from children. If we become
									aware that we have collected such
									information, we will take steps to delete
									it.
								</div>
							</div>

							<div
								className="grid gap-8"
								id="changes-to-this-privacy-policy">
								<div className="font-bomstad text-black text-xl md:text-2xl">
									Changes to This Privacy Policy
								</div>
								<div>
									We may update this Privacy Policy from time
									to time. Any changes will be posted on our
									website, and the revised policy will apply
									to information collected after the effective
									date.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
