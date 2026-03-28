import { IconSearch, IconTrendingUp } from '@tabler/icons-react'
import SearchBar from '../SearchBar'
import { Link } from 'react-router-dom'

const TRENDING_KEYWORD = [
    "Macbook Neo",
    "RAM",
    "Mac Mini",
    "Airpods",
]

const Home = () => {
    return (
        <div className='flex items-center flex-col justify-center h-[calc(100vh-8rem)]'>
            <h1 className="text-4xl font-bold leading-10 flex items-center">
                <IconSearch className='text-blue-600 w-8 h-8' />
                <span className='pl-2 text-neutral-900 tracking-tight dark:text-neutral-200'>Price</span>
                <span className='text-blue-600 tracking-tight'>Lens</span>
            </h1>
            <p className='text-neutral-500 text-sm my-4 text-center'>Compare tech prices across Bangladesh, find the best deal instantly.</p>
            <SearchBar />
            <div className='flex space-x-2 items-center my-2 dark:text-neutral-500  text-neutral-600'>
                <IconTrendingUp />
                {TRENDING_KEYWORD.map(keyword => {
                    return <Link
                        to={`/search?query=${keyword}`}
                        key={keyword}
                        className='text-xs border px-2 h-fit py-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 '
                    >
                        {keyword}
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Home