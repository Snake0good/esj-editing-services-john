import { Link } from 'react-router-dom'
import { FaCloudDownloadAlt, FaComment, FaComments, FaFacebookMessenger, FaFileDownload, FaFileImage, FaFileUpload, FaLaptop, FaPencilAlt } from "react-icons/fa"

function HowItWorks({workingProps}) {
  return (
    <div className={`${workingProps}`}>
        <div className="mt-10 mb-10 pl-10 pr-10">
          <h1 className="text-5xl text-sky-200 text-center">How Does it Work?</h1>
          <div className="md:flex space-x-2 md:flex-wrap">
            <div className='md:w-full md:flex md:space-x-10 md:place-items-center'>
                <div className="flex flex-row text-center place-items-center justify-center space-x-5 mt-10 mb-10 p-5 shadow-xl border-2 rounded-xl bg-white border-white w-full md:h-44">
                    <h1 className='text-6xl text-sky-500 w-1/4'>1</h1>
                    <FaPencilAlt className="text-6xl self-center w-1/4" />
                    <h1 className="text-2xl w-1/2">Select the service that you need.</h1>
                </div>
                <div className="flex flex-row text-center place-items-center justify-center space-x-5 mt-10 mb-10 p-5 shadow-xl border-2 rounded-xl bg-white border-white w-full md:h-44">
                    <h1 className='text-6xl text-sky-500 w-1/4'>2</h1>
                    <FaFileUpload className="text-6xl self-center w-1/4" />
                    <h1 className="text-2xl w-1/2">Upload documents with <Link to="/services" className='underline italic'>safety load.</Link></h1>
                </div>
            </div>
            <div className='md:w-full md:flex md:space-x-10 md:place-items-center'>
                <div className="flex flex-row text-center place-items-center justify-center space-x-5 mt-10 mb-10 p-5 shadow-xl border-2 rounded-xl bg-white border-white w-full md:h-44">
                    <h1 className='text-6xl text-sky-500 w-1/4'>3</h1>
                    <FaComments className="text-6xl self-center w-1/4" />
                    <h1 className="text-2xl w-1/2">Work with out experts to fulfill your request.</h1>
                </div>
                <div className="flex flex-row text-center place-items-center justify-center space-x-5 mt-10 mb-10 p-5 shadow-xl border-2 rounded-xl bg-white border-white w-full md:h-44">
                    <h1 className='text-6xl text-sky-500 w-1/4'>4</h1>
                    <FaCloudDownloadAlt className="text-6xl self-center w-1/4" />
                    <h1 className="text-2xl w-1/2">Complete <Link to="/services" className='underline'>payment </Link> and download files.</h1>
                </div>
            </div>
         
          </div>
        </div>
    </div>
  )
}
export default HowItWorks