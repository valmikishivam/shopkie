
function Footer() {
    return (
        <footer className='grid grid-cols-2 lg:grid-cols-4 p-2 border-t place-items-center '>
            <div >
                <img src='/favicon.png' className='w-20 h-20 object-cover object-center bg-blue-950' />
                    <b className='my-2'>Connect us</b>
                <div className='flex flex-row items-start gap-2'>
                    <span className='border border-black p-2 w-8 h-8 rounded-full flex justify-center items-center transition-colors ease-in duration-700 hover:bg-black hover:text-purple-500'> ◙ </span>
                    <span className='border border-black p-2 w-8 h-8 rounded-full flex justify-center items-center transition-colors ease-in duration-700 hover:bg-black hover:text-purple-500'> 𝐢𝐧 </span>
                    <span className='border border-black p-2 w-8 h-8 rounded-full flex justify-center items-center transition-colors ease-in duration-700 hover:bg-black hover:text-purple-500'> f </span>
                    <span className='border border-black p-2 w-8 h-8 rounded-full flex justify-center items-center transition-colors ease-in duration-700 hover:bg-black hover:text-purple-500'> 𝕏 </span>
                </div>
            </div>

            <div >
                <b>QUICK LINKS</b>
                <div className='flex flex-col items-start py-2 gap-y-1'>
                    <span className='cursor-pointer'>Home</span>
                    <span className='cursor-pointer'>shop</span>
                    <span className='cursor-pointer'>about</span>
                    <span className='cursor-pointer'>contact</span>
                    <span className='cursor-pointer'>login</span>
                </div>
            </div>

            <div >
                <b>SUPPORT</b>
                <div className='flex flex-col items-start py-2 gap-y-1'>
                    <span className='cursor-pointer'>Help</span>
                    <span className='cursor-pointer'>FAQs</span>
                    <span className='cursor-pointer'>shipping</span>
                    <span className='cursor-pointer'>Returns</span>
                    <span className='cursor-pointer'>Terms</span>
                    <span className='cursor-pointer'>Privicy</span>
                </div>
            </div>
            <div >
                <b>ACCOUNT</b>
                <div className='flex flex-col items-start py-2 gap-y-1'>
                    <span className='cursor-pointer'>Your account</span>
                    <span className='cursor-pointer'>cart</span>
                    <span className='cursor-pointer'>orders</span>
                    <span className='cursor-pointer'>Affilate program</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer