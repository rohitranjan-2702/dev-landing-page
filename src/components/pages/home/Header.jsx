import { aboutMe } from '../../../utils/data';
import pfp from '../../../assets/imgs/pfp.png';
import { links } from '../../../utils/data';
import { buttonStyles } from '../../ui/layout/Navigation';

const Header = () => {
	return (
	<header className='h-fit max-w-full gap-6 flex flex-wrap flex-col md:flex-row justify-center items-center my-24'>
		<img
			src={pfp}
			alt="profile photo"
			className="drop-shadow-xl h-64 aspect-square rounded-full"
		/>
		
		<div className="max-w-full w-[34rem] flex flex-wrap whitespace-normal text-center lg:text-left">
			<h1 className="font-poppins text-3xl w-full md:text-4xl mb-1 font-medium text-white title">
					{aboutMe.name}
			</h1>

			<p className="font-poppins font-[300] w-full text-xl italic md:text-2xl text-gray-400 mb-3">
				{aboutMe.title}
			</p>

			<p className="w-full font-poppins font-[200] text-white">
				{aboutMe.bio}
			</p>

			<p className="w-full font-poppins font-[200] mt-7 text-white">
				<a 
					href={links.Resume.url} target="_blank" rel="noopener noreferrer"
					className={`${buttonStyles} mx-auto md:hidden`}
				>
					{links.Resume.name}
				</a>
			</p>
		</div>
	</header>
	)
};
export default Header;
