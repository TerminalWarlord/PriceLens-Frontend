import { IconSearch } from '@tabler/icons-react'
import SearchBar from '../SearchBar'

const Home = () => {
    return (
        <div className='flex items-center flex-col justify-center h-screen'>
            <h1 className="text-4xl font-bold leading-10 flex items-center">
                <IconSearch className='text-blue-600 w-8 h-8' />
                <span className='pl-2 text-neutral-900 tracking-tight dark:text-neutral-200'>Price</span>
                <span className='text-blue-600 tracking-tight'>Lens</span>
            </h1>
            <p className='text-neutral-500 text-sm my-4'>Compare tech prices across Bangladesh, find the best deal instantly.</p>
            <SearchBar />
        </div>
    )
}

export default Home