import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const PackageOne = () => {
    const vrn = sessionStorage.getItem("vrn")
    const motData = sessionStorage.getItem("motData")
    const parsedMotData = JSON.parse(motData)
    let commentId = 0

    return (
        <section id="packageOne" className="px-2 sm:px-4 md:px-8 lg:px-0 pt-32 pb-12 bg-white mx-auto text-center flex-grow justify-center xl:w-[1200px] lg:w-[1000px] w-[100%] mx-auto">
            <h1 className="text-3xl text-gray-900 pb-12">Results for { vrn }</h1>

            <section id="motData">
                <h2 className="text-left text-2xl border-dashed border-y-2 py-1">Vehicle</h2>

                <div className="mb-10 pt-4 flex flex-col sm:flex-row lg:justify-around justify-between">
                    <div className="flex flex-col text-left">
                        <p className="py-1"><b>Make:</b> {parsedMotData.make}</p>
                        <p className="py-1"><b>Model:</b> {parsedMotData.model}</p>
                        <p className="py-1"><b>Fuel:</b> {parsedMotData.fuelType}</p>
                    </div>
                    <div className="flex flex-col text-left">
                        <p className="py-1"><b>Date registered: </b> {moment(parsedMotData.firstUsedDate, 'YYYY.MM.DD').format('MMM YYYY')}</p>
                        <p className="py-1"><b>Colour:</b> {parsedMotData.primaryColour}</p>
                    </div>
                </div>
                
                <h2 className="text-left text-2xl border-dashed border-y-2 py-1">MOT history</h2>
                
                {parsedMotData.motTests !== null ? parsedMotData.motTests.map(test =>
                    <div className="border-dashed border-b-2" key={test.motTestNumber}>
                        <div className="flex flex-col justify-center sm:flex-row sm:justify-between pt-4">
                            <div className="text-2xl text-center sm:text-left">
                                <p className="pb-1 font-bold">{moment(test.completedDate, 'YYYY.MM.DD').format('Do MMMM YYYY')}</p>
                                <p className={test.testResult === "PASSED" ? "font-bold text-5xl text-green-600" : "font-bold text-5xl text-red-500"}>{test.testResult === "PASSED" ? "PASS" : "FAIL"}</p>
                            </div>
                            <div className="flex items-end text-left pt-4 sm:pt-0">
                                <div>
                                    <p><b>Odometer:</b> {test.odometerValue} {test.odometerUnit}</p>
                                    <p><b>Expiry date:</b> {test.testResult === "PASSED" ? moment(test.expiryDate, 'YYYY.MM.DD').format('Do MMMM YYYY') : "N/A"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-10 text-left">
                            <h3 className="pb-2 font-bold">Failures</h3>
                            {test.rfrAndComments.map(comment => {
                                if(comment.type === "FAIL") {
                                    commentId++
                                    return <div key={"commentId" + commentId}>
                                        <p className="pl-1 py-1"><FontAwesomeIcon className="text-red-500 pr-2" icon={faCircleXmark} />{comment.text}</p>
                                    </div>
                                }
                            })}
                        </div>

                        <div className="py-10 text-left">
                            <h3 className="pb-2 font-bold">Advisories</h3>
                            {test.rfrAndComments.map(comment => {
                                if(comment.type !== "FAIL") {
                                    commentId++
                                    return <div key={"commentId" + commentId}>
                                        <p className="pl-1 py-1"><FontAwesomeIcon className="text-yellow-500 pr-2" icon={faCircleExclamation} />{comment.text}</p>
                                    </div>
                                }
                            })}
                        </div>
                    </div>
                ) : 
                
                <div className="text-2xl text-center pt-4">
                    <p className="pb-1 font-bold">NO MOT HISTORY</p>
                </div>
                }
            </section> 
        </section>
    )
}
 
export default PackageOne;