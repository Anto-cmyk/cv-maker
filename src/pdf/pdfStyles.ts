import { StyleSheet } from '@react-pdf/renderer';

export const pdfColors = {
navy: '#0f172a',
blue: '#2563eb',
indigo: '#4f46e5',
purple: '#7c3aed',

white: '#ffffff',

slate900: '#0f172a',
slate800: '#1e293b',
slate700: '#334155',
slate600: '#475569',
slate500: '#64748b',
slate400: '#94a3b8',
slate300: '#cbd5e1',
slate200: '#e2e8f0',
slate100: '#f1f5f9',

border: '#e2e8f0',
background: '#f8fafc',
};

export const pdfStyles = StyleSheet.create({
page: {
size: 'A4',
backgroundColor: pdfColors.white,


paddingTop: 42,
paddingBottom: 42,
paddingLeft: 40,
paddingRight: 40,

fontFamily: 'Helvetica',
color: pdfColors.slate800,
fontSize: 9,
lineHeight: 1.5,


},

/* =========================================
SECTIONS
========================================= */

section: {
marginBottom: 18,
},

sectionTitle: {
fontSize: 10,
fontWeight: 700,
color: pdfColors.navy,
letterSpacing: 0.8,
marginBottom: 6,
},

sectionLine: {
height: 1,
backgroundColor: pdfColors.border,
marginBottom: 10,
},

/* =========================================
ENTRIES
========================================= */

entry: {
marginBottom: 12,
},

entryTitle: {
fontSize: 10,
fontWeight: 700,
color: pdfColors.slate900,
marginBottom: 4,
},

/* =========================================
TEXT
========================================= */

body: {
fontSize: 9,
lineHeight: 1.55,
color: pdfColors.slate700,
},

bodySmall: {
fontSize: 8,
lineHeight: 1.45,
color: pdfColors.slate600,
},

muted: {
fontSize: 8,
lineHeight: 1.4,
color: pdfColors.slate500,
},

link: {
fontSize: 8,
lineHeight: 1.4,
color: pdfColors.blue,
},

bullet: {
fontSize: 9,
lineHeight: 1.5,
color: pdfColors.slate700,
marginBottom: 4,
},

/* =========================================
TWO COLUMN SUPPORT
========================================= */

twoColumn: {
flexDirection: 'row',
width: '100%',
},

leftColumn: {
width: '50%',
paddingRight: 8,
},

rightColumn: {
width: '50%',
paddingLeft: 8,
},

divider: {
width: 1,
backgroundColor: pdfColors.border,
},
});

/*

* Kept for compatibility with templates
* that import commonPDFStyles.
  */
  export const commonPDFStyles = pdfStyles;

/* =========================================
DATE RANGE FORMATTER
========================================= */

export const formatDateRange = (
startDate?: string,
endDate?: string,
current?: boolean
): string => {
const start = startDate?.trim() || '';

if (current) {
return start ? `${start} — Present` : 'Present';
}

const end = endDate?.trim() || '';

if (start && end) {
return `${start} — ${end}`;
}

if (start) {
return start;
}

if (end) {
return end;
}

return '';
};
