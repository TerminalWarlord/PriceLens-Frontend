import { IconSearch } from '@tabler/icons-react';

function App() {

  return <div>
    <h1 className="text-4xl font-bold leading-10 flex items-center">
      <IconSearch className='text-blue-600 w-8 h-8' />
      <span className='pl-2 text-neutral-900'>Price</span>
      <span className='text-blue-600'>Lens</span>
    </h1>
    <p className='text-neutral-600'>Compare tech prices across Bangladesh, find the best deal instantly.</p>
  </div>
}

export default App
