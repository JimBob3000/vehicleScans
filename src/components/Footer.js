import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" className="text-center bg-gray-800">
            <div className="px-6 pt-6 pb-1">
                <div className="flex justify-center text-white text-3xl">
                    <a href="http://www.youtube.co.uk/user/quickcodenuggets" type="button" className="w-11">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="https://www.linkedin.com/in/james-phillip-elliott/" type="button" className="w-11">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/JimBob3000" type="button" className="w-11">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
            
            <Link to="/about" className="underline underline-offset-2 text-white">About</Link>

            <span className="pb-4 pt-1 block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 James Elliott - All Rights Reserved.</span>
        </footer>
    );
}

export default Footer;