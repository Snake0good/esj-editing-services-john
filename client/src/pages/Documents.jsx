import axios from "axios"
import { useEffect, useState } from "react"
import { FaCheckSquare, FaEdit, FaTrashAlt } from "react-icons/fa"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"

function Documents() {
    const [documents, setDocuments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchDocs = async () => {
            const response = await axios.get("http://localhost:3001/api/upload")
            setDocuments(response.data)
            setIsLoading(false)
        }
        fetchDocs()
        console.log()
    }, [])

  return (
    <div className="min-h-screen grid">
        <Navbar />
        <h1 className="text-5xl text-center p-5"> Admin Documents </h1>
        <div className="flex flex-wrap mt-3 mb-10">
            {isLoading ? <Loader /> : null }
            { documents && documents.map((doc) => (
                <div className="w-64 h-96 border-2 rounded-xl m-3 p-2 space-y-3 shadow-xl" key={doc._id}>
                    <img className="object-cover w-full h-2/3 rounded-xl" src={doc.photo} />
                    <h1><span className="font-bold">Name: </span> {doc.name}</h1>
                    <h2><span className="font-bold">Email: </span> {doc.email}</h2>
                    <div className="flex space-x-5 justify-end w-full pr-3">
                        <FaTrashAlt className="text-xl text-red-500 cursor-pointer" />
                        <FaEdit className="text-xl text-slate-600 cursor-pointer"/>
                    </div>
                </div>
            ))}
        </div>
        

        <Footer />
    </div>
  )
}
export default Documents