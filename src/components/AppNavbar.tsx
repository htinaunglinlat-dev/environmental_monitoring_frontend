import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../providers/theme-provider";
import { SidebarTrigger } from "./ui/sidebar";

const AppNavbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <nav className="container flex h-16 justify-between items-center border-b border-b-foreground-muted px-4">
      <div>
        <SidebarTrigger className="block md:hidden" />
      </div>
      <div>
        <Button variant={"outline"} size="icon" onClick={toggleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  );
};

export default AppNavbar;
