import { Menu, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { ThemeToggle } from "~/components/theme-toggle";
import { cn } from "~/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/50 shadow-sm navigation-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="text-2xl font-bold text-primary"
            >
              MyBakery
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent side="right">
                <DrawerHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <DrawerTitle className="text-2xl font-bold text-primary">
                        MyBakery
                      </DrawerTitle>
                      <DrawerDescription className="sr-only">
                        Navigation menu
                      </DrawerDescription>
                    </div>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <X className="h-5 w-5" />
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerHeader>
                <div className="flex flex-col gap-2 p-6 overflow-y-auto drawer-content">
                  {navItems.map((item) => (
                    <DrawerClose key={item.href} asChild>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(item.href);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className={cn(
                          "text-lg font-medium py-3 px-4 rounded-lg hover:text-primary hover:bg-accent transition-all duration-200 cursor-pointer drawer-link"
                        )}
                      >
                        {item.label}
                      </a>
                    </DrawerClose>
                  ))}
                  <div className="pt-6 mt-4 border-t border-border">
                    <div className="text-sm font-semibold mb-3 px-4 drawer-label">
                      Appearance
                    </div>
                    <div className="px-4">
                      <ThemeToggle  />
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
