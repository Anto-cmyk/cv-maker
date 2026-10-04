import React from 'react';
import { Page, Text, View, Link } from '@react-pdf/renderer';

import { pdfColors, formatDateRange } from './pdfStyles';
import type { ResumeData } from '../types/resume';

interface Props {
resume: ResumeData;
}

const ExecutivePDF: React.FC<Props> = ({ resume }) => {
const {
personal,
summary,
experience,
education,
skills,
projects,
certifications,
languages,
references,
} = resume;

const technologiesToText = (
technologies: string | string[] | undefined
): string => {
if (!technologies) {
return '';
}


if (Array.isArray(technologies)) {
  return technologies.join(' • ');
}

return technologies
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean)
  .join(' • ');


};

return ( <Page size="A4" style={styles.page}>

```
  <View style={styles.header}>
    <View style={styles.topBorder} />

    <Text style={styles.name}>
      {personal.fullName || 'Your Name'}
    </Text>

    {personal.jobTitle ? (
      <Text style={styles.jobTitle}>
        {personal.jobTitle}
      </Text>
    ) : null}

    <View style={styles.contactBlock}>
      {personal.email ? (
        <Text style={styles.contactText}>
          {personal.email}
        </Text>
      ) : null}

      {personal.phone ? (
        <Text style={styles.contactText}>
          {personal.phone}
        </Text>
      ) : null}

      {personal.location ? (
        <Text style={styles.contactText}>
          {personal.location}
        </Text>
      ) : null}

      {personal.website ? (
        <Text style={styles.contactText}>
          {personal.website}
        </Text>
      ) : null}

      {personal.linkedin ? (
        <Text style={styles.contactText}>
          {personal.linkedin}
        </Text>
      ) : null}

      {personal.github ? (
        <Text style={styles.contactText}>
          {personal.github}
        </Text>
      ) : null}
    </View>

    <View style={styles.rule} />
  </View>

  {summary ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        EXECUTIVE PROFILE
      </Text>

      <View style={styles.sectionLine} />

      <Text style={styles.body}>
        {summary}
      </Text>
    </View>
  ) : null}

  {experience.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        PROFESSIONAL EXPERIENCE
      </Text>

      <View style={styles.sectionLine} />

      {experience.map((item) => (
        <View key={item.id} style={styles.entry}>
          <Text style={styles.position}>
            {item.position}
          </Text>

          <Text style={styles.company}>
            {item.company}
          </Text>

          {item.location ? (
            <Text style={styles.location}>
              {item.location}
            </Text>
          ) : null}

          <Text style={styles.date}>
            {formatDateRange(
              item.startDate,
              item.endDate,
              item.current
            )}
          </Text>

          {item.description ? (
            <Text style={styles.body}>
              {item.description}
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  {education.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        EDUCATION
      </Text>

      <View style={styles.sectionLine} />

      {education.map((item) => (
        <View key={item.id} style={styles.entry}>
          <Text style={styles.position}>
            {item.degree}
            {item.field ? ` — ${item.field}` : ''}
          </Text>

          <Text style={styles.company}>
            {item.institution}
          </Text>

          {item.location ? (
            <Text style={styles.location}>
              {item.location}
            </Text>
          ) : null}

          <Text style={styles.date}>
            {formatDateRange(
              item.startDate,
              item.endDate
            )}
          </Text>

          {item.description ? (
            <Text style={styles.body}>
              {item.description}
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  {skills.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        CORE COMPETENCIES
      </Text>

      <View style={styles.sectionLine} />

      {skills.map((skill) => (
        <View key={skill.id} style={styles.skill}>
          <Text style={styles.skillName}>
            {skill.name}
          </Text>

          <Text style={styles.skillLevel}>
            {skill.level}
          </Text>
        </View>
      ))}
    </View>
  ) : null}

  {projects.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        SELECTED PROJECTS
      </Text>

      <View style={styles.sectionLine} />

      {projects.map((project) => {
        const technologies = technologiesToText(
          project.technologies
        );

        return (
          <View key={project.id} style={styles.project}>
            <Text style={styles.projectName}>
              {project.name}
            </Text>

            {technologies ? (
              <Text style={styles.technologies}>
                {technologies}
              </Text>
            ) : null}

            {project.description ? (
              <Text style={styles.body}>
                {project.description}
              </Text>
            ) : null}

            {project.link ? (
              <Link
                src={project.link}
                style={styles.projectLink}
              >
                {project.link}
              </Link>
            ) : null}
          </View>
        );
      })}
    </View>
  ) : null}

  {certifications.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        CERTIFICATIONS
      </Text>

      <View style={styles.sectionLine} />

      {certifications.map((item) => (
        <View key={item.id} style={styles.entry}>
          <Text style={styles.position}>
            {item.name}
          </Text>

          {item.issuer ? (
            <Text style={styles.company}>
              {item.issuer}
            </Text>
          ) : null}

          {item.date ? (
            <Text style={styles.date}>
              {item.date}
            </Text>
          ) : null}

          {item.link ? (
            <Link
              src={item.link}
              style={styles.projectLink}
            >
              {item.link}
            </Link>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  {languages.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        LANGUAGES
      </Text>

      <View style={styles.sectionLine} />

      {languages.map((language) => (
        <View key={language.id} style={styles.language}>
          <Text style={styles.languageName}>
            {language.name}
          </Text>

          <Text style={styles.languageLevel}>
            {language.level}
          </Text>
        </View>
      ))}
    </View>
  ) : null}

  {references.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        REFERENCES
      </Text>

      <View style={styles.sectionLine} />

      {references.map((reference) => (
        <View
          key={reference.id}
          style={styles.reference}
        >
          <Text style={styles.referenceName}>
            {reference.name}
          </Text>

          {reference.position ? (
            <Text style={styles.referencePosition}>
              {reference.position}
            </Text>
          ) : null}

          {reference.company ? (
            <Text style={styles.referenceCompany}>
              {reference.company}
            </Text>
          ) : null}

          {reference.email ? (
            <Text style={styles.referenceContact}>
              Email: {reference.email}
            </Text>
          ) : null}

          {reference.phone ? (
            <Text style={styles.referenceContact}>
              Phone: {reference.phone}
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  <View style={styles.footer} fixed>
    <Text style={styles.footerText}>
      {personal.fullName || 'Resume'}
    </Text>

    <Text
      style={styles.footerText}
      render={({ pageNumber, totalPages }) =>
        `${pageNumber} / ${totalPages}`
      }
    />
  </View>

</Page>

);
};

const styles = {
page: {
paddingTop: 40,
paddingBottom: 60,
paddingLeft: 45,
paddingRight: 45,
fontFamily: 'Helvetica',
color: pdfColors.slate900,
fontSize: 9,
lineHeight: 1.4,
},

header: {
marginBottom: 22,
},

topBorder: {
height: 5,
backgroundColor: pdfColors.navy,
marginBottom: 16,
},

name: {
fontSize: 23,
fontWeight: 700,
color: pdfColors.navy,
marginBottom: 6,
},

jobTitle: {
fontSize: 11,
fontWeight: 600,
color: pdfColors.slate700,
marginBottom: 12,
},

contactBlock: {
marginTop: 2,
marginBottom: 10,
},

contactText: {
fontSize: 8,
color: pdfColors.slate600,
marginBottom: 4,
lineHeight: 1.35,
},

rule: {
height: 1,
backgroundColor: pdfColors.border,
marginTop: 4,
},

section: {
marginBottom: 20,
},

sectionTitle: {
fontSize: 9.5,
fontWeight: 700,
color: pdfColors.navy,
marginBottom: 5,
},

sectionLine: {
height: 1,
backgroundColor: pdfColors.border,
marginBottom: 10,
},

body: {
fontSize: 8.5,
color: pdfColors.slate700,
lineHeight: 1.5,
},

date: {
fontSize: 7.8,
color: pdfColors.slate500,
marginBottom: 5,
lineHeight: 1.35,
},

location: {
fontSize: 8,
color: pdfColors.slate600,
marginBottom: 3,
lineHeight: 1.35,
},

entry: {
marginBottom: 14,
},

position: {
fontSize: 10,
fontWeight: 700,
color: pdfColors.navy,
marginBottom: 3,
lineHeight: 1.3,
},

company: {
fontSize: 8.5,
color: pdfColors.slate600,
marginBottom: 3,
lineHeight: 1.35,
},

skill: {
marginBottom: 8,
},

skillName: {
fontSize: 9,
fontWeight: 600,
color: pdfColors.slate900,
marginBottom: 2,
},

skillLevel: {
fontSize: 7.8,
color: pdfColors.slate500,
},

project: {
marginBottom: 15,
},

projectName: {
fontSize: 10,
fontWeight: 700,
color: pdfColors.navy,
marginBottom: 4,
lineHeight: 1.3,
},

technologies: {
fontSize: 8,
color: pdfColors.blue,
lineHeight: 1.45,
marginBottom: 5,
},

projectLink: {
fontSize: 8,
color: pdfColors.blue,
lineHeight: 1.4,
marginTop: 5,
},

language: {
marginBottom: 8,
},

languageName: {
fontSize: 9,
fontWeight: 600,
color: pdfColors.slate900,
marginBottom: 2,
},

languageLevel: {
fontSize: 7.8,
color: pdfColors.slate500,
},

reference: {
marginBottom: 16,
paddingBottom: 2,
},

referenceName: {
fontSize: 10,
fontWeight: 700,
color: pdfColors.navy,
marginBottom: 4,
lineHeight: 1.3,
},

referencePosition: {
fontSize: 8.5,
fontWeight: 600,
color: pdfColors.slate700,
marginBottom: 3,
lineHeight: 1.35,
},

referenceCompany: {
fontSize: 8.5,
color: pdfColors.slate600,
marginBottom: 5,
lineHeight: 1.35,
},

referenceContact: {
fontSize: 8,
color: pdfColors.slate500,
marginBottom: 3,
lineHeight: 1.4,
},

footer: {
position: 'absolute' as const,
bottom: 18,
left: 45,
right: 45,
flexDirection: 'row' as const,
justifyContent: 'space-between' as const,
borderTopWidth: 1,
borderTopColor: pdfColors.border,
paddingTop: 6,
},

footerText: {
fontSize: 7,
color: pdfColors.slate500,
},
};

export default ExecutivePDF;
