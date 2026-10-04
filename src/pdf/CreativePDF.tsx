import React from 'react';
import { Document, Page, Text, View, Link } from '@react-pdf/renderer';
import { pdfStyles, pdfColors, formatDateRange } from './pdfStyles';
import type { ResumeData } from '../types/resume';

interface Props {
resume: ResumeData;
}

const CreativePDF: React.FC<Props> = ({ resume }) => {
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

return ( <Document> <Page size="A4" style={pdfStyles.page}> <View style={styles.header}> <View style={styles.accent} />

```
      <Text style={styles.name}>
        {personal.fullName || 'Your Name'}
      </Text>

      <Text style={styles.jobTitle}>
        {personal.jobTitle || 'Professional Title'}
      </Text>

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
          <Link src={personal.website} style={styles.contactLink}>
            {personal.website}
          </Link>
        ) : null}
      </View>
    </View>

    {summary ? (
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>ABOUT ME</Text>
        <View style={pdfStyles.sectionLine} />
        <Text style={pdfStyles.body}>{summary}</Text>
      </View>
    ) : null}

    {experience.length > 0 ? (
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>EXPERIENCE</Text>
        <View style={pdfStyles.sectionLine} />

        {experience.map((item) => (
          <View key={item.id} style={styles.entry}>
            <Text style={styles.title}>
              {item.position}
            </Text>

            <Text style={styles.company}>
              {item.company}
              {item.location ? ` • ${item.location}` : ''}
            </Text>

            <Text style={pdfStyles.muted}>
              {formatDateRange(
                item.startDate,
                item.endDate,
                item.current
              )}
            </Text>

            {item.description ? (
              <Text style={pdfStyles.body}>
                {item.description}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
    ) : null}

    {education.length > 0 ? (
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>EDUCATION</Text>
        <View style={pdfStyles.sectionLine} />

        {education.map((item) => (
          <View key={item.id} style={styles.entry}>
            <Text style={styles.title}>
              {item.degree}
              {item.field ? ` — ${item.field}` : ''}
            </Text>

            <Text style={styles.company}>
              {item.institution}
              {item.location ? ` • ${item.location}` : ''}
            </Text>

            <Text style={pdfStyles.muted}>
              {formatDateRange(item.startDate, item.endDate)}
            </Text>

            {item.description ? (
              <Text style={pdfStyles.body}>
                {item.description}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
    ) : null}

    {skills.length > 0 ? (
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>SKILLS</Text>
        <View style={pdfStyles.sectionLine} />

        <View style={styles.skillsGrid}>
          {skills.map((skill) => (
            <View key={skill.id} style={styles.skill}>
              <Text style={styles.skillName}>
                {skill.name}
              </Text>

              <Text style={pdfStyles.muted}>
                {skill.level}
              </Text>
            </View>
          ))}
        </View>
      </View>
    ) : null}

    {projects.length > 0 ? (
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>PROJECTS</Text>
        <View style={pdfStyles.sectionLine} />

        {projects.map((project) => (
          <View key={project.id} style={styles.project}>
            <Text style={styles.projectName}>
              {project.name}
            </Text>

            {project.technologies ? (
              <Text style={styles.technologies}>
                Technologies: {project.technologies}
              </Text>
            ) : null}

            {project.description ? (
              <Text style={pdfStyles.body}>
                {project.description}
              </Text>
            ) : null}

            {project.link ? (
              <Link src={project.link} style={styles.projectLink}>
                {project.link}
              </Link>
            ) : null}
          </View>
        ))}
      </View>
    ) : null}

    {certifications.length > 0 ? (
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>CERTIFICATIONS</Text>
        <View style={pdfStyles.sectionLine} />

        {certifications.map((item) => (
          <View key={item.id} style={styles.entry}>
            <Text style={styles.title}>
              {item.name}
            </Text>

            <Text style={styles.company}>
              {item.issuer}
            </Text>

            {item.date ? (
              <Text style={pdfStyles.muted}>
                {item.date}
              </Text>
            ) : null}

            {item.link ? (
              <Link src={item.link} style={styles.projectLink}>
                {item.link}
              </Link>
            ) : null}
          </View>
        ))}
      </View>
    ) : null}

    {languages.length > 0 ? (
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>LANGUAGES</Text>
        <View style={pdfStyles.sectionLine} />

        {languages.map((language) => (
          <View key={language.id} style={styles.language}>
            <Text style={styles.languageName}>
              {language.name}
            </Text>

            <Text style={pdfStyles.muted}>
              {language.level}
            </Text>
          </View>
        ))}
      </View>
    ) : null}

    {references.length > 0 ? (
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.sectionTitle}>REFERENCES</Text>
        <View style={pdfStyles.sectionLine} />

        {references.map((reference) => (
          <View key={reference.id} style={styles.entry}>
            <Text style={styles.title}>
              {reference.name}
            </Text>

            <Text style={styles.company}>
              {reference.position}
              {reference.company
                ? ` • ${reference.company}`
                : ''}
            </Text>

            {reference.email ? (
              <Text style={pdfStyles.muted}>
                {reference.email}
              </Text>
            ) : null}

            {reference.phone ? (
              <Text style={pdfStyles.muted}>
                {reference.phone}
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
</Document>


);
};

const styles = {
header: {
marginBottom: 21,
},

accent: {
height: 7,
backgroundColor: pdfColors.purple,
marginBottom: 18,
},

name: {
fontSize: 24,
fontWeight: 700,
color: pdfColors.slate900,
marginBottom: 8,
},

jobTitle: {
fontSize: 11,
fontWeight: 600,
color: pdfColors.purple,
marginBottom: 12,
},

contactBlock: {
marginBottom: 5,
},

contactText: {
fontSize: 8,
color: pdfColors.slate600,
marginBottom: 3,
},

contactLink: {
fontSize: 8,
color: pdfColors.blue,
marginBottom: 3,
},

entry: {
marginBottom: 13,
},

title: {
fontSize: 10,
fontWeight: 700,
color: pdfColors.slate900,
marginBottom: 4,
},

company: {
fontSize: 8.5,
color: pdfColors.slate600,
marginBottom: 3,
},

skillsGrid: {
flexDirection: 'row' as const,
flexWrap: 'wrap' as const,
},

skill: {
width: '50%',
marginBottom: 7,
paddingRight: 8,
},

skillName: {
fontSize: 9,
fontWeight: 600,
color: pdfColors.slate900,
marginBottom: 2,
},

project: {
marginBottom: 14,
},

projectName: {
fontSize: 10,
fontWeight: 700,
color: pdfColors.slate900,
marginBottom: 4,
},

technologies: {
fontSize: 8,
lineHeight: 1.45,
color: pdfColors.purple,
marginBottom: 5,
},

projectLink: {
fontSize: 8,
lineHeight: 1.4,
color: pdfColors.blue,
marginTop: 4,
},

language: {
marginBottom: 7,
},

languageName: {
fontSize: 9,
fontWeight: 600,
color: pdfColors.slate900,
marginBottom: 2,
},

footer: {
position: 'absolute' as const,
bottom: 18,
left: 40,
right: 40,
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

export default CreativePDF;
