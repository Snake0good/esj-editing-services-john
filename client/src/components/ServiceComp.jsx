import { Link } from 'react-router-dom'
import { FaFileImage, FaLaptop, FaPencilAlt } from "react-icons/fa"

function ServiceComp({serviceProps, cardProps}) {
  return (
    <div className={`${serviceProps}`}>
        <div className="mt-10 mb-10 pl-10 pr-10">
          <h1 className="text-5xl text-slate-800 text-center">Services We Offer</h1>
          <div className="md:flex space-x-2">
            <div className={`flex flex-col text-center justify-center space-y-5 mt-10 mb-10 p-5 shadow-xl border-2 rounded-xl ${cardProps}`}>
              <FaPencilAlt className="text-6xl self-center" />
              <h1 className="text-3xl">English Language Editing</h1>
              <p className="text-xl">Submit with confidence – our native English-speaking editors, with subject-area expertise, provide you with a submission-ready manuscript edited for language and style.</p>
              <Link 
                className="font-bold text-xl text-blue-800 ease-in duration-200 hover:text-blue-500 cursor-pointer"
                to="/upload"
              >
                Learn More...
              </Link>
            </div>
            <div className={`flex flex-col text-center justify-center space-y-5 mt-10 mb-10 p-5 shadow-xl border-2 rounded-xl ${cardProps}`}>
              <FaFileImage className="text-6xl self-center" />
              <h1 className="text-3xl">Article Preparation Services</h1>
              <p className="text-xl">Submit with confidence – our native English-speaking editors, with subject-area expertise, provide you with a submission-ready manuscript edited for language and style.</p>
              <Link 
                className="font-bold text-xl text-blue-800 ease-in duration-200 hover:text-blue-500 cursor-pointer"
                to="/upload"
              >
                Learn More...
              </Link>
            </div>
            <div className={`flex flex-col text-center justify-center space-y-5 mt-10 mb-10 p-5 shadow-xl border-2 rounded-xl ${cardProps}`}>
              <FaLaptop className="text-6xl self-center" />
              <h1 className="text-3xl">Copywriting</h1>
              <p className="text-xl">Maximize the reach – our native English-speaking editors, with subject-area expertise, provide you with a submission-ready manuscript edited for language and style.</p>
              <Link 
                className="font-bold text-xl text-blue-800 ease-in duration-200 hover:text-blue-500 cursor-pointer"
                to="/upload"
              >
                Learn More...
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
export default ServiceComp