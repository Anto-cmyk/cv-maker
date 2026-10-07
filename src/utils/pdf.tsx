import html2pdf from 'html2pdf.js'
import type { ResumeData } from '../types/resume'

interface DownloadResumePDFOptions {
resume: ResumeData
selectedTemplate?: string
fileName?: string
}

const replaceOklch = (value: string): string => {
if (!value.includes('oklch(')) {
return value
}

const temp = document.createElement('div')

temp.style.position = 'absolute'
temp.style.visibility = 'hidden'
temp.style.pointerEvents = 'none'
temp.style.width = '0'
temp.style.height = '0'

document.body.appendChild(temp)

try {
temp.style.color = value


const convertedColor =
  window.getComputedStyle(temp).color

if (
  convertedColor &&
  !convertedColor.includes('oklch')
) {
  return convertedColor
}


} catch {
// Ignore conversion errors.
} finally {
temp.remove()
}

return value
}

const createPdfClone = (source: HTMLElement): HTMLElement => {
const clone = source.cloneNode(true) as HTMLElement

clone.id = 'resume-pdf-clone'

clone.style.position = 'absolute'
clone.style.left = '-100000px'
clone.style.right = '-1000px'
clone.style.top = '0'
clone.style.width = '794px'
clone.style.maxWidth = '794px'
clone.style.minWidth = '794px'
clone.style.overflow = 'visible'
clone.style.backgroundColor = '#ffffff'

const sourceElements = [
source,
...Array.from(source.querySelectorAll<HTMLElement>('*')),
]

const cloneElements = [
clone,
...Array.from(clone.querySelectorAll<HTMLElement>('*')),
]

const properties = [
'color',
'backgroundColor',
'borderTopColor',
'borderRightColor',
'borderBottomColor',
'borderLeftColor',
'outlineColor',
'textDecorationColor',
'fontFamily',
'fontSize',
'fontWeight',
'fontStyle',
'lineHeight',
'letterSpacing',
'textAlign',
'textTransform',
'textDecoration',
'display',
'position',
'width',
'height',
'minWidth',
'maxWidth',
'minHeight',
'maxHeight',
'paddingTop',
'paddingRight',
'paddingBottom',
'paddingLeft',
'marginTop',
'marginRight',
'marginBottom',
'marginLeft',
'gap',
'columnGap',
'rowGap',
'gridTemplateColumns',
'gridTemplateRows',
'flexDirection',
'flexWrap',
'justifyContent',
'alignItems',
'alignContent',
'borderTopWidth',
'borderRightWidth',
'borderBottomWidth',
'borderLeftWidth',
'borderTopStyle',
'borderRightStyle',
'borderBottomStyle',
'borderLeftStyle',
'borderRadius',
'boxSizing',
'whiteSpace',
'overflow',
] as const

cloneElements.forEach((cloneElement, index) => {
const sourceElement = sourceElements[index]


if (!sourceElement) {
  return
}

const computed = window.getComputedStyle(sourceElement)

properties.forEach((property) => {
  let value = computed[property]

  if (!value) {
    return
  }

  value = replaceOklch(value)

  if (value.includes('oklch(')) {
    return
  }

  try {
    cloneElement.style[property] = value
  } catch {
    // Ignore unsupported properties.
  }
})


})

clone.querySelectorAll<HTMLElement>('*').forEach((element) => {
element.removeAttribute('class')
})

clone.removeAttribute('class')

document.body.appendChild(clone)

return clone
}

export const downloadResumePDF = async ({
resume,
selectedTemplate = 'modern',
fileName = '',
}: DownloadResumePDFOptions): Promise<void> => {
const preview = document.getElementById('resume-preview')

if (!preview) {
throw new Error(
'Resume preview was not found. Make sure the resume preview has id="resume-preview".'
)
}

let safeFilename = fileName.trim()

safeFilename = safeFilename.replace(
/[<>:"/\|?*]+/g,
''
)

if (!safeFilename) {
const fullName = resume.personal.fullName?.trim()


safeFilename = fullName
  ? fullName.replace(/[<>:"/\\|?*]+/g, '')
  : 'resume'


}

if (!safeFilename.toLowerCase().endsWith('.pdf')) {
safeFilename += '.pdf'
}

console.log('Generating HTML PDF:', {
filename: safeFilename,
template: selectedTemplate,
})

let pdfClone: HTMLElement | null = null

try {
pdfClone = createPdfClone(preview)


await new Promise<void>((resolve) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      resolve()
    })
  })
})

const options = {
  margin: 0,

  filename: safeFilename,

  image: {
    type: 'jpeg' as const,
    quality: 0.98,
  },

  html2canvas: {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
    width: 794,
    windowWidth: 794,
  },

  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait' as const,
    compress: true,
  },

  pagebreak: {
    mode: ['css', 'legacy'],
  },
}

await html2pdf()
  .set(options)
  .from(pdfClone)
  .save()

console.log(
  'PDF generated successfully:',
  safeFilename
)


} catch (error) {
console.error(
'Failed to generate HTML PDF:',
error
)


throw error


} finally {
if (pdfClone) {
pdfClone.remove()
}
}
}
