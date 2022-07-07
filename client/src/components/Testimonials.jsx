import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useState, useEffect } from "react";
import data from './data';

function Testimonials() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length -1;
        if(index <0) {
            setIndex(lastIndex);
        }
        if(index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

  return (
    <div className="bg-sky-200 h-[800px] pt-14 pb-14 p-2 flex flex-col">    
        <h1 className="text-5xl text-slate-800 text-center">Client Testimonials</h1>
            <div className="relative flex justify-center">
                <div className="relative w-full p-8 h-[650px] max-w-[600px] flex overflow-hidden self-center">
                    {people.map((person, personIndex) => {
                        const {id, image, name, title, quote} = person

                        let position = 'nextSlide';
                        if (personIndex === index) {
                            position = 'activeSlide';
                        }
                        if (personIndex === index -1 ||
                            (index === 0 && personIndex === people.length - 1)) {
                                position = 'lastSlide';
                        }

                        return (
                                // <div className="absolute mt-16 p-4 overflow-hidden" key={id}>
                                //     <div className={`opacity-0 ease-linear duration-300 flex flex-col ${position}`} key={id}>
                                //         <p className="text-lg pt-5 pb-5">"{ quote }"</p>
                                //         <h1 className="text-3xl">{ name }</h1>
                                //         <h2 className="text-2xl">{ title }</h2>
                                //         <img className="self-center m-6 w-24 h-24 object-cover rounded-full" src={ image } alt='testimonial giver'/>
                                //     </div>
                                // </div>
                                <article key={id} className={`absolute top-0 left-0 w-full h-full opacity-0 ease-in duration-200 flex flex-col p-10 ${position}`}>
                                    <img src={image} alt={name} className="rounded-full w-24 h-24 object-cover self-center"/>
                                    <h4 className="font-bold text-3xl p-3"> {name} </h4>
                                    <p className="text-2xl p-3">{title}</p>
                                    <p className="text-xl mt-8 p-3">{quote}</p>
                                </article>
                        )
                    })} 
                <button 
                    className="p-1 bg-white text-3xl absolute left-0 top-1/2 cursor-pointer rounded-full" 
                    onClick={() => setIndex(index - 1)}
                >
                    <FaChevronLeft />            
                </button>
                <button 
                    className="p-1 bg-white text-3xl absolute right-0 top-1/2 cursor-pointer rounded-full" 
                    onClick={() => setIndex(index + 1)}
                >
                    <FaChevronRight />
                </button>
                </div>
            </div>
        </div>
  )
}
export default Testimonials