import { Image } from "~/components/ui/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About MyBakery
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Welcome to MyBakery, where tradition meets innovation. For over a
              decade, we've been crafting exceptional baked goods using
              time-honored techniques and the finest ingredients.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Our master bakers wake up before dawn every day to ensure you
              receive the freshest bread, pastries, and desserts. We source our
              ingredients locally whenever possible and never compromise on
              quality.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're looking for a morning croissant, a special occasion
              cake, or artisan bread for your table, we're here to make every
              bite memorable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80"
                alt="Bakery interior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
                alt="Fresh bread"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80"
                alt="Baking process"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80"
                alt="Pastries"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
