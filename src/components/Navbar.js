import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav id="nav" className="fixed inset-x-0 top-0 flex flex-row justify-center z-10 text-white bg-gray-800">
            <div className="p-4">
                <div className="font-extrabold tracking-widest text-xl"><Link to="/" className="transition duration-500 hover:text-slate-300">VehicleScans</Link></div>
            </div>
        </nav>
    );
}
 
export default Navbar;