import { ThemeProvider } from '@/components/theme-provider';
import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/aceui/aurora-background';

const fontSans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	metadataBase: new URL(DATA.url),
	title: {
		default: DATA.name,
		template: `%s | ${DATA.name}`,
	},
	description: DATA.description,
	openGraph: {
		title: `${DATA.name}`,
		description: DATA.description,
		url: DATA.url,
		siteName: `${DATA.name}`,
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: `${DATA.name}`,
		card: 'summary_large_image',
	},
	verification: {
		google: '',
		yandex: '',
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-256.png',
		apple: '/favicon-256.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn('min-h-screen bg-background antialiased', fontSans.className)}>
				{/* <AuroraBackground> */}
				<Navbar />
				{children}
				{/* </AuroraBackground> */}
			</body>
		</html>
	);
}
