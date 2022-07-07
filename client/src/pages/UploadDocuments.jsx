import { useState } from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Button from "../components/Button"
import axios from 'axios'
import { FaSadTear, FaTimes } from 'react-icons/fa'
import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router'

function UploadDocuments() {
  const [isError, setIsError] = useState(null)
  const [fileData, setFileData] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  
  const {name, email} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  }

  const onFileChange = (e) => {
    setFileData(e.target.files[0])
    console.log('fileData', e.target.files[0])
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsError(null)

    const newPost = {
      name, 
      email, 
      photo: fileData
    }

    try {
      const url = "http://localhost:3001/api/upload"
      await axios.post(url, newPost)
      .then(console.log(newPost))
      .then(navigate("/documents"))
    } catch(err) {
      setIsError(err)
    }

  }

  const closeErrorScreen = () => {
    setIsError(null)
  }

  return (
    <div className="flex flex-col">
        <Navbar />
        
        {/* <Button btnProps="text-white bg-slate-800" btnText="See All Docs" toPage="/documents" /> */}

        {isError ? 
        <div className='w-screen h-screen absolute bg-[rgba(0,0,0,0.7)] flex place-items-center justify-center'>
          <div className='absolute bg-sky-100 self-center w-4/6 h-96 flex flex-col text-center place-content-center place-items-center p-10 rounded-xl space-y-4'>
            <FaTimes className='absolute top-3 right-3 text-3xl cursor-pointer' onClick={closeErrorScreen}/>
            <h1 className='text-3xl text-red-500'>Looks like ther was an error...</h1>
            <FaSadTear className='text-3xl text-red-500 animate-pulse'/>
            <p className='text-xl'>Please try again.</p> 
          </div>
        </div>
            : null}
        <form 
          onSubmit={onSubmit}
          className="m-2 mt-24 mb-24 flex flex-col space-y-3 p-8 border-2 border-slate-800 rounded-xl self-center w-full max-w-[500px]"
          >
          <h1 className="text-2xl font-bold underline text-center">Upload Your Documents</h1>
          <div>
            <label className='font-bold' htmlFor="name">Customer Name: </label>
            <input 
              className='text-slate-500 p-1'
              type="text" 
              name="name" 
              placeholder="Enter Full Name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div>
            <label className='font-bold' htmlFor="email">Email: </label>
            <input 
              className='text-slate-500 p-1'
              type="email" 
              name="email" 
              placeholder="Enter email"
              value={email}
              onChange={onChange}
            />
          </div>
          
          {/* <div className='w-full flex space-x-3'>
            <input 
              className='w-2/3'
              type="file" 
              name="file-image"
              multiple={false}
              onChange={onFileChange}
            />

            {fileData && (
              <img className="w-1/3" src={URL.createObjectURL(fileData)} alt="" />
            )}
          </div> */}

          <div className='w-full flex space-x-3'>
            <FileBase 
              type="file"
              multiple={false}
              // onChange={onFileChange}
              onDone ={({ base64 })=> { 
                setFileData(base64)
                console.log(base64)
              }}
            />

            {fileData && (
              <img className="w-1/3 shadow-xl" src={fileData} alt="" />
            )}
          </div>

          <button className="p-2 w-24 self-center bg-slate-800 text-white rounded-lg border-2 border-transparent hover:text-slate-800 hover:bg-white hover:border-slate-800 ease-in duration-200"
          >
            Upload
          </button>
        </form>

        <Footer />
    </div>
  )
}
export default UploadDocuments