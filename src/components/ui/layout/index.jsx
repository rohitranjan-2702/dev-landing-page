import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
	return (
	<div className="text-white bg-gradient-to-b from-blackk to-bluee">
		<div className="flex flex-col max-w-5xl w-full min-h-screen mx-auto px-8 pt-8 pb-4 md:px-12">
			<Navigation />
			{ children }
			<Footer />
		</div>
	</div>
	);
};
export default Layout;