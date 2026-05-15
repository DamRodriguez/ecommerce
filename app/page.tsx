import AboutUsSection from "@/components/pages/home/AboutUsSection";
import BenefitsSection from "@/components/pages/home/BenefitsSection";
import CategoriesSection from "@/components/pages/home/CategoriesSection";
import CollectionSection from "@/components/pages/home/CollectionSection";
import HomeHero from "@/components/pages/home/HomeHero";
import InfoSection from "@/components/pages/home/InfoSection";
import NewsletterSection from "@/components/pages/home/NewsletterSection";
import SocialSection from "@/components/pages/home/SocialSection";

export default function HomePage() {
  return (
    <section>
      <HomeHero />
      <InfoSection />
      <CategoriesSection />
      <AboutUsSection />
      <CollectionSection />
      <SocialSection />
      <BenefitsSection />
      <NewsletterSection />
    </section>
  );
}
