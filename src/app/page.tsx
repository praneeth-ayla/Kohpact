import HeroSection from "@/components/HeroSection";
import LandingBento from "@/components/LandingBento";
import ServiceLandingPage from "@/components/ServiceLandingPage";

export default function Home() {
	return (
		<>
			<div className="px-3">
				<HeroSection />
				<ServiceLandingPage />
				<LandingBento />
			</div>
		</>
	);
}
