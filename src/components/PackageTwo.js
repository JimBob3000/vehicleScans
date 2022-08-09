import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from "../hooks/useFetch";
import loading from '../images/loading.gif'

const PackageOne = () => {
    const vrn = sessionStorage.getItem("vrn")
    const motData = sessionStorage.getItem("motData")
    const parsedMotData = JSON.parse(motData)
    const mot = parsedMotData[0]
    const { data, isPending, error } = useFetch(process.env.API_URL + 'dvla/' + vrn);
    sessionStorage.setItem("dvlaData", JSON.stringify(data))
    const dvlaData = sessionStorage.getItem("dvlaData")
    const parsedDvlaData =  JSON.parse(dvlaData)
    // const test = dvlaData[0]

    return (
        <section id="packageTwo">
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
        <div className="pt-32 pb-12 bg-white mx-auto text-center flex-grow justify-center xl:w-[1200px] lg:w-[1000px] w-[450px] mx-auto">
            <h1 className="text-3xl text-gray-900 pb-12">Results for { vrn }</h1>
                <section id="motData">
                    <h2 className="text-left text-2xl border-dashed border-y-2 py-1">Vehicle</h2>
                
                    <div className="mb-10 pt-4 flex flex-row lg:justify-around justify-between">
                        <div className="flex flex-col text-left">
                            <p className="py-1"><b>Make:</b> {mot.make}</p>
                            <p className="py-1"><b>Model:</b> {mot.model}</p>
                            <p className="py-1"><b>Fuel:</b> {mot.fuelType}</p>
                            <p className="py-1"><b>Wheelplan:</b> {parsedDvlaData.wheelplan}</p>
                        </div>
                        <div className="flex flex-col text-left">
                            <p className="py-1"><b>Date registered: </b> {moment(mot.firstUsedDate).format('MMM YYYY')}</p>
                            <p className="py-1"><b>Colour:</b> {mot.primaryColour}</p>
                            <p className="py-1"><b>Engine:</b> {parsedDvlaData.engineCapacity}cc</p>
                            <p className="py-1"><b>Emissions:</b> {parsedDvlaData.co2Emissions} g/km</p>
                            <p className="py-1"><b>Weight:</b> {parsedDvlaData.revenueWeight} kg</p>
                        </div>
                    </div>

                    <h2 className="text-left text-2xl border-dashed border-y-2 py-1">Status</h2>
                    <div className="mb-10 pt-4 flex lg:flex-row flex-col lg:justify-around justify-between">
                        
                            {parsedDvlaData.taxStatus === 'Taxed' ? 
                                <div className="flex flex-col text-left">
                                    <p className="font-bold text-5xl text-green-600">TAXED</p>
                                    <p className="py-1"><b>Expires:</b> {moment(parsedDvlaData.taxDueDate).format('MMM YYYY')}</p>
                                </div>
                            : 
                                <div className="flex flex-col text-left">
                                    <p className="font-bold text-5xl text-red-500">{parsedDvlaData.taxStatus}</p>
                                    <p className="py-1"><b>Expired:</b> {moment(parsedDvlaData.taxDueDate).format('MMM YYYY')}</p>
                                </div>
                            }
                            
                            {!parsedDvlaData.markedForExport ? 
                                <div className="flex flex-col text-left">
                                    <p className="lg:pt-0 pt-4 font-bold text-5xl text-green-600">NOT EXPORTED</p>
                                </div>
                            : 
                                <div className="flex flex-col text-left">
                                    <p className="lg:pt-0 pt-4 font-bold text-5xl text-red-500">EXPORTED</p>
                                </div>
                            }
                    </div>
                    
                    <h2 className="text-left text-2xl border-dashed border-y-2 py-1">MOT history</h2>
                    {mot.motTests.map(test =>
                        <div className="border-dashed border-b-2" key={test.motTestNumber}>
                            <div className="flex justify-between pt-4">
                                <div className="text-2xl text-left">
                                    <p className="pb-1 font-bold">{moment(test.completedDate).format('Do MMMM YYYY')}</p>
                                    <p className={test.testResult === "PASSED" ? "font-bold text-5xl text-green-600" : "font-bold text-5xl text-red-500"}>{test.testResult === "PASSED" ? "PASS" : "FAIL"}</p>
                                </div>
                                <div className="flex items-end text-left">
                                    <div>
                                        <p><b>Odometer:</b> {test.odometerValue} {test.odometerUnit}</p>
                                        <p><b>Expiry date:</b> {test.testResult === "PASSED" ? moment(test.expiryDate).format('Do MMMM YYYY') : "N/A"}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 text-left">
                                <h3 className="pb-2 font-bold">Failures</h3>
                                {test.rfrAndComments.map(comment => {
                                    if(comment.type === "FAIL") {
                                        return <div>
                                            <p className="pl-1 py-1"><FontAwesomeIcon className="text-red-500 pr-2" icon={faCircleXmark} />{comment.text}</p>
                                        </div>
                                    }
                                })}
                            </div>

                            <div className="py-10 text-left">
                                <h3 className="pb-2 font-bold">Advisories</h3>
                                {test.rfrAndComments.map(comment => {
                                    if(comment.type !== "FAIL") {
                                        return <div>
                                            <p className="pl-1 py-1"><FontAwesomeIcon className="text-yellow-500 pr-2" icon={faCircleExclamation} />{comment.text}</p>
                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                    )}
                </section>
        </div>
        }
        </section>
    )
}
 
export default PackageOne;