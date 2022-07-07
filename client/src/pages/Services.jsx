import ServiceComponent from "../components/ServiceComp"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Button from "../components/Button"


function Services() {
  return (
    <div className={`flex flex-col bg-white`}>
        <Navbar />
        
        <ServiceComponent cardProps={'bg-sky-200 border-sky-200'}/>

        <Button btnProps="text-white bg-slate-800 w-64 self-center" btnText="Upload Docs" toPage="/upload" />

        <Footer />
    </div>
  )
}
export default Services