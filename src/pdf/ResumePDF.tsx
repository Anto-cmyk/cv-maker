import React from 'react';
import { Document } from '@react-pdf/renderer';

import type { ResumeData } from '../types/resume';

import ModernPDF from './ModernPDF';
import ExecutivePDF from './ExecutivePDF';
import MinimalPDF from './MinimalPDF';
import CorporatePDF from './CorporatePDF';
import CreativePDF from './CreativePDF';

interface Props {
resume: ResumeData;
selectedTemplate?: string;
}

const ResumePDF: React.FC<Props> = ({
resume,
selectedTemplate = 'modern',
}) => {
const template = selectedTemplate.toLowerCase();

let TemplateComponent: React.ComponentType<{
resume: ResumeData;
}>;

switch (template) {
case 'executive':
TemplateComponent = ExecutivePDF;
break;


case 'minimal':
  TemplateComponent = MinimalPDF;
  break;

case 'corporate':
  TemplateComponent = CorporatePDF;
  break;

case 'creative':
  TemplateComponent = CreativePDF;
  break;

case 'modern':
default:
  TemplateComponent = ModernPDF;
  break;


}

return (
<Document
title={resume.personal.fullName || 'Resume'}
author={resume.personal.fullName || 'Resume Builder'}
subject="Professional Resume"
> <TemplateComponent resume={resume} /> </Document>
);
};

export default ResumePDF;
