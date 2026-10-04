import React from 'react';
import {
Page,
Text,
View,
Link,
} from '@react-pdf/renderer';

import type { ResumeData } from '../types/resume';
import {
pdfColors,
commonPDFStyles,
formatDateRange,
} from './pdfStyles';

interface CorporatePDFProps {
resume: ResumeData;
}

const CorporatePDF: React.FC<CorporatePDFProps> = ({ resume }) => {
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

return ( <Page size="A4" style={styles.page}>
{/* Corporate header */} <View style={styles.header}> <View style={styles.headerLeft}> <Text style={styles.name}>
{personal.fullName || 'Your Name'} </Text>

```
      {personal.jobTitle ? (
        <Text style={styles.jobTitle}>
          {personal.jobTitle}
        </Text>
      ) : null}
    </View>

    <View style={styles.headerRight}>
      {personal.email ? (
        <Text style={styles.contact}>
          {personal.email}
        </Text>
      ) : null}

      {personal.phone ? (
        <Text style={styles.contact}>
          {personal.phone}
        </Text>
      ) : null}

      {personal.location ? (
        <Text style={styles.contact}>
          {personal.location}
        </Text>
      ) : null}
    </View>
  </View>

  <View style={styles.headerRule} />

  <View style={styles.linksRow}>
    {personal.website ? (
      <Link src={personal.website} style={styles.link}>
        {personal.website}
      </Link>
    ) : null}

    {personal.linkedin ? (
      <Link src={personal.linkedin} style={styles.link}>
        {personal.linkedin}
      </Link>
    ) : null}

    {personal.github ? (
      <Link src={personal.github} style={styles.link}>
        {personal.github}
      </Link>
    ) : null}
  </View>

  {/* Summary */}
  {summary ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        PROFESSIONAL SUMMARY
      </Text>

      <Text style={commonPDFStyles.body}>
        {summary}
      </Text>
    </View>
  ) : null}

  {/* Experience */}
  {experience.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        PROFESSIONAL EXPERIENCE
      </Text>

      {experience.map((item) => (
        <View key={item.id} style={styles.entry}>
          <View style={styles.entryTop}>
            <View style={styles.entryMain}>
              <Text style={styles.position}>
                {item.position}
              </Text>

              <Text style={styles.company}>
                {item.company}
                {item.location
                  ? ` | ${item.location}`
                  : ''}
              </Text>
            </View>

            <Text style={styles.date}>
              {formatDateRange(
                item.startDate,
                item.endDate,
                item.current
              )}
            </Text>
          </View>

          {item.description ? (
            <Text style={commonPDFStyles.body}>
              {item.description}
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  {/* Education */}
  {education.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        EDUCATION
      </Text>

      {education.map((item) => (
        <View key={item.id} style={styles.entry}>
          <View style={styles.entryTop}>
            <View style={styles.entryMain}>
              <Text style={styles.position}>
                {item.degree}
                {item.field
                  ? ` | ${item.field}`
                  : ''}
              </Text>

              <Text style={styles.company}>
                {item.institution}
                {item.location
                  ? ` | ${item.location}`
                  : ''}
              </Text>
            </View>

            <Text style={styles.date}>
              {formatDateRange(
                item.startDate,
                item.endDate
              )}
            </Text>
          </View>

          {item.description ? (
            <Text style={commonPDFStyles.body}>
              {item.description}
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  {/* Skills */}
  {skills.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        TECHNICAL SKILLS
      </Text>

      <View style={styles.skillsGrid}>
        {skills.map((skill) => (
          <View key={skill.id} style={styles.skill}>
            <Text style={styles.skillName}>
              {skill.name}
            </Text>

            {skill.level ? (
              <Text style={styles.skillLevel}>
                {skill.level}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  ) : null}

  {/* Projects */}
  {projects.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        PROJECTS
      </Text>

      {projects.map((project) => (
        <View key={project.id} style={styles.entry}>
          <Text style={styles.position}>
            {project.name}
          </Text>

          {project.technologies ? (
            <Text style={styles.technology}>
              Technologies: {project.technologies}
            </Text>
          ) : null}

          {project.description ? (
            <Text style={commonPDFStyles.body}>
              {project.description}
            </Text>
          ) : null}

          {project.link ? (
            <Link
              src={project.link}
              style={styles.link}
            >
              {project.link}
            </Link>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  {/* Certifications */}
  {certifications.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        CERTIFICATIONS
      </Text>

      {certifications.map((item) => (
        <View key={item.id} style={styles.entry}>
          <View style={styles.entryTop}>
            <View style={styles.entryMain}>
              <Text style={styles.position}>
                {item.name}
              </Text>

              <Text style={styles.company}>
                {item.issuer}
              </Text>
            </View>

            {item.date ? (
              <Text style={styles.date}>
                {item.date}
              </Text>
            ) : null}
          </View>

          {item.link ? (
            <Link
              src={item.link}
              style={styles.link}
            >
              {item.link}
            </Link>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  {/* Languages */}
  {languages.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        LANGUAGES
      </Text>

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

  {/* References */}
  {references.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        REFERENCES
      </Text>

      {references.map((reference) => (
        <View key={reference.id} style={styles.entry}>
          <Text style={styles.position}>
            {reference.name}
          </Text>

          <Text style={styles.company}>
            {reference.position}
            {reference.company
              ? ` | ${reference.company}`
              : ''}
          </Text>

          {reference.email ? (
            <Text style={styles.small}>
              {reference.email}
            </Text>
          ) : null}

          {reference.phone ? (
            <Text style={styles.small}>
              {reference.phone}
            </Text>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  <Text
    fixed
    style={styles.footer}
    render={({ pageNumber, totalPages }) =>
      `${pageNumber} / ${totalPages}`
    }
  />
</Page>


);
};

const styles = {
page: {
backgroundColor: pdfColors.white,
paddingTop: 32,
paddingBottom: 40,
paddingLeft: 38,
paddingRight: 38,
fontFamily: 'Helvetica',
color: pdfColors.slate800,
fontSize: 9,
lineHeight: 1.45,
},

header: {
flexDirection: 'row' as const,
justifyContent: 'space-between' as const,
marginBottom: 13,
},

headerLeft: {
flex: 1,
paddingRight: 20,
},

headerRight: {
width: 145,
alignItems: 'flex-end' as const,
},

name: {
fontSize: 23,
fontWeight: 'bold' as const,
color: pdfColors.navy,
marginBottom: 4,
},

jobTitle: {
fontSize: 10,
color: pdfColors.slate600,
},

contact: {
fontSize: 8,
color: pdfColors.slate600,
marginBottom: 3,
textAlign: 'right' as const,
},

headerRule: {
height: 3,
backgroundColor: pdfColors.blue,
marginBottom: 8,
},

linksRow: {
flexDirection: 'row' as const,
flexWrap: 'wrap' as const,
marginBottom: 18,
},

link: {
fontSize: 8,
color: pdfColors.blue,
marginRight: 13,
marginBottom: 3,
},

section: {
marginBottom: 16,
},

sectionTitle: {
fontSize: 9,
fontWeight: 'bold' as const,
color: pdfColors.navy,
letterSpacing: 0.9,
backgroundColor: pdfColors.slate100,
paddingTop: 5,
paddingBottom: 5,
paddingLeft: 7,
marginBottom: 9,
},

entry: {
marginBottom: 12,
},

entryTop: {
flexDirection: 'row' as const,
justifyContent: 'space-between' as const,
marginBottom: 4,
},

entryMain: {
flex: 1,
paddingRight: 12,
},

position: {
fontSize: 10,
fontWeight: 'bold' as const,
color: pdfColors.slate900,
marginBottom: 3,
},

company: {
fontSize: 8,
color: pdfColors.slate600,
},

date: {
width: 100,
fontSize: 8,
color: pdfColors.slate500,
textAlign: 'right' as const,
},

skillsGrid: {
flexDirection: 'row' as const,
flexWrap: 'wrap' as const,
},

skill: {
width: '50%',
paddingRight: 12,
marginBottom: 8,
},

skillName: {
fontSize: 9,
fontWeight: 'bold' as const,
color: pdfColors.slate800,
},

skillLevel: {
fontSize: 7,
color: pdfColors.slate500,
marginTop: 2,
},

technology: {
fontSize: 8,
color: pdfColors.blue,
marginBottom: 4,
},

language: {
flexDirection: 'row' as const,
justifyContent: 'space-between' as const,
marginBottom: 6,
},

languageName: {
fontSize: 9,
color: pdfColors.slate800,
},

languageLevel: {
fontSize: 8,
color: pdfColors.slate500,
},

small: {
fontSize: 8,
color: pdfColors.slate600,
marginTop: 2,
},

footer: {
position: 'absolute' as const,
bottom: 18,
left: 38,
right: 38,
textAlign: 'right' as const,
fontSize: 7,
color: pdfColors.slate500,
},
};

export default CorporatePDF;
