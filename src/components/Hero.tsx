// components/Hero.js
import { Button } from '@/components/ui/button';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import ThreeDScene from '@/components/ThreeDScene';

const Hero = () => {
	return (
		<section className="h-screen flex flex-col justify-center items-center text-center p-6">
			<h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
				<AnimatedShinyText>Welcome to My Portfolio</AnimatedShinyText>
			</h1>
			<p className="text-lg md:text-2xl mb-8 animate-fade-in">
				I am a passionate developer with skills in Next.js, Tailwind CSS, and Shadcn.
			</p>
			<Button className="bg-gold hover:bg-gold-dark text-navy px-4 py-2 rounded animate-slide-up">
				Get in Touch
			</Button>
			<ThreeDScene />
		</section>
	);
};
export default Hero;
