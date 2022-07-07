import Button from './Button'

function Hero() {
  return (
    <div className='md:relative w-full grid justify-items-end'>
        <img className='md:h-[500px] object-cover w-full md:flex-end md:w-5/6' src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="hero-pic" />
        <div className='p-5 md:absolute top-0 left-0 md:bg-[rgba(255,255,255,0.8)] md:w-1/2 md:min-w-[300px] md:h-[500px] md:flex md:flex-col md:place-content-center'>
            <h1 className='text-4xl text-center leading-normal'>The preferred <span className='underline decoration-slate-800'>proofreading</span> company of the <span className='underline decoration-orange-600'>medical science</span> industry.</h1>
            <p className='text-center mt-4 mb-8'>We know how much effort goes into publishing a paper. Our team of experts provide English language editing, academic translation and other manuscript preparation services, all backed by our 100% satisfaction guarantee.</p>
            <div className='flex justify-center p-0'>
              <Button btnProps="text-white bg-sky-800 pl-10 pr-10 underline hover:border-sky-800 hover:bg-white hover:text-sky-800" btnText="Upload Docs Now" toPage="/upload" />
            </div>
        </div>
        <div className='flex justify-around w-full mb-10'>
            <Button btnProps="text-white bg-slate-800 w-32 hover:border-slate-800 hover:bg-white hover:text-slate-800" btnText="Get Started" toPage="/services" />
            <Button btnProps="text-white bg-orange-600 w-32 hover:border-orange-600 hover:bg-white hover:text-orange-600"  btnText="See Prices" toPage="/prices" />
        </div>
    </div>
  )
}
export default Hero