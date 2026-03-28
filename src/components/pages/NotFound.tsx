import { IconMoodEmpty } from "@tabler/icons-react"
import Footer from "../layout/Footer"
import Header from "../layout/Header"

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="mt-16 h-[calc(100vh-8rem)] flex flex-col items-center justify-center">
                <IconMoodEmpty className="w-15 h-15 my-4" />
                <h1 className="font-mono text-6xl">404</h1>
                <p className="tracking-widest">Not Found</p>
            </div>
            <Footer />
        </div >
    )
}

export default NotFound