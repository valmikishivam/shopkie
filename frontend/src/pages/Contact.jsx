
function Contact() {
  return (
    <div className='w-full h-full p-3 flex flex-col  justify-center items-center'>
      <div className='shadow-gray-500 shadow-lg p-2 w-full max-w-3xl mx-auto rounded-md'>
        <h1 className='text-2xl md:text-3xl font-bold'>Get in <span className='text-purple-500'>Touch</span></h1>

       <form className='flex flex-col gap-y-2 mt-2'>
        <input type="text" placeholder='username'className='w-full outline-none border border-gray-400 p-2 focus:ring-2 focus:ring-purple-500'/>
        <input type="email" placeholder='email'className='w-full outline-none border border-gray-400 p-2 focus:ring-2 focus:ring-purple-500'/>
        <textarea type="text" placeholder='Message' className='w-full outline-none border border-gray-400 p-2 focus:ring-2 focus:ring-purple-500'/>
        <button className='bg-black text-purple-500 text-lg px-2 py-1'>Submit</button>
       </form>
      </div>
       <div className='p-2'>
        <h1 className='font-semibold text-2xl text-center'>
          Follow Us
        </h1>
        <div className='flex items-center gap-x-3 p-2'>
          <span  className='border border-black p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center transition-colors ease-in duration-700 hover:bg-black hover:text-purple-500'> ◙ </span>
          <span className='border border-black p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center transition-colors ease-in duration-700 hover:bg-black hover:text-purple-500'> 𝐢𝐧 </span>
          <span className='border border-black p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center transition-colors ease-in duration-700 hover:bg-black hover:text-purple-500'> f </span>
          <span className='border border-black p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center transition-colors ease-in duration-700 hover:bg-black hover:text-purple-500'> 𝕏 </span>
        </div>
       </div>
    </div>
  )
}

export default Contact