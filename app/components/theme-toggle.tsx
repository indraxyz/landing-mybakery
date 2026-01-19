import { Moon, Sun, Monitor, Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useTheme } from "~/hooks/use-theme";
import { type Theme } from "~/lib/theme";
import { cn } from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "~/components/ui/dropdown-menu";
import { useIsMobile } from "~/hooks/use-mobile";

export function ThemeToggle() {
  const [theme, setTheme, mounted] = useTheme();
  const isMobile = useIsMobile();
  
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Change theme"
        className="relative hover:bg-accent rounded-lg"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    );
  }

  const themes: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: "light", icon: <Sun className="h-4 w-4" />, label: "Light" },
    { value: "dark", icon: <Moon className="h-4 w-4" />, label: "Dark" },
    { value: "system", icon: <Monitor className="h-4 w-4" />, label: "System" },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[2];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Change theme"
          className="relative hover:bg-accent rounded-lg"
        >
          {currentTheme.icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isMobile ? "start" : "end"} className="w-48">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => {
              setTheme(t.value);
            }}
            className={cn(
              "flex items-center justify-between",
              theme === t.value && "bg-accent"
            )}
          >
            <div className="flex items-center gap-3">
              {t.icon}
              <span className="font-medium">{t.label}</span>
            </div>
            {theme === t.value && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
