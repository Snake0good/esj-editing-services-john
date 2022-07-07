import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import ServiceComp from "./components/ServiceComp";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="">
      <Navbar />
      
      <Hero />

      <ServiceComp serviceProps={'bg-sky-200 pt-24 pb-24'} cardProps={'bg-white border-white'}/>

      <HowItWorks workingProps={'bg-slate-800 pt-24 pb-24'}/>

      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
