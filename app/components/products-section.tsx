import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Image } from "~/components/ui/image";

const products = [
  {
    id: 1,
    name: "Artisan Sourdough",
    description: "Handcrafted with natural fermentation",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
  },
  {
    id: 2,
    name: "Chocolate Croissant",
    description: "Buttery layers with rich chocolate",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    description: "Fresh blueberries in every bite",
    price: "$3.99",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80",
  },
  {
    id: 4,
    name: "Vanilla Cupcake",
    description: "Classic vanilla with buttercream",
    price: "$2.99",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80",
  },
  {
    id: 5,
    name: "Cinnamon Roll",
    description: "Warm, gooey, and perfectly spiced",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1626087929516-9b8e3b1e5e5e?w=600&q=80",
  },
  {
    id: 6,
    name: "French Baguette",
    description: "Crispy crust, soft interior",
    price: "$6.99",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of freshly baked goods, made daily with the
            finest ingredients
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="!pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} style={{ height: "auto" }}>
              <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border/50 group h-full flex flex-col">
                <div className="aspect-square overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 active:scale-95 transition-all duration-200 text-sm font-semibold shadow-sm hover:shadow-md">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
