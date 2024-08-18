import { Icons } from '@/components/icons';

export const projects = [
	{
		title: 'UUSphere',
		slug: 'uusphere',
		dates: 'Mar 2023 - Jun 2024',
		description:
			'Social media platform that helps students to manage their class schedules, and connect with classmates.',
		stack: ['Next.js', 'Tailwind', 'Typescript', 'Python', 'Supabase', 'Prisma'],
		href: 'https://www.uusphere.com',
		image: '',
		video: 'https://lmy-portfolio.s3.us-east-2.amazonaws.com/uusphere.mov',
		content: (
			<div>
				<p>
					This personal project is a social media web app specifically designed for students at UCSD. It aims to
					facilitate connections and communication among students by integrating features that address common needs
					and challenges faced during each academic quarter.
				</p>
				<p>
					The idea for this app emerged from observing a recurring trend where students frequently post their class
					schedules on social media platforms at the start of every quarter. Recognizing the need for a more
					organized and efficient way to manage and share these schedules, I developed this tool to streamline the
					process and enhance the overall student experience.
				</p>
				<p>
					UUSphere offers a user-friendly interface for selecting and managing class schedules. It integrates
					information from various sources, including professor ratings and course descriptions, to help students
					make informed decisions about their classes. Once users select their courses, they are automatically
					added to dedicated chat rooms for each class, fostering communication and collaboration among classmates.
				</p>
				<p>
					Additionally, UUSphere features a unique system for identifying students who are enrolled in multiple of
					the same courses. This functionality helps users connect with peers who share similar schedules, ensuring
					that they can easily find and engage with classmates who are in their courses throughout the quarter. By
					providing a centralized platform for schedule management and peer interaction, UUSphere aims to enhance
					the academic experience and build a stronger sense of community within the UCSD student body.
				</p>
			</div>
		),
	},
	{
		title: 'Knowledge Tree Builder',
		slug: 'knowledge-tree-builder',
		dates: 'Jan 2024 - Mar 2024',
		description: 'An open-source project that helps you to organize and manage AI-generated responses.',
		stack: ['Next.js', 'Typescript', 'Tailwind', 'OpenAI'],
		href: 'https://knowledge-tree-git-main-lmy0125s-projects.vercel.app/',
		github: 'https://github.com/lmy0125/knowledge-tree',
		image: '',
		video: 'https://lmy-portfolio.s3.us-east-2.amazonaws.com/knowledge-tree-builder.mov',
		content: (
			<div>
				<p>
					The Knowledge Tree Builder is a powerful tool designed to help you organize and manage the responses from
					AI models like GPT-4 as you explore new material. It enables you to create tree-like structures that
					visually organize information in a way that makes sense to you. This approach allows you to easily expand
					and delve deeper into any branch of knowledge that piques your curiosity.
				</p>
				<p>
					The tool offers two distinct modes for displaying and interacting with the information:
					<ul>
						<li>
							<strong>Graph Mode:</strong> This mode visualizes responses as a dynamic graph with nodes and
							edges. You can freely navigate through the space, expanding branches and exploring various nodes to
							see how different pieces of information are connected.
						</li>
						<li>
							<strong>List Mode:</strong> This mode presents responses in a hierarchical list format. It provides
							a structured view of the information, allowing you to drill down into specific topics or expand
							sections to reveal more details.
						</li>
					</ul>
				</p>
				<p>
					Whether you prefer a spatial, interactive approach or a more traditional, structured layout, the
					Knowledge Tree Builder adapts to your learning style, helping you to better understand and retain complex
					information.
				</p>
			</div>
		),
	},

	{
		title: 'Roomie',
		slug: 'roomie',
		dates: 'Jan 2023 - Mar 2023',
		description: 'Web application that helps students to find roommates based on their preferences and interests.',
		stack: ['Next.js', 'Typescript', 'Firebase'],
		href: 'https://roomie-green.vercel.app/',
		github: 'https://github.com/CSE210-G13/my-roommates',
		image: '',
		video: 'https://lmy-portfolio.s3.us-east-2.amazonaws.com/roomie.mov',
		content: (
			<div>
				<p>
					Roomie is a web application designed to assist students in finding compatible roommates based on their
					preferences and interests. Users create profiles detailing their interests, living habits, schedules, and
					social preferences, allowing the app to match them with potential roommates who align with their
					criteria.
				</p>
				<p>
					This was a project built by a group of 5 students. During the development process, we applied software
					engineering principles within the Scrum framework. We established clear goals, broke down tasks, and
					developed a detailed roadmap to guide our development process. This experience provided insight into
					real-world application development, including conducting user studies, confirming user requirements, and
					designing features tailored to those needs.
				</p>
				<p>
					As the Scrum Master for this project, I facilitated daily stand-up meetings and weekly sprint reviews to
					ensure tasks were effectively assigned and progress was monitored. I addressed both technical and
					non-technical questions from team members, helping to coordinate efforts and support the team throughout
					the project lifecycle.
				</p>
			</div>
		),
	},
	{
		title: 'Cloud Storage Server',
		slug: 'cloud-storage-server',
		dates: 'Jan 2023 - Mar 2023',
		description: 'A distributed cloud storage server under the RAFT protocol.',
		stack: ['Golang', 'gRPC'],
		github: 'https://github.com/lmy0125/Cloud-Storage-Server',
		image: '',
		video: 'https://lmy-portfolio.s3.us-east-2.amazonaws.com/raft.mov',
		content: (
			<div>
				<p>
					This project involved developing a distributed application that required extensive knowledge of sockets
					programming, Remote Procedure Calls (RPCs), scale-out techniques, networked storage, load balancing,
					fault tolerance, and cloud computing. The goal was to design a system that could effectively handle
					scalability and reliability challenges in a distributed environment.
				</p>
				<p>
					A crucial component of this project was understanding and implementing the Raft protocol. The Raft
					protocol is a consensus algorithm designed to manage a distributed system’s state and ensure consistency
					across multiple nodes. It achieves this by electing a leader node that manages the log replication
					process, ensuring that all nodes in the cluster agree on the same state and can recover from failures.
				</p>
				<p>
					The Raft protocol is closely related to the CAP theorem, which states that a distributed system can only
					achieve at most two of the following three guarantees: Consistency, Availability, and Partition
					Tolerance. Raft primarily addresses the Consistency aspect of the CAP theorem by ensuring that all nodes
					in the system have the same data, even in the presence of failures. By leveraging Raft, the application
					was able to maintain high consistency while also addressing the challenges of fault tolerance and
					scalability.
				</p>
				<p>
					Useful links:
					<br />
					<a href="https://raft.github.io/">Raft Visualization</a>
					<br />
					<a href="https://thesecretlivesofdata.com/raft/">Best Raft Tutorial</a>
				</p>
			</div>
		),
	},
	{
		title: 'Ray Tracing',
		slug: 'ray-tracing',
		dates: 'Sep 2021 - Dec 2021',
		description: 'Ray Tracing engine that produce realistic 3D scene images with advanced techniques.',
		stack: ['C++', 'OpenGL'],
		github: 'https://github.com/lmy0125/Ray-Tracing',
		image: '/images/ray-tracing.jpg',
		video: '',
		content: (
			<div>
				<p>
					Ray tracing is a rendering technique used to generate realistic images by simulating the way light
					interacts with objects in a scene. It traces the path of light rays as they travel through the scene,
					interacting with objects and surfaces to determine the final color of each pixel in the image. By
					accurately modeling the behavior of light, ray tracing can produce high-quality images with realistic
					lighting, shadows, reflections, and refractions.
				</p>
				<p>
					In this project, I implemented a ray tracing engine using OpenGL, incorporating several advanced
					techniques to enhance image quality. Key features of the implementation include:
					<ul>
						<li>
							<strong>Antialiasing:</strong> This technique reduces visual artifacts such as jagged edges
							(aliasing) by smoothing out the color transitions between pixels, resulting in a more polished and
							natural appearance.
						</li>
						<li>
							<strong>Global Illumination:</strong> This approach models the way light is diffusely reflected and
							interacts with multiple surfaces, capturing the complex interplay of indirect lighting to produce
							more realistic shading and color variations.
						</li>
						<li>
							<strong>Soft Shadows:</strong> Instead of harsh, uniform shadows, this technique simulates the
							gradual transition from light to shadow, reflecting how shadows become softer and more diffused as
							they move away from the occluding object.
						</li>
					</ul>
				</p>
				<p>
					By integrating these techniques, the project aimed to push the boundaries of realistic image rendering,
					providing an immersive and visually compelling experience. The use of OpenGL facilitated efficient
					implementation and visualization of these complex effects, allowing for detailed exploration and
					manipulation of lighting and shading in the rendered scenes.
				</p>
			</div>
		),
	},
];
