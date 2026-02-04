import { Link, useNavigate } from 'react-router-dom'
import banner1 from '../assets/smbanner.png'
import banner2 from '../assets/smbanner2.png'

const categorieslist=[
  {
    title:"Men's",url:"https://res.cloudinary.com/dvca1dhsh/image/upload/v1769493141/j3wm8xiwkzuvz7e9orct.webp",category:'men'
  },
  {
    title:"Women's",url:"https://res.cloudinary.com/dvca1dhsh/image/upload/v1769442465/lgvliox3jcywub1uacjn.webp",category:"women"
  },
  {
    title:"Electronics",url:"https://res.cloudinary.com/dvca1dhsh/image/upload/v1769493361/rgvrwefem7ikgmls0tdz.webp",category:"electronic"
  },
  {
    title:"SmartPhones",url:"https://res.cloudinary.com/dvca1dhsh/image/upload/v1769779200/vdq2dosxo2wtb5wwq9m2.webp",category:"phone"
  },
  {
    title:"Sunglasses",url:"https://res.cloudinary.com/dvca1dhsh/image/upload/v1769489573/axzyyf20kyuo9qmesor9.webp",category:'sunglasses'
  },
  {
    title:"Shoes",url:"https://res.cloudinary.com/dvca1dhsh/image/upload/v1769433845/ijcmopufxcqn1swo6nlg.webp",category:"shoes"
  },
  {
    title:"Heels",url:"https://res.cloudinary.com/dvca1dhsh/image/upload/v1769786468/sqgjfyxadtl1v5xevhha.webp",category:"heel"
  }
]
function HomePage() {
  const navigate = useNavigate()

 
  return (
    <section>
      <div className='home side-p con-p'>
        <div className='hometext'>
          <h1>Be fashionable & confidient</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. ullam possimus optio, ipsa iusto similique.</p>
          <button onClick={() => navigate('/shop')}>eplore now</button>
        </div>
      </div>
<section className='side-p'>
 <h2>All Categories</h2>
 <div className='homecategorywrappper' >

 {
   categorieslist&&categorieslist.map((cate)=>(
     <Link to={'/search?category='+cate.category}className='homecategorybox' key={cate.title}>
      <img src={cate.url} alt={cate.title} />
<h4>{cate.title}</h4>
    </Link>
  ))
}
</div>
</section>
      <div className="smbanner side-p">
        <div className="smbannerbox">
          <img src={banner1} />
        </div>
        <div className="smbannerbox">
          <img src={banner2} />
        </div>
      </div>
      <div className='gender side-p'>
        <h2>shop by gender</h2>
        <div className='genderbox'>
          <button className='genderbtn' onClick={() => navigate('/search?category=men')} >mens</button>
          <button onClick={() => navigate('/shop?category=women')}>womens</button>
        </div>

      </div>
    </section>
  )
}

export default HomePage