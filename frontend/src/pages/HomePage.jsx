import banner1 from '../assets/smbanner.PNG'
import banner2 from '../assets/smbanner2.PNG'
import hero from '../assets/hero.PNG'
import { Link, useNavigate } from 'react-router-dom'
const categories = [
  {
    id: 1, url: 'https://res.cloudinary.com/dvca1dhsh/image/upload/v1769493141/j3wm8xiwkzuvz7e9orct.webp', title: "Men's", category: 'men'
  },
  {
    id: 2, url: 'https://res.cloudinary.com/dvca1dhsh/image/upload/v1769442465/lgvliox3jcywub1uacjn.webp', title: "Women's", category: 'women'
  },
  {
    id: 3, url: 'https://res.cloudinary.com/dvca1dhsh/image/upload/v1769493361/rgvrwefem7ikgmls0tdz.webp', title: "Electronics", category: 'electronic'
  },
  {
    id: 4, url: 'https://res.cloudinary.com/dvca1dhsh/image/upload/v1769779200/vdq2dosxo2wtb5wwq9m2.webp', title: "smartPhones", category: 'phone'
  },
  {
    id: 5, url: 'https://res.cloudinary.com/dvca1dhsh/image/upload/v1769489573/axzyyf20kyuo9qmesor9.webp', title: "Sunglasses", category: 'sunglasses'
  },
  {
    id: 6, url: 'https://res.cloudinary.com/dvca1dhsh/image/upload/v1769433845/ijcmopufxcqn1swo6nlg.webp', title: "Shoes", category: 'shoes'
  },
  {
    id: 7, url: 'https://res.cloudinary.com/dvca1dhsh/image/upload/v1769786468/sqgjfyxadtl1v5xevhha.webp', title: "Heels", category: 'heel'
  }
]
const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full overflow-y-auto no-scrollbar'>

      <div className='w-full h-screen bg-cover bg-center bg-no-repeat p-2 flex justify-center items-center'
        style={{ backgroundImage: `url(${hero})` }}>
        <div className='flex flex-col gap-y-3 text-center w-full lg:w-[80%]'>
          <h1 className='text-2xl lg:text-3xl font-bold'>Be fashionable <span className='text-purple-600'>Be Confident</span></h1>
          <p className='p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti repellendus, tempore voluptas rerum, libero, culpa sunt vero quo voluptatum ipsum minima. Quo, voluptas?</p>
          <Link to={'/shop'} className=' w-fit px-4 py-2 bg-black text-purple-500 mx-auto hover:bg-transparent hover:border hover:border-purple-500 cursor-pointer'> Explore</Link>
        </div>
      </div>
      <h1 className='text-purple-600 text-2xl lg:text-3xl'>Choose Category</h1>
      <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 px-2 py-3 gap-2'>
        {
          categories.map(i => (
            <div key={i.id} className='text-center bg-purple-400 p-2 rounded-md'>
              <img src={i.url} className='object-cover object-center' />
              <p className='w-full bg-amber-600 text-white  font-semibold py-2' onClick={() => navigate(`/search?category=${i.category}`)}>
                {i.title}
              </p>
            </div>
          ))
        }
      </section>

      <section className=' max-w-5xl w-full  grid grid-cols-1 lg:grid-cols-2 gap-3  px-2 py-3 mx-auto'>
        <div className='p-3 border-2'>
          <img src={banner1} className='object-cover object-center' />
        </div>
        <div className='p-3 border-2'>
          <img src={banner2} className='object-cover object-center' />
        </div>
      </section>

      <section className='w-full max-w-5xl p-5 mx-auto'>
        <h1 className='text-purple-600 text-2xl lg:text-3x text-center'>Shop by Gender</h1>
        <div className='grid grid-cols-2 gap-x-3 mx-auto p-3'>
          <button className='px-3 py-2 bg-black text-purple-500 hover:bg-transparent hover:border hover:border-purple-500' 
          onClick={()=>navigate('/search?category=men')}>Men</button>
          <button className='px-3 py-2 bg-black text-purple-500 hover:bg-transparent hover:border hover:border-purple-500'
          onClick={()=>navigate('/search?category=women')}>Women</button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
