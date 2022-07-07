import { FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-slate-800 w-full p-5 text-blue-100 p-8 sm:justify-center">
        <div className='sm:flex justify-around'>
            <div className='flex flex-col space-y-2 mt-10'>
                <h1 className="font-bold text-white">ESJ - Editing</h1>
                <Link to="/about" className='hover:underline w-fit'>About</Link>
                <Link to="/prices" className='hover:underline w-fit'>Prices</Link>
                <Link to="/contact" className='hover:underline w-fit'>Contact</Link>
            </div>

            <div className='flex flex-col space-y-2 mt-10'>
                <h1 className="font-bold text-white">Services</h1>
                <Link to="/services" className='hover:underline w-fit'>Article Preparation</Link>
                <Link to="/services" className='hover:underline w-fit'>Article Proofreading</Link>
                <Link to="/services" className='hover:underline w-fit'>Copywriting</Link>
            </div>

            <div className='flex flex-col space-y-2 mt-10'>
                <h1 className="font-bold text-white">Support</h1>
                <Link to="/services" className='hover:underline w-fit'>Privacy Policy</Link>
                <Link to="/faq" className='hover:underline w-fit'>FAQs</Link>
                <Link to="/" className='hover:underline w-fit'>Terms of Service</Link>
                <Link to="/" className='hover:underline w-fit'>Language</Link>
            </div>
        </div>

        <div className='flex flex-col space-y-2 mt-10 mb-10 sm:place-items-center'>
            <h1 className="font-bold text-white">Payment Options</h1>
            <div className='flex space-x-4'>
                <Link to="/prices" className='text-3xl'><FaCcMastercard /></Link>
                <Link to="/prices" className='text-3xl'><FaCcVisa /></Link>
                <Link to="/prices" className='text-3xl'><FaCcStripe /></Link>
                <Link to="/prices" className='text-3xl'><FaCcPaypal /></Link>
                <Link to="/prices" className='text-3xl'><FaCcApplePay /></Link>
            </div>
        </div>
        
        <h1 className='text-center'>&copy; Goody's Web Dev, {new Date().getFullYear()}</h1>
        
    </div>
  )
}
export default Footer