import Navbar from "./Navbar";
import Hero from "./Hero";
import Trust from "./Trust";
import HowItWorks from "./HowItWorks";
import Plans from "./Plans";
import SuccessStories from "./SuccessStories";
import Footer from "./Footer";
import ProfilesCarousel from "./ProfilesCarousel";
import VideoSection from "./VideoSection";

function PublicSite({ onLoginClick }) {
    return (
        <>
            <Navbar onLoginClick={onLoginClick} />
            {/* other sections */}

            <Hero />
            <Trust />
            <HowItWorks />
            <ProfilesCarousel />
            <VideoSection />
            <Plans />
            <SuccessStories />
            <Footer />
        </>
    );
}

export default PublicSite;
