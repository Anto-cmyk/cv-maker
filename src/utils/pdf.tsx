import React from 'react';
import { pdf } from '@react-pdf/renderer';
import ResumePDF from '../pdf/ResumePDF';
import type { ResumeData } from '../types/resume';

export async function downloadResumePDF(
resume: ResumeData,
filename: string,
selectedTemplate?: string
): Promise<void> {
try {
const cleanFilename =
filename
.trim()
.replace(/[<>:"/\|?*]+/g, '') || 'resume';


const finalFilename = cleanFilename
  .toLowerCase()
  .endsWith('.pdf')
  ? cleanFilename
  : `${cleanFilename}.pdf`;

const pdfDocument = (
  <ResumePDF
    resume={resume}
    selectedTemplate={selectedTemplate}
  />
);

const blob = await pdf(pdfDocument).toBlob();

const url = URL.createObjectURL(blob);

const anchor = document.createElement('a');

anchor.href = url;
anchor.download = finalFilename;
anchor.style.display = 'none';

document.body.appendChild(anchor);

anchor.click();

document.body.removeChild(anchor);

window.setTimeout(() => {
  URL.revokeObjectURL(url);
}, 1000);


} catch (error) {
console.error('Failed to generate PDF:', error);
throw error;
}
}
