import { aboutMe } from '../../../utils/data';
import pfp from '../../../assets/imgs/pfp.png';

const Header = () => {
	return (
	<header className='max-w-full flex flex-wrap flex-col md:flex-row items-center'>
		<img
			src={pfp}
			alt="profile photo"
			className="drop-shadow-xl h-64 aspect-square rounded-full mt-16 mb-10"
		/>
		
		<div className="md:w-1/2 flex flex-wrap whitespace-normal max-w-full mb-12">
			<h1 className="font-poppins text-3xl sm:text-4xl mb-1 font-medium text-white title">
					{aboutMe.name}
			</h1>

			<p className="font-poppins font-[300] text-xl italic sm:text-2xl text-gray-400 mb-3">
				{aboutMe.title}
			</p>

			<p className="w-[34rem] font-poppins font-[200] text-white">
				{aboutMe.bio}
			</p>
			</div>
	</header>
	)
};
export default Header;
