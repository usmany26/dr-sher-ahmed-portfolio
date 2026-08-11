import Image from "next/image";
import { Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { AboutServices, BottomSections, ClinicWhy, ResultsTestimonials } from "@/components/Sections";
import { SiteFooter } from "@/components/SiteFooter";
import { ToothSection } from "@/components/ui";

export default function HomePage() {
  return <main className="page-shell">
    <ToothSection variant="hero" id="home">
      <Header />
      <div className="hero-content">
        <div className="hero-copy">
          <h1>Restore<br />Your True<br />Smile</h1>
          <p>Advanced dental care for a healthier, more confident you.</p>
          <div className="success"><strong>98%</strong><span>Loyal Dental<br />Patients</span><Heart /></div>
        </div>
        <div className="hero-art">
          <Image className="hero-main-image" src="/assets/hero-image-cropped.png" alt="Healthy polished tooth surrounded by modern dental tools" fill priority sizes="(max-width: 720px) 100vw, 58vw" />
        </div>
      </div>
    </ToothSection>
    <AboutServices /><ClinicWhy /><ResultsTestimonials /><BottomSections /><SiteFooter />
  </main>;
}
