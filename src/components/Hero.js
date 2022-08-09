import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [vrn, setVrn] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("vrn", vrn.replaceAll(' ',''));
        navigate('/packages');
    }

    return ( 
        <section id="hero" className="bg-no-repeat bg-center bg-cover h-screen relative">
            <div className="md:w-[650px] w-[490px] flex flex-col justify-center mx-auto h-screen" >
                <div className="text-center  border border-slate-900 rounded-xl bg-white drop-shadow-3xl">
                    <h1 className="rounded-t-lg text-white bg-gray-800 py-6 mb-8 font-extrabold md:text-4xl text-3xl">
                        Thinking of buying a used car?
                    </h1>

                    <h2 className="md:text-2xl text-xl">
                        Don't buy a nightmare, check its history
                    </h2>

                    <form className="pb-4" onSubmit={handleSubmit}>
                        <div className="py-8 flex flex-row justify-center">
                            <div className="flex flex-row content-center align-middle">
                                <span className="numberPlateTrim"></span>
                                <input className="numberPlate placeholder-gray-600" placeholder="WA02 LZN" type="text" maxLength="8" spellCheck="false" required value={vrn} onChange={(e) => setVrn(e.target.value.toUpperCase())}></input>
                            </div>

                            <div className="flex content-center align-middle">
                                <button className="py-2 px-6 ml-6 bg-gray-800 hover:bg-gray-700 font-bold text-white text-xl rounded-xl border-2 border-transparent transition duration-500">Go</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;