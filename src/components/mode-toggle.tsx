import { Moon, Sun } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }
    return (
        <Button
            onClick={() => toggleTheme()}
            variant="ghost" size="icon"
            className="hover:bg-neutral-200 dark:hover:bg-neutral-50/5 
            hover:border dark:hover:border-neutral-50/5 cursor-pointer"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}