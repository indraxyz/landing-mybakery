import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const contactCards = [
  {
    id: 1,
    icon: MapPin,
    title: "Address",
    content: (
      <>
        123 Baker Street
        <br />
        Sweet City, SC 12345
      </>
    ),
  },
  {
    id: 2,
    icon: Phone,
    title: "Phone",
    content: "(555) 123-4567",
  },
  {
    id: 3,
    icon: Mail,
    title: "Email",
    content: "hello@mybakery.com",
  },
  {
    id: 4,
    icon: Clock,
    title: "Hours",
    content: (
      <>
        Mon-Sat: 7AM-7PM
        <br />
        Sun: 8AM-5PM
      </>
    ),
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Stop by our bakery or get in touch!
          </p>
        </div>

        <div className="mb-12">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
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
                slidesPerView: 4,
              },
            }}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={contactCards.length > 4}
            loopAdditionalSlides={2}
            className="pb-12!"
            style={{ height: "auto" }}
          >
            {contactCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <SwiperSlide key={card.id} style={{ height: "auto" }}>
                  <div className="bg-card p-6 rounded-xl border border-border/50 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full min-h-[200px] flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2 text-foreground">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.content}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 active:scale-95 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
