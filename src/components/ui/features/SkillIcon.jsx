import { icons } from "../../../utils/icons";
const SkillIcon = ({ skill, index }) => {
	return (
		<div
			className="flex items-center justify-center rounded-full min-w-12
			my-6 mr-8 md:mx-0 md:mr-4 
			md:px-4 md:py-2 w-fit 
			bg-opacity-10 md:bg-white md:bg-opacity-5 md:border"
			key={index}
		>
			<img src={icons[skill]} alt={`${skill} icon`} className="h-8 md:h-5" />

			<span className="text-sm hidden ml-3 md:inline uppercase">{ skill }</span>
		</div>
	)
};
export default SkillIcon;