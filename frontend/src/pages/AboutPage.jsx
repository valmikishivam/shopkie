import ceo from '../assets/team4.jpg'
import t1 from '../assets/team1.jpg'
import t2 from '../assets/team2.jpg'
import t3 from '../assets/team3.jpg'
import t5 from '../assets/team5.png'
function AboutPage() {

  return (
    <div className='p-2'>
      <div className='flex gap-2 flex-col md:flex-row'>
        <div className='lg:w-[70%] w-full p-2'>
          <h1 className='text-2xl text-purple-600'>Our Story</h1>
          <div className='p-3'>
            <p className='mb-2'>

              Our journey began with a simple idea to make online shopping easy and reliable.
            </p>
            <p className='mb-2'>

              We believe customers deserve quality products at fair prices. Every product is carefully selected to meet our standards. Transparency and trust guide everything we do. We focus on creating a smooth and secure shopping experience. Customer satisfaction is always our top priority.
            </p>
            <p className='mb-2'>

              We continuously improve to serve our customers better. We see our customers as long-term partners, not just buyers. Innovation and reliability drive our growth. Thank you for being a part of our journey.
            </p>
          </div>
        </div>
        <div className='flex-1 w-full aspect-square'>
          <img src={ceo} className='w-full h-full' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 px-2 py-4'>
        <div>
          <h1 className='text-2xl md:text-3xl text-purple-600'>Our Vision</h1>
          <p className='p-2'>
            To become a trusted e-commerce platform known for reliability, innovation, and customer-first experiences, where people shop with confidence and ease.
          </p>
        </div>
        <div>
          <h1 className='text-2xl md:text-3xl text-purple-600'>Our Mission</h1>
          <p className='p-2'>
            To deliver quality products at fair prices while providing a seamless, secure, and transparent shopping experience for every customer.
          </p>
        </div>
        <div>
          <h1 className='text-2xl md:text-3xl text-purple-600'>Our Goal</h1>
          <p className='p-2'>
            Our goal is to continuously improve our services, expand our product range, and build long-term relationships by putting customer satisfaction at the center of everything we do
          </p>
        </div>
      </div>
      <div className='p-3'>
        <h1 className='text-2xl font-bold text-purple-600 text-center p-2'>Our Team & Members</h1>
        <section className='w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto'>
          <img src={t1} className='aspect-square object-cover w-[200px] h-[200px]' />
          <img src={t2} className='aspect-square object-cover w-[200px] h-[200px]' />
          <img src={t3} className='aspect-square object-cover w-[200px] h-[200px]' />
          <img src={ceo} className='aspect-square object-cover w-[200px] h-[200px]' />
          <img src={t5} className='aspect-square object-cover w-[200px] h-[200px]' />
        </section>
      </div>
      <h1 className='text-center text-2xl font-bold p-2'>What our customer's say</h1>
      <section className=' w-full inline-flex overflow-x-scroll gap-x-3 px-3 py-2 no-scrollbar'>
        <div className='border-x border-x-gray-500 p-2 rounded-sm w-[320px] flex-shrink-0'>
          <h1 className='font-semibold p-2'>Rahul S.</h1>
          <p>
            “Great quality products and fast delivery. The entire shopping experience was smooth and hassle-free.”
          </p>
        </div>
        <div className='border border-r-gray-500 p-2 rounded-sm w-[320px] flex-shrink-0 bg-slate-200'>
          <h1 className='font-semibold p-2'>Priya M.</h1>
          <p>
            “I loved the pricing and the product quality. Customer support was helpful and responsive.”
          </p>
        </div>
        <div className='border border-r-gray-500 p-2 rounded-sm w-[320px] flex-shrink-0'>
          <h1 className='font-semibold p-2'>Amit K.</h1>
          <p>
            “Easy ordering, secure payment, and exactly what was shown on the website. Highly recommended!”
          </p>
        </div>
        <div className='border border-r-gray-500 p-2 rounded-sm w-[320px] flex-shrink-0 bg-slate-200 '>
          <h1 className='font-semibold p-2'>Sneha R.</h1>
          <p>
            “Reliable service and genuine products. I’ll definitely shop again.”
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage