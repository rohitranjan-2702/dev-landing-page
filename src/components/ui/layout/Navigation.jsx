import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { links } from '../../../utils/data'

const linkStyles = "py-2 font-poppins text-greyy hover:text-white";
const buttonStyles = `
	text-white font-medium rounded-lg text-sm text-center
	bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
	hover:bg-gradient-to-br 
	focus:ring-1 focus:outline-none 
	focus:ring-blue-300 dark:focus:ring-blue-800 
	shadow-lg
	px-5 py-2.5
`

const Navigation = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [ currentPage, setCurrentPage ] = useState(location.pathname);

	return (
	<nav className="flex items-center justify-between">
		<a href="/" className="font-poppins font-semibold text-white text-3xl md:text-4xl">
			DEV
		</a>

		<ul className="flex">

			<li>
				<a 
					href="/" 
					className={`${linkStyles} ${currentPage === '/' && 'text-white'}`} 
					onClick={() => navigate("/")}
				>
					Home
				</a>
			</li>

			<li>
				<a 
					href="/portfolio" 
					className={`${linkStyles} ml-6 ${currentPage === '/portfolio' && 'text-white'}`} 
					onClick={() => navigate("/portfolio")}
				>
					Portfolio
				</a>
			</li>

			<li>
				<a 
					href={links.Resume.url} target="_blank" rel="noopener noreferrer"
					className={`${buttonStyles} hidden ml-8 sm:inline`}
				>
					{links.Resume.name}
				</a>
			</li>
		</ul>
	</nav>
	);
};
export default Navigation;