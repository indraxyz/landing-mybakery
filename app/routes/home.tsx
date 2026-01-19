import type { Route } from "./+types/home";
import { Navigation } from "~/components/navigation";
import { HeroSection } from "~/components/hero-section";
import { ProductsSection } from "~/components/products-section";
import { AboutSection } from "~/components/about-section";
import { ContactSection } from "~/components/contact-section";
import { Footer } from "~/components/footer";
import { ThemeProvider } from "~/components/theme-provider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MyBakery - Fresh Baked Daily" },
    {
      name: "description",
      content: "Experience the finest handcrafted baked goods made with love and premium ingredients at MyBakery.",
    },
  ];
}

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <ProductsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
