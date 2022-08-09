import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleClickBackToHome = () => {
        navigate('/');
    }

    return ( 
        <section id="404" className="flex-grow">
            <div className="text-center mx-auto pt-32">
                <h1 className="text-3xl text-gray-900 pb-12">404 - Page not found</h1>
                <p className="pb-4">Sorry, this page cannot be found!</p>
                <button onClick={handleClickBackToHome} className="rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition duration-500 mx-auto px-16 py-2 mb-8 font-medium">Back to Home</button>    
            </div>
        </section>
     );
}
 
export default NotFound;