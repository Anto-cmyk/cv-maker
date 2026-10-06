import { useResume } from '../context/ResumeContext'

import ModernTemplate from '../templates/ModernTemplate'
import ExecutiveTemplate from '../templates/ExecutiveTemplate'
import MinimalTemplate from '../templates/MinimalTemplate'
import CorporateTemplate from '../templates/CorporateTemplate'
import CreativeTemplate from '../templates/CreativeTemplate'

function ResumePreview() {
const {
resume,
selectedTemplate,
} = useResume()

const renderTemplate = () => {
switch (selectedTemplate) {
case 'modern':
return <ModernTemplate resume={resume} />


  case 'executive':
    return <ExecutiveTemplate resume={resume} />

  case 'minimal':
    return <MinimalTemplate resume={resume} />

  case 'corporate':
    return <CorporateTemplate resume={resume} />

  case 'creative':
    return <CreativeTemplate resume={resume} />

  default:
    return <ModernTemplate resume={resume} />
}


}

return ( <div id="resume-preview">
{renderTemplate()} </div>
)
}

export default ResumePreview
