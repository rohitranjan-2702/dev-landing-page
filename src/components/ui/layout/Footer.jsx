const linkStyles = "hover:text-blue-500"
const Footer = () => {
	return (
	<footer className="pt-8 mt-auto text-gray text-center">
		<p>
			Designed and Developed by{' '}
			<a href="https://github.com/rohitranjan-2702" className={linkStyles}>
				RoHiT
			</a>
			{' '}&{' '}
			<a href="https://github.com/mohammadshaad" className={linkStyles}>
				Saad
			</a>
		</p>
	</footer>
	)
};
export default Footer;
