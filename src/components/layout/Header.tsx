import { Link } from "react-router-dom"
import Menu from "./Menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"

const Header = () => {
    return (
        <>
            <header>
                <nav className="px-8 py-4 absolute top-0 bg-neutral-50/5 dark:bg-neutral-700/5 backdrop-blur-2xl w-full flex justify-between items-center">
                    <div>
                        <Link to={'/'}>
                            <h1 className="tracking-tighter font-bold text-xl">PriceLens</h1>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="capitalize">
                                    <div className="flex flex-col space-y-1">
                                        <div className="h-0.5 w-4 bg-black"></div>
                                        <div className="h-0.5 w-4 bg-black"></div>
                                        <div className="h-0.5 w-4 bg-black"></div>
                                    </div>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side={"right"}
                                className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
                            >
                                <SheetHeader>
                                    <SheetTitle>Navigation</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col space-y-5 items-center text-sm">
                                    <Menu />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="hidden md:flex space-x-5 items-center text-sm">
                        <Menu />
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header