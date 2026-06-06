import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import RelatedProduct from '../components/RelatedProduct.jsx'
import { ChevronRight} from 'lucide-react'
import { useCart } from '../context/Cart.jsx'
import axios from 'axios';
const baseurl = import.meta.env.VITE_BACKEND_URL;
const SingleProduct = () => {
    const {setItem}=useCart()
    const [data, setData] = useState(null);
    const [poster, setPoster] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get(`${baseurl}/shopkie/products/${id}`);
            setPoster(res.data.product[0].poster)
            setData(res.data.product[0]);

        }
        getProduct()
        window.scrollTo({top:0,behavior:'smooth'})
    }, [id])
    return (
        <div>
            <section className=' flex flex-col md:flex-row p-2 gap-x-2'>
                <div className=' w-full md:w-1/2 flex flex-col-reverse md:flex-row'>
                    <div className='p-2 w-full md:w-[20%] flex gap-1 justify-center flex-row md:flex-col'>
                        {
                            data && data.images.map((image, index) => (
                                <img src={image} className="md:w-full w-[20%] border-2" key={index} onClick={() => setPoster(image)} />
                            ))
                        }
                    </div>
                    <div className='flex-1 w-full  flex justify-center items-center'>
                        <img src={poster} className='w-[80%] aspect-square bg-gray-200' />
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='p-2 text-gray-500 rounded-md flex items-center gap-x-1 w-fit'>
                        <Link to={'/'}>Home</Link> <ChevronRight />
                        <Link to={'/shop'}>Shop</Link> <ChevronRight />
                        <Link to={'#'}>{data?.category[0]}</Link><ChevronRight />
                        <span>{data?.category[1]}</span>
                    </div>
                    <div className='py-2 flex flex-col gap-y-2'>
                        <h1 className='text-xl'>{data?.title}</h1>
                        <span className='text-gray-600 font-mono'>{data?.brand}</span>
                        <h2 className='text-purple-500 text-lg font-bold'>$ {data?.price}</h2>
                        <p className='text-[#f3db53] text-2xl' style={{ textShadow: '0px 0px 1px #000' }}>

                            {
                                data?.rating === 1 ? (
                                    ' ★'
                                ) : data?.rating == 2 ? (
                                    ' ★  ★'
                                ) : data?.rating == 3 ? (
                                    ' ★  ★  ★'
                                ) : data?.rating == 4 ? (
                                    '★ ★ ★ ★'
                                ) : ('★ ★ ★ ★ ★ ')
                            }
                        </p>
                        <div>
                            Quantity : <input type="number" defaultValue={1} minLength={0} maxLength={5} className='p-2 outline-none border-2 border-gray-500' />
                        </div>
                        <div className='flex flex-wrap gap-x-2'>
                            <button className='px-4 py-2 bg-orange-600 text-white font-semibold'
                            onClick={()=>setItem(prev=>[...prev,data])}>Add To Cart</button>
                            <button className='px-4 py-2 bg-purple-500 text-white font-semibold'>Buy now</button>
                        </div>
                        <div>
                            <h1 className='text-2xl'>Product Description</h1>
                        <p className='py-2'>
                            {data?.description}
                        </p>
                        </div>
                    </div>
                </div>
            </section>
            <h1 className='text-3xl'>Related Products</h1>
            <RelatedProduct category={data?.category[1]}/>
        </div>
    )
}

export default SingleProduct
