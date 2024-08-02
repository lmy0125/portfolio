import { MagicCard } from '@/components/magicui/magic-card';

const Project = ({ title, description, link }) => {
	return (
		<MagicCard
			className="bg-light-gray shadow-md rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
			gradientColor="#cc2e2e54">
			<h2 className="text-xl md:text-2xl font-bold mb-2 text-navy">{title}</h2>
			<p className="mb-4">{description}</p>
			<a href={link} className="text-gold hover:underline">
				View Project
			</a>
		</MagicCard>
	);
};
export default Project;
