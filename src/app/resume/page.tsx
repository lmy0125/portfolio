'use client';
import React, { useState, useEffect } from 'react';
// import ResumePDF from '@/components/ResumePDF';
import dynamic from 'next/dynamic';

const ResumePDF = dynamic(() => import('@/components/ResumePDF'), { ssr: false });

const PDFDisplayPage = () => {
	return <ResumePDF />;
};

export default PDFDisplayPage;
