import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { BackgroundImage } from "~/components/ui/background-image";

const heroSlides = [
  {
    id: 1,
    title: "Fresh Baked Daily",
    subtitle: "Artisan Breads & Pastries",
    description: "Experience the finest handcrafted baked goods made with love and premium ingredients",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80",
    cta: "Order Now",
  },
  {
    id: 2,
    title: "Sweet Delights",
    subtitle: "Decadent Desserts",
    description: "Indulge in our collection of cakes, cookies, and sweet treats that will satisfy your cravings",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1920&q=80",
    cta: "Explore Menu",
  },
  {
    id: 3,
    title: "Custom Orders",
    subtitle: "Special Occasions",
    description: "Celebrate your special moments with our custom-designed cakes and pastries",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=80",
    cta: "Get Quote",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-primary",
        }}
        loop={heroSlides.length >= 3}
        loopAdditionalSlides={1}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <BackgroundImage src={slide.image}>
                <div className="absolute inset-0 bg-black/40" />
              </BackgroundImage>
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto text-center text-white">
                    <p className="text-base sm:text-lg mb-3 font-medium text-primary-foreground/90 uppercase tracking-wider">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      className="group px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => {
                        const element = document.querySelector("#products");
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {slide.cta}
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
