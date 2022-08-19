import PackageOne from "./PackageOne";
import PackageTwo from "./PackageTwo";

const Results = () => {
    const motData = sessionStorage.getItem("motData")
    const packageSelected = sessionStorage.getItem("packageSelected")

    return (
        <div className="flex-grow">
            {!motData &&
                <p>No packages available for this vehicle.</p>
            }

            {packageSelected === 'basic' ? (
                motData &&
                <PackageOne />
            ) : (
                motData &&
                <PackageTwo />
            )}
        </div>
    )
}
 
export default Results;