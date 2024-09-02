export default function page() {
	return (
		<div className="min-h-screen">
			<div>
				<div className="px-4 md:px-20 lg:px-24 2xl:px-28 py-20 md:py-28 lg:py-36 h-[95vh] flex justify-center items-center">
					<div>
						<h1 className="text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bomstadBlack">
							Terms of Use.
						</h1>
						<p className="py-10 text-gray-400 text-center lg:text-xl  max-w-4xl">
							This website contains information about Kohpact Ltd.
							(“Kohpact”). Please read carefully the following
							conditions of use. By accessing this website, you
							are deemed to have agreed to these conditions.
						</p>
					</div>{" "}
				</div>
			</div>
			<div className="text-black py-20 grid gap-20">
				<div className="px-4 md:px-20 lg:px-24 2xl:px-28 lg:grid w-full grid-cols-2">
					<div className="hidden lg:flex flex-col">
						<div className="font-bomstad text-black text-xl md:text-2xl">
							Where To?
						</div>
						<div className="flex flex-col gap-6 pt-4 text-gray-500">
							<a
								className="text-xl"
								href="#introduction">
								Introduction
							</a>
							<a
								className="text-xl"
								href="#services-overview">
								Services Overview
							</a>
							<a
								className="text-xl"
								href="#project-engagement">
								Project Engagement
							</a>
							<a
								className="text-xl"
								href="#payments-and-fees">
								Payments and Fees
							</a>
							<a
								className="text-xl"
								href="#intellectual-property-rights">
								Intellectual Property Rights
							</a>
							<a
								className="text-xl"
								href="#confidentiality-and-non-disclosure">
								Confidentiality and Non-Disclosure
							</a>
							<a
								className="text-xl"
								href="#termination-of-services">
								Termination of Services
							</a>
							<a
								className="text-xl"
								href="#limitation-exclusion-of-liability">
								Limitation & Exclusion of Liability
							</a>
							<a
								className="text-xl"
								href="#amendments-to-terms">
								Amendments to Terms
							</a>
							<a
								className="text-xl"
								href="#governing-law-and-jurisdiction">
								Governing Law and Jurisdiction
							</a>
						</div>
					</div>

					<div className="text-gray-500 flex flex-col gap-20 text-lg">
						<div
							className="grid gap-8"
							id="introduction">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Introduction
							</div>
							<div>
								Welcome to Kohpact, a remote freelance creative
								agency based in India. By accessing our website
								and engaging with our services, you agree to be
								bound by these Terms of Service
								(&quot;Terms&quot;). If you do not agree with
								these Terms, please refrain from using our
								services.
							</div>
						</div>

						<div
							className="grid gap-8"
							id="services-overview">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Services Overview
							</div>
							<div>
								Kohpact offers a range of creative services,
								including:
								<div className="pl-3">
									<li>Web Design and Development</li>
									<li>Branding</li>
									<li>Photo/Video Editing</li>
									<li>Graphic Design</li>
									<li>Motion Design</li>
								</div>
								Specific details regarding each service will be
								provided in the individual project proposals or
								agreements.
							</div>
						</div>

						<div
							className="grid gap-8"
							id="project-engagement">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Project Engagement
							</div>
							<div>
								<li>
									<strong>Scope of Work:</strong> A detailed
									project proposal will outline the scope,
									deliverables, timelines, and costs. Changes
									to the agreed scope will result in
									additional charges.
								</li>
								<li>
									<strong>Client Responsibilities:</strong>{" "}
									Clients must provide all necessary
									materials, feedback, and approvals promptly
									to ensure deadlines are met.
								</li>
								<li>
									<strong>Revisions:</strong> The number of
									revisions allowed will be specified in the
									proposal. Extra revisions will incur
									additional fees.
								</li>
							</div>
						</div>

						<div
							className="grid gap-8"
							id="payments-and-fees">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Payments and Fees
							</div>
							<div>
								<li>
									<strong>Payment Terms:</strong> All fees
									will be outlined in the project proposal. A
									non-refundable deposit of [percentage]% is
									required to start the project. The remaining
									balance is due upon completion or as per
									agreed milestones.
								</li>
								<li>
									<strong>Late Payments:</strong> Invoices are
									due within [number of days] days of
									issuance. Late payments may result in a
									[percentage]% late fee and/or suspension of
									services.
								</li>
								<li>
									<strong>Refund Policy:</strong> No refunds
									will be provided for services that have
									already been initiated or completed.
								</li>
							</div>
						</div>

						<div
							className="grid gap-8"
							id="intellectual-property-rights">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Intellectual Property Rights
							</div>
							<div>
								<li>
									<strong>Ownership of Deliverables:</strong>{" "}
									Upon full payment, the client will own the
									rights to the final deliverables. Kohpact
									reserves the right to use the work for
									portfolio, marketing, and promotional
									purposes.
								</li>
								<li>
									<strong>Third-Party Licenses:</strong> The
									client is responsible for obtaining any
									necessary licenses for third-party materials
									unless otherwise agreed.
								</li>
							</div>
						</div>

						<div
							className="grid gap-8"
							id="confidentiality-and-non-disclosure">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Confidentiality and Non-Disclosure
							</div>
							<div>
								Both Kohpact and the client agree to keep all
								project-related information confidential.
								Neither party will disclose any information to
								third parties without prior consent, except as
								required by law.
							</div>
						</div>

						<div
							className="grid gap-8"
							id="termination-of-services">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Termination of Services
							</div>
							<div>
								<li>
									<strong>
										Termination by Either Party:
									</strong>{" "}
									Both Kohpact and the client may terminate
									the agreement with written notice. In the
									event of termination, the client will be
									responsible for payment for all work
									completed up to the date of termination.
								</li>
								<li>
									<strong>Termination for Breach:</strong> If
									either party fails to comply with these
									Terms, the agreement may be terminated
									immediately.
								</li>
							</div>
						</div>

						<div
							className="grid gap-8"
							id="limitation-exclusion-of-liability">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Limitation & Exclusion of Liability
							</div>
							<div>
								<li>
									Kohpact will use reasonable skill and care
									in providing our services. However, Kohpact
									is not liable for any losses, damages, or
									costs that may arise from using or being
									unable to use our services, including, but
									not limited to, indirect, special,
									incidental, or consequential damages.
								</li>
								<li>
									Kohpact&apos;s total liability for any claim
									arising out of or relating to our services,
									whether in contract, tort, or otherwise,
									shall not exceed the amount paid by the
									client for the specific project or service
									giving rise to such claim.
								</li>
								<li>
									Nothing in these Terms excludes or limits
									liability for death or personal injury
									caused by negligence, fraud, or any other
									liability which cannot be excluded or
									limited under applicable law.
								</li>
							</div>
						</div>

						<div
							className="grid gap-8"
							id="amendments-to-terms">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Amendments to Terms
							</div>
							<div>
								Kohpact reserves the right to amend these Terms
								at any time. Clients will be notified of any
								changes, and continued use of our services will
								constitute acceptance of the revised Terms.
							</div>
						</div>

						<div
							className="grid gap-8"
							id="governing-law-and-jurisdiction">
							<div className="font-bomstad text-black text-xl md:text-2xl">
								Governing Law and Jurisdiction
							</div>
							<div>
								These Terms shall be governed by and construed
								in accordance with the laws of India. Any
								disputes arising under or in connection with
								these Terms shall be subject to the exclusive
								jurisdiction of the courts located in India.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
