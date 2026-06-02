import { Home, SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'

const InvalidPage = () => {
  return (
     <div className='w-screen h-screen flex-1 flex flex-col justify-center items-center gap-4 p-4'>
      <div className='w-32 h-32 rounded-full bg-red-100 flex justify-center items-center'>
        <SearchX size={64} className='text-red-500' />
      </div>
      
      <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>
        404
      </h1>
      
      <h2 className='text-xl font-semibold text-gray-600 dark:text-gray-300'>
        Page Not Found
      </h2>
      
      <p className='text-gray-500 dark:text-gray-400 text-center max-w-md'>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Link 
        to='/'
        className='mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-600 transition-colors'
      >
        <Home size={20} />
        Go to Home
      </Link>
    </div>
  )
}

export default InvalidPage;