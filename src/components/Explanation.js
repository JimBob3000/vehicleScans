import search from '../images/search.png';
import clipboard from '../images/clipboard.png';
import shield from '../images/shield.png';

const Explanation = () => {
    return ( 
        <section id="explanation" className="bg-white pt-24 pb-0 md:py-24 py-11">
            <div className="">
                <h1 className="pb-11 text-3xl m-auto justify-center flex md:flex-row text-center flex-col">
                    <span>Check before you buy,</span>
                    <span className="pl-3"></span>
                    <span>avoid the headache!</span>
                </h1>
            </div>
            <div className="lg:w-[1000px] md:w-[750px] md:flex-row w-full flex flex-col m-auto pb-11">
                <div className="md:w-5/12 flex justify-center">
                    <img className="md:w-[300px] w-[250px]" src={search} alt="Get the full background"/>
                </div>
                <div className="md:w-7/12 flex flex-col justify-center">
                    <div className="px-8 py-16">
                        <h1 className="text-2xl">
                            Get the full picture
                        </h1>
                        <p className='pt-8'>
                            Make sure you know the history of the vehicle before purchasing it. Find out its MOT history and SORN status
                            to avoid being left out of pocket.
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:w-[1000px] md:w-[750px] md:flex-row w-full flex flex-col-reverse m-auto pb-11">
                <div className="md:w-7/12 flex flex-col justify-center">
                    <div className="px-8 py-16">
                        <h1 className="text-2xl">
                            Get what you expect
                        </h1>
                        <p className='pt-8'>
                            Many cars have a hidden history which the seller does not disclose. Unless you want an unexpected project
                            you should double check if that good deal is actually a good deal.  
                        </p>
                    </div>
                </div>
                <div className="md:w-5/12 flex justify-center">
                    <img className="md:w-[300px] w-[250px]" src={clipboard} alt="Get what you expect" />
                </div>
            </div>

            <div className="lg:w-[1000px] md:w-[750px] md:flex-row w-full flex flex-col m-auto">
                <div className="md:w-5/12 flex justify-center">
                    <img className="md:w-[300px] w-[250px]" src={shield} alt="Government backed data" />
                </div>
                <div className="md:w-7/12 flex flex-col justify-center">
                    <div className="px-8 py-16">
                        <h1 className="text-2xl">
                            Government backed data
                        </h1>
                        <p className='pt-8'>
                            Using trusted, well maintained and up to date data ensures we can provide you with the most accurate and 
                            trustworthy information.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Explanation;