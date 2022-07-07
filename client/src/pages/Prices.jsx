import Navbar from "../components/Navbar"
import { useLayoutEffect, useEffect, useState } from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [numWords, setNumWords] = useState(0)
  const [serviceType, setServiceType] = useState('2hrs')
  const [totalCost, setTotalCost] = useState(0)
  const [pricePerWord, setPricePerWord] = useState(0.058)

  const wordChange = (e) => {
    let input = e.target.value
    if (input > 200000) {
      input = 200000
    }
    setNumWords(input);
    setTotalCost((pricePerWord * input).toFixed(2))
    }

  const handleServiceType = (e) => {
    let choice = e.target.value
    setServiceType(choice)
    
    if(choice === '2hrs'){
      setPricePerWord(0.058)
    } else if (choice === '4hrs') {
      setPricePerWord(0.055)
    } else if (choice === '8hrs') {
      setPricePerWord(0.053)
    } else if (choice === '1day') {
      setPricePerWord(0.034)
    } else if (choice === '2days') {
      setPricePerWord(0.032)
    } else if (choice === '3days') {
      setPricePerWord(0.028)
    } else if (choice === '5days') {
      setPricePerWord(0.026)
    } else if (choice === '7days') {
      setPricePerWord(0.020)
    }
  }

  useEffect(() => {
    // console.log('UE - num words', numWords)
    // console.log('UE - price per word', pricePerWord)
    setTotalCost((numWords * pricePerWord).toFixed(2))
  }, [numWords, serviceType, pricePerWord])


  return (
    <div>
        <Navbar />

        <div className="m-8 md:ml-16 md:mr-16 flex flex-col">
          <Header 
            title="Our Prices"
            text="Note: For regular editing services (1-day editing and longer), documents are returned by 11:59pm (Eastern time) on the due date. For example, a document submitted for 1-day editing services on Friday will be returned by 11:59pm on Saturday (Eastern time). If you are a university employee and need to make payment using an invoice from the university, please contact us at info@editorworld.com.  " 
          />

          <section className="w-full flex flex-col md:flex-row md:p-5 md:space-x-10 mt-10">
            <div className="w-full md:w-1/2 border-2 p-4 md:p-6 bg-white shadow-xl rounded-lg">
              <h1 className="text-3xl font-bold text-center">Prices</h1>
              <div className="flex pt-2 pb-2">
                <p className="text-xl underline w-2/3">Time / Words</p>
                <p className="text-xl underline w-1/3 text-end">Per Word</p>
              </div>
              <div className="flex pt-2 pb-2">
                <p className="text-lg w-2/3">2-hours (100 - 1500 words)</p>
                <p className="text-lg w-1/3 text-end">$0.058</p>
              </div>
              <div className="flex pt-2 pb-2">
                <p className="text-lg w-2/3">4-hours (150 - 6000 words)</p>
                <p className="text-lg w-1/3 text-end">$0.055</p>
              </div>
              <div className="flex pt-2 pb-2">
                <p className="text-lg w-2/3">8-hours (200 - 10,000 words)</p>
                <p className="text-lg w-1/3 text-end">$0.053</p>
              </div>
              <div className="flex pt-2 pb-2">
                <p className="text-lg w-2/3">1-Day (300 - 20,000 words)</p>
                <p className="text-lg w-1/3 text-end">$0.034</p>
              </div>
              <div className="flex pt-2 pb-2">
                <p className="text-lg w-2/3">2-Days (300 - 30,000 words)</p>
                <p className="text-lg w-1/3 text-end">$0.032</p>
              </div>
              <div className="flex pt-2 pb-2">
                <p className="text-lg w-2/3">3 Days (3000 - 34,000 words)</p>
                <p className="text-lg w-1/3 text-end">$0.028</p>
              </div>
              <div className="flex pt-2 pb-2">
                <p className="text-lg w-2/3">5 Days (5000 - 40,000 words)</p>
                <p className="text-lg w-1/3 text-end">$0.026</p>
              </div>
              <div className="flex pt-2 pb-2">
                <p className="text-lg w-2/3">7+ Days (35,000+ words)</p>
                <p className="text-lg w-1/3 text-end">$0.020</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 border-2 p-4 md:p-6 mt-10 md:mt-0 bg-white shadow-xl rounded-lg space-y-5">
            <h1 className="text-3xl font-bold text-center">Price Calculator</h1>
              <div className="flex flex-col">
                <label className="text-2xl" htmlFor="words">Number of Words</label>
                <input 
                  className="border p-2 text-lg" 
                  type="number" 
                  name="words" 
                  value={numWords}
                  onChange={wordChange}/>
              </div>
              <div className="flex flex-col">
                <label className="text-2xl">Service Type</label>
                <select 
                  className="border p-2 text-lg"
                  onChangeCapture={handleServiceType}>
                  <option value="2hrs">2 Hours</option>
                  <option value="4hrs">4 Hours</option>
                  <option value="8hrs">8 Hours</option>
                  <option value="1day">1 Day</option>
                  <option value="2days">2 Days</option>
                  <option value="3days">3 Days</option>
                  <option value="5days">5 Days</option>
                  <option value="7days">7+ Days</option>
                </select>

              </div>
              <div className="flex flex-col">
                <label className="text-2xl" htmlFor="ppw">Price per word:</label>
                <p 
                  className="border p-2 text-lg bg-gray-100" 
                  type="text" 
                  name="ppw">
                  ${pricePerWord.toFixed(3)}
                </p>
              </div>
              <div className="flex flex-row place-items-center">
                <label className="text-3xl w-1/2 md:w-2/3" htmlFor="words">Total Cost: </label>
                <p 
                  className="p-2 text-3xl w-1/2 md:w-1/3"> 
                  ${totalCost}
                </p>
              </div>

            </div>
          </section>

          <div className="self-center m-10">
            <Button  btnProps="text-white bg-slate-800 w-44" btnText="Get Started" toPage="/services" />
          </div>

        </div>

        <Footer />
    </div>
  )
}
export default Services