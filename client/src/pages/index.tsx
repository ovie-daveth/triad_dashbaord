import { About } from "@/components/landingpage/About";
import { Cta } from "@/components/landingpage/Cta";
import { FAQ } from "@/components/landingpage/FAQ";
import { Features } from "@/components/landingpage/Features";
import { Footer } from "@/components/landingpage/Footer";
import { Hero } from "@/components/landingpage/Hero";
import { HowItWorks } from "@/components/landingpage/HowItWorks";
import { Navbar } from "@/components/landingpage/Navbar";
import { Newsletter } from "@/components/landingpage/Newsletter";
import { Pricing } from "@/components/landingpage/Pricing";
import { ScrollToTop } from "@/components/landingpage/ScrollToTop";
import { Services } from "@/components/landingpage/Services";
import { Sponsors } from "@/components/landingpage/Sponsors";
import { Team } from "@/components/landingpage/Team";
import { Testimonials } from "@/components/landingpage/Testimonials";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="lg:px-20 md:px-10 px-4">
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default LandingPage;
