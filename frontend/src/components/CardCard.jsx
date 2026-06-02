import { Trash2 } from 'lucide-react'
import { useCart } from '../context/Cart.jsx'


function CardCard({ title, poster, price, brand,uid }) {

    const {setItem} = useCart()
    const deleteOneCart=(id)=>{
        setItem(prev=>prev.filter(i=>i.uid!==id))
        
    }
    return (
        <div className="border w-[90%] px-2 py-3 rounded-md flex justify-between items-center gap-2 mx-auto">
            <div className='flex gap-x-2 items-center'>
                <img src={poster} className="w-20 h-20  bg-gray-300 rounded-sm sm:w-24 sm:h-24 object-cover object-center aspect-square" />
                <div className="flex flex-col items-start">
                    <h1 className='line-clamp-1'>{title}</h1>
                    <span className="text-gray-300 font-semibold">{brand}</span>
                    <span className="font-bold text-purple-500">$ {price}</span>
                </div>
            </div>
            <button onClick={()=>deleteOneCart(uid)}>
            <Trash2 color='red'/>
            </button>
        </div>
    )
}

export default CardCard