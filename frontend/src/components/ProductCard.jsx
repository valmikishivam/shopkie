import { useNavigate } from 'react-router-dom'

const ProductCard = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className='border overflow-hidden' onClick={()=>navigate(`/shop/${data.uid}`)}>
        <img src={data?.poster} className=' w-full  transition-transform duration-300 ease-in-out aspect-square hover:scale-110'/>
        <div className='p-2 flex flex-col gap-y-3 '>
            <h2 className='line-clamp-2'>{data?.title}</h2>
            <div className='flex justify-between items-center text-sm flex-wrap'>
            <span className='text-gray-400 w-fit'>{data?.brand}</span>
            <span className='text-purple-400'>{data?.category[0]}</span>
            </div>
            <span className='text-purple-600 font-bold w-fit'>$ {data?.price}</span>
        </div>
    </div>
  )
}

export default ProductCard