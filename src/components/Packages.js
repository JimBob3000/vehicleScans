import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import loading from '../images/loading.gif'

const Packages = () => {
    sessionStorage.removeItem("motData");
    sessionStorage.removeItem("packageSelected");

    const navigate = useNavigate();
    const vrn = sessionStorage.getItem("vrn");
    const { data, isPending, error } = useFetch('http://api.vehiclescans.co.uk:8080/mot/' + vrn);
    sessionStorage.setItem("motData", JSON.stringify(data))

    const handleClickPackageOne = () => {
        sessionStorage.setItem("packageSelected", "basic");
        navigate('/results');
    }

    const handleClickPackageTwo = () => {
        sessionStorage.setItem("packageSelected", "standard");
        navigate('/results');
    }

    return (
        <section id="packages" className="flex-grow">
            <div className="pt-32 pb-12 bg-white mx-auto text-center">
                <h1 className="text-3xl text-gray-900">
                    Packages for {vrn}
                </h1>
            </div>

            { error &&
                <div className="text-center mx-auto">
                    <p>Sorry, an error occured. Please try again later.</p>
                </div> 
            }

            {isPending && 
                <div className="flex align-center justify-center mx-auto pt-8">
                    <img src={loading} alt="loading"></img>
                </div>
            }

            {!isPending && !data && !error &&
                <div className="text-center mx-auto">
                    <p>Sorry, we couldn't find this vehicle.</p>
                </div> 
            }
            {data && 
            
                <div> 
                    <p className="text-center mx-auto pb-8">Please select a package</p>
            <div className="xl:w-[1200px] lg:w-[1000px] w-[400px] lg:flex-row flex flex-col justify-center mx-auto">
               
                
                <div className="lg:w-1/3 w-full mx-3 lg:pb-0 pb-11 drop-shadow-md">
                    <div className="border flex flex-col rounded-xl bg-white">
                        <div className="mb-8 text-center font-medium pb-4 text-4xl px-8 pt-8 pb-7 rounded-t-lg text-white bg-gray-800">
                            FREE!
                        </div>

                        <h3 className="mb-4 px-8 text-xl font-medium">MOT</h3>

                        <p className="pb-4 px-8">The essential package</p>

                        <ul className="mb-6 px-8 divide-y tracking-tight divide-black/10 font-medium">
                            <li className="flex items-center mb-3 pt-3">
                                <svg aria-hidden="true" viewBox="0 0 32 32" className="fill-green-400 h-8 w-8 flex-none fill-slate-600"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                                <span data-config-id="auto-txt-10-1">Basic vehicle data</span>
                            </li>
                            <li className="flex items-center mb-3 pt-3">
                                <svg aria-hidden="true" viewBox="0 0 32 32" className="fill-green-400 h-8 w-8 flex-none fill-slate-600"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                                <span data-config-id="auto-txt-11-1">MOT status</span>
                            </li>
                            <li className="flex items-center mb-3 pt-3">
                                <svg aria-hidden="true" viewBox="0 0 32 32" className="fill-green-400 h-8 w-8 flex-none fill-slate-600"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                                <span data-config-id="auto-txt-12-1">MOT history</span>
                            </li>
                        </ul>

                        <button onClick={handleClickPackageOne} className="rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition duration-500 mx-auto xl:px-28 lg:px-20 px-28 py-2 mb-8 font-medium">Continue</button>
                    </div>
                </div>

                <div className="lg:w-1/3 w-full mx-3 lg:pb-0 pb-11 drop-shadow-md">
                    <div className="border flex flex-col rounded-xl bg-white">
                        <div className="mb-8 text-center font-medium pb-4 text-4xl px-8 pt-8 pb-7 rounded-t-lg text-white bg-gray-800">
                            FREE!
                        </div>

                        <h3 className="mb-4 px-8 text-xl font-medium">MOT & tax</h3>

                        <p className="pb-4 px-8">The full background package</p>

                        <ul className="mb-6 px-8 divide-y tracking-tight divide-black/10 font-medium">
                            <li className="flex items-center mb-3 pt-3">
                                <svg aria-hidden="true" viewBox="0 0 32 32" className="fill-green-400 h-8 w-8 flex-none fill-slate-600"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                                <span data-config-id="auto-txt-10-1">Additional vehicle data</span>
                            </li>
                            <li className="flex items-center mb-3 pt-3">
                                <svg aria-hidden="true" viewBox="0 0 32 32" className="fill-green-400 h-8 w-8 flex-none fill-slate-600"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                                <span data-config-id="auto-txt-11-1">SORN status</span>
                            </li>
                            <li className="flex items-center mb-3 pt-3">
                                <svg aria-hidden="true" viewBox="0 0 32 32" className="fill-green-400 h-8 w-8 flex-none fill-slate-600"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                                <span data-config-id="auto-txt-12-1">Export status</span>
                            </li>
                        </ul>

                        <button onClick={handleClickPackageTwo} className="rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition duration-500 mx-auto xl:px-28 lg:px-20 px-28 py-2 mb-8 font-medium">Continue</button>
                    </div>
                </div>

                <div className="lg:w-1/3 w-full mx-3 drop-shadow-md pb-11">
                    <div className="border flex flex-col rounded-xl bg-white">
                        <div className="mb-8 text-center font-medium pb-4 text-4xl px-8 pt-8 pb-7 rounded-t-lg text-white bg-gray-800">
                            Coming soon
                        </div>

                        <h3 className="mb-4 px-8 text-xl font-medium">Data science</h3>

                        <p className="pb-4 px-8">Vehicle specific analysis</p>

                        <ul className="mb-6 px-8 divide-y tracking-tight divide-black/10 font-medium">
                            <li className="flex items-center mb-3 pt-3">
                                <svg aria-hidden="true" viewBox="0 0 32 32" className="fill-green-400 h-8 w-8 flex-none fill-slate-600"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                                <span data-config-id="auto-txt-10-1">Model specific issues</span>
                            </li>
                            <li className="flex items-center mb-3 pt-3">
                                <svg aria-hidden="true" viewBox="0 0 32 32" className="fill-green-400 h-8 w-8 flex-none fill-slate-600"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                                <span data-config-id="auto-txt-11-1">Average statistics</span>
                            </li>
                            <li className="flex items-center mb-3 pt-3">
                                <svg aria-hidden="true" viewBox="0 0 32 32" className="fill-green-400 h-8 w-8 flex-none fill-slate-600"><path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path></svg>
                                <span data-config-id="auto-txt-12-1">Vehicle rarity & much more</span>
                            </li>
                        </ul>

                        <button disabled className="rounded-lg text-white bg-gray-300 mx-auto xl:px-28 lg:px-20 px-28 py-2 mb-8 font-medium">Continue</button>
                    </div>
                </div>
                
            </div>
            </div>
            }
        </section>
    );
}

export default Packages;