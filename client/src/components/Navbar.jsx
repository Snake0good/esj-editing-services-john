import { useState } from 'react'
import { Fa500Px, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    console.log(isNavExpanded)

    return (
        <div className="w-full h-16 bg-sky-200 flex justify-between place-items-center">
            <h1 className="text-3xl font-bold flex space-x-2 pl-5 place-items-center">
                <Fa500Px />
                <span>ESJ</span>
            </h1>
            
            {/* show the bars or the close on expanded bar */}
            {!isNavExpanded 
            ? <FaBars className='text-5xl pr-5 cursor-pointer md:hidden'onClick={() => {setIsNavExpanded(!isNavExpanded)}}/> 
            : <FaTimes className='text-5xl pr-5 cursor-pointer md:hidden' onClick={() => {setIsNavExpanded(!isNavExpanded)}} />
            }

            <ul className={!isNavExpanded ? 'hidden md:flex md:place-items-center md:w-1/2 md:bg-sky-200' : 'flex flex-col w-full absolute bg-sky-200 mt-[350px]'}>
                <Link to="/" 
                    className='hover:bg-sky-400 w-full pt-4 pb-4 text-center text-xl'
                    onClick={() => window.scrollTo(0,0)}
                >Home</Link>
                <Link to="/services" 
                    className='hover:bg-sky-400 w-full pt-4 pb-4 text-center text-xl'
                    onClick={() => window.scrollTo(0,0)}
                >Services</Link>
                <Link to="/prices" 
                    className='hover:bg-sky-400 w-full pt-4 pb-4 text-center text-xl'
                    onClick={() => window.scrollTo(0,0)}
                >Prices</Link>
                <Link to="/faq" 
                    className='hover:bg-sky-400 w-full pt-4 pb-4 text-center text-xl'
                    onClick={() => window.scrollTo(0,0)}
                >FAQ</Link>
                <Link to="/contact" 
                    className='hover:bg-sky-400 w-full pt-4 pb-4 text-center text-xl'
                    onClick={() => window.scrollTo(0,0)}
                >Contact</Link>
            </ul>
        </div>
    )
}
export default Navbar