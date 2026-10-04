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

interface ModernPDFProps {
resume: ResumeData;
}

const ModernPDF: React.FC<ModernPDFProps> = ({ resume }) => {
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

return ( <Page size="A4" style={commonPDFStyles.page}>
{/* Header */} <View style={styles.header}> <View style={styles.headerMain}> <Text style={styles.name}>
{personal.fullName || 'Your Name'} </Text>

```
      {personal.jobTitle ? (
        <Text style={styles.jobTitle}>
          {personal.jobTitle}
        </Text>
      ) : null}

      <View style={styles.contactRow}>
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
      </View>

      <View style={styles.contactRow}>
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
    </View>

    <View style={styles.headerAccent} />
  </View>

  {/* Summary */}
  {summary ? (
    <View style={commonPDFStyles.section}>
      <Text style={commonPDFStyles.sectionTitle}>
        PROFESSIONAL SUMMARY
      </Text>

      <View style={styles.sectionLine} />

      <Text style={commonPDFStyles.body}>
        {summary}
      </Text>
    </View>
  ) : null}

  {/* Experience */}
  {experience.length > 0 ? (
    <View style={commonPDFStyles.section}>
      <Text style={commonPDFStyles.sectionTitle}>
        EXPERIENCE
      </Text>

      <View style={styles.sectionLine} />

      {experience.map((item) => (
        <View key={item.id} style={styles.entry}>
          <View style={styles.entryHeader}>
            <View style={styles.entryTitleContainer}>
              <Text style={commonPDFStyles.entryTitle}>
                {item.position}
              </Text>

              <Text style={styles.company}>
                {item.company}
                {item.location ? ` • ${item.location}` : ''}
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
    <View style={commonPDFStyles.section}>
      <Text style={commonPDFStyles.sectionTitle}>
        EDUCATION
      </Text>

      <View style={styles.sectionLine} />

      {education.map((item) => (
        <View key={item.id} style={styles.entry}>
          <View style={styles.entryHeader}>
            <View style={styles.entryTitleContainer}>
              <Text style={commonPDFStyles.entryTitle}>
                {item.degree}
                {item.field ? ` in ${item.field}` : ''}
              </Text>

              <Text style={styles.company}>
                {item.institution}
                {item.location ? ` • ${item.location}` : ''}
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
    <View style={commonPDFStyles.section}>
      <Text style={commonPDFStyles.sectionTitle}>
        SKILLS
      </Text>

      <View style={styles.sectionLine} />

      <View style={styles.skillsGrid}>
        {skills.map((skill) => (
          <View key={skill.id} style={styles.skillItem}>
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
    <View style={commonPDFStyles.section}>
      <Text style={commonPDFStyles.sectionTitle}>
        PROJECTS
      </Text>

      <View style={styles.sectionLine} />

      {projects.map((project) => (
        <View key={project.id} style={styles.entry}>
          <Text style={commonPDFStyles.entryTitle}>
            {project.name}
          </Text>

          {project.technologies ? (
            <Text style={styles.technology}>
              {project.technologies}
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
              style={commonPDFStyles.link}
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
    <View style={commonPDFStyles.section}>
      <Text style={commonPDFStyles.sectionTitle}>
        CERTIFICATIONS
      </Text>

      <View style={styles.sectionLine} />

      {certifications.map((certification) => (
        <View key={certification.id} style={styles.entry}>
          <View style={styles.entryHeader}>
            <View style={styles.entryTitleContainer}>
              <Text style={commonPDFStyles.entryTitle}>
                {certification.name}
              </Text>

              <Text style={styles.company}>
                {certification.issuer}
              </Text>
            </View>

            {certification.date ? (
              <Text style={styles.date}>
                {certification.date}
              </Text>
            ) : null}
          </View>

          {certification.link ? (
            <Link
              src={certification.link}
              style={commonPDFStyles.link}
            >
              {certification.link}
            </Link>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  {/* Languages */}
  {languages.length > 0 ? (
    <View style={commonPDFStyles.section}>
      <Text style={commonPDFStyles.sectionTitle}>
        LANGUAGES
      </Text>

      <View style={styles.sectionLine} />

      {languages.map((language) => (
        <View key={language.id} style={styles.languageRow}>
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
    <View style={commonPDFStyles.section}>
      <Text style={commonPDFStyles.sectionTitle}>
        REFERENCES
      </Text>

      <View style={styles.sectionLine} />

      {references.map((reference) => (
        <View key={reference.id} style={styles.reference}>
          <Text style={commonPDFStyles.entryTitle}>
            {reference.name}
          </Text>

          <Text style={styles.company}>
            {reference.position}
            {reference.company
              ? ` • ${reference.company}`
              : ''}
          </Text>

          {reference.email ? (
            <Text style={commonPDFStyles.bodySmall}>
              {reference.email}
            </Text>
          ) : null}

          {reference.phone ? (
            <Text style={commonPDFStyles.bodySmall}>
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
header: {
flexDirection: 'row' as const,
marginBottom: 18,
},

headerMain: {
flex: 1,
},

headerAccent: {
width: 6,
backgroundColor: pdfColors.blue,
marginLeft: 12,
},

name: {
fontSize: 24,
fontWeight: 'bold' as const,
color: pdfColors.navy,
marginBottom: 4,
},

jobTitle: {
fontSize: 11,
color: pdfColors.blue,
marginBottom: 8,
},

contactRow: {
flexDirection: 'row' as const,
flexWrap: 'wrap' as const,
marginBottom: 3,
},

contactText: {
fontSize: 8,
color: pdfColors.slate600,
marginRight: 12,
},

link: {
fontSize: 8,
color: pdfColors.blue,
marginRight: 12,
},

sectionLine: {
height: 1,
backgroundColor: pdfColors.border,
marginBottom: 9,
},

entry: {
marginBottom: 12,
},

entryHeader: {
flexDirection: 'row' as const,
justifyContent: 'space-between' as const,
marginBottom: 4,
},

entryTitleContainer: {
flex: 1,
paddingRight: 10,
},

company: {
fontSize: 8,
color: pdfColors.slate600,
marginTop: 2,
},

date: {
width: 95,
fontSize: 8,
color: pdfColors.slate500,
textAlign: 'right' as const,
},

skillsGrid: {
flexDirection: 'row' as const,
flexWrap: 'wrap' as const,
},

skillItem: {
width: '50%',
paddingRight: 10,
marginBottom: 7,
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
marginTop: 3,
marginBottom: 4,
},

languageRow: {
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

reference: {
marginBottom: 10,
},

footer: {
position: 'absolute' as const,
bottom: 18,
left: 36,
right: 36,
textAlign: 'right' as const,
fontSize: 7,
color: pdfColors.slate500,
},
};

export default ModernPDF;
