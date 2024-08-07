import { StaticImageData } from 'next/image';

export type Project = {
	title: string;
	slug: string;
	dates: string;
	description: string;
	stack: readonly string[];
	image?: string;
	video?: string;
	href?: string;
	github?: string;
	links?: readonly {
		icon: React.ReactNode;
		type: string;
		href: string;
	}[];
	content?: React.ReactNode | string;
};
