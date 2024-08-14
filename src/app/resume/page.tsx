'use client';
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Set the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const PDFDisplayPage = () => {
	const [width, setWidth] = useState<number>(600);

	useEffect(() => {
		const updateWidth = () => {
			const containerWidth = document.getElementById('pdf-container')!.clientWidth;
			setWidth(containerWidth - 20); // Subtract padding
		};

		updateWidth();
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	}, []);

	const pdfUrl = '/resume.pdf';

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = pdfUrl;
		link.download = 'David SWE Resume.pdf'; // You can set any name here
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="relative flex flex-col items-center min-h-[100dvh] p-4 w-full">
			<div className="p-6 max-w-3xl w-full">
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-tight">Resume</h1>
					<Button onClick={handleDownload} className="flex items-center gap-2">
						<Download size={20} />
						Download
					</Button>
				</div>
				<div id="pdf-container" className="overflow-hidden">
					<Document file={pdfUrl} className="flex justify-center">
						<Page
							pageNumber={1}
							width={width}
						/>
					</Document>
				</div>
			</div>
		</div>
	);
};

export default PDFDisplayPage;
