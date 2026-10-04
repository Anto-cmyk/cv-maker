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

interface MinimalPDFProps {
resume: ResumeData;
}

const MinimalPDF: React.FC<MinimalPDFProps> = ({ resume }) => {
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

return ( <Page size="A4" style={styles.page}> <View style={styles.header}> <Text style={styles.name}>
{personal.fullName || 'Your Name'} </Text>

```
    {personal.jobTitle ? (
      <Text style={styles.jobTitle}>
        {personal.jobTitle}
      </Text>
    ) : null}

    <View style={styles.contact}>
      {personal.email ? (
        <Text style={styles.contactItem}>
          {personal.email}
        </Text>
      ) : null}

      {personal.phone ? (
        <Text style={styles.contactItem}>
          {personal.phone}
        </Text>
      ) : null}

      {personal.location ? (
        <Text style={styles.contactItem}>
          {personal.location}
        </Text>
      ) : null}
    </View>

    <View style={styles.contact}>
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

  {summary ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        PROFILE
      </Text>

      <Text style={commonPDFStyles.body}>
        {summary}
      </Text>
    </View>
  ) : null}

  {experience.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        EXPERIENCE
      </Text>

      {experience.map((item) => (
        <View key={item.id} style={styles.entry}>
          <Text style={styles.title}>
            {item.position}
          </Text>

          <Text style={styles.meta}>
            {item.company}
            {item.location ? ` · ${item.location}` : ''}
          </Text>

          <Text style={styles.date}>
            {formatDateRange(
              item.startDate,
              item.endDate,
              item.current
            )}
          </Text>

          {item.description ? (
            <Text style={commonPDFStyles.body}>
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

      {education.map((item) => (
        <View key={item.id} style={styles.entry}>
          <Text style={styles.title}>
            {item.degree}
            {item.field ? ` · ${item.field}` : ''}
          </Text>

          <Text style={styles.meta}>
            {item.institution}
            {item.location ? ` · ${item.location}` : ''}
          </Text>

          <Text style={styles.date}>
            {formatDateRange(
              item.startDate,
              item.endDate
            )}
          </Text>

          {item.description ? (
            <Text style={commonPDFStyles.body}>
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
        SKILLS
      </Text>

      <View style={styles.skillList}>
        {skills.map((skill) => (
          <Text key={skill.id} style={styles.skill}>
            {skill.name}
            {skill.level ? ` — ${skill.level}` : ''}
          </Text>
        ))}
      </View>
    </View>
  ) : null}

  {projects.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        PROJECTS
      </Text>

      {projects.map((project) => (
        <View key={project.id} style={styles.entry}>
          <Text style={styles.title}>
            {project.name}
          </Text>

          {project.technologies ? (
            <Text style={styles.meta}>
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
              style={styles.link}
            >
              {project.link}
            </Link>
          ) : null}
        </View>
      ))}
    </View>
  ) : null}

  {certifications.length > 0 ? (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        CERTIFICATIONS
      </Text>

      {certifications.map((item) => (
        <View key={item.id} style={styles.entry}>
          <Text style={styles.title}>
            {item.name}
          </Text>

          <Text style={styles.meta}>
            {item.issuer}
          </Text>

          {item.date ? (
            <Text style={styles.date}>
              {item.date}
            </Text>
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

      {references.map((reference) => (
        <View key={reference.id} style={styles.entry}>
          <Text style={styles.title}>
            {reference.name}
          </Text>

          <Text style={styles.meta}>
            {reference.position}
            {reference.company
              ? ` · ${reference.company}`
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
paddingTop: 42,
paddingBottom: 40,
paddingLeft: 44,
paddingRight: 44,
fontFamily: 'Helvetica',
color: pdfColors.slate800,
fontSize: 9,
lineHeight: 1.45,
},

header: {
marginBottom: 25,
paddingBottom: 15,
borderBottomWidth: 1,
borderBottomColor: pdfColors.border,
},

name: {
fontSize: 26,
fontWeight: 'bold' as const,
color: pdfColors.slate900,
marginBottom: 4,
},

jobTitle: {
fontSize: 10,
color: pdfColors.slate600,
marginBottom: 9,
},

contact: {
flexDirection: 'row' as const,
flexWrap: 'wrap' as const,
marginBottom: 3,
},

contactItem: {
fontSize: 8,
color: pdfColors.slate600,
marginRight: 12,
},

link: {
fontSize: 8,
color: pdfColors.blue,
marginRight: 12,
},

section: {
marginBottom: 17,
},

sectionTitle: {
fontSize: 9,
fontWeight: 'bold' as const,
color: pdfColors.slate900,
letterSpacing: 1.2,
marginBottom: 9,
},

entry: {
marginBottom: 13,
},

title: {
fontSize: 10,
fontWeight: 'bold' as const,
color: pdfColors.slate900,
marginBottom: 3,
},

meta: {
fontSize: 8,
color: pdfColors.slate600,
marginBottom: 3,
},

date: {
fontSize: 8,
color: pdfColors.slate500,
marginBottom: 4,
},

skillList: {
flexDirection: 'row' as const,
flexWrap: 'wrap' as const,
},

skill: {
width: '50%',
fontSize: 9,
color: pdfColors.slate700,
marginBottom: 7,
paddingRight: 10,
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
left: 44,
right: 44,
textAlign: 'right' as const,
fontSize: 7,
color: pdfColors.slate500,
},
};

export default MinimalPDF;
