import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import Seo from '../../components/Seo';
import homeConfig from '../../assets/configs/homeConfig';
import Hero from '../../components/Hero';
import { useLang } from '../../utils/i18n';
export default function Home() {
  const [lang] = useLang();
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;
  const titles = homeConfig.titles_i18n?.[lang] || homeConfig.titles || ['Data Scientist'];
  const about = homeConfig.about_i18n?.[lang] || homeConfig.about || { start: '', exit: '' };
  const timelineItems = (homeConfig.workTimeline || []).map((it) => ({
    ...it,
    title: it.title_i18n?.[lang] || it.title,
    description: it.description_i18n?.[lang] || it.description,
  }));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Joseph Giovanni Agbahoungba',
    url: canonical,
    jobTitle: titles?.[0] || 'Data Scientist',
  };
  // greeting may be a JSX node (from config) or a string; handle both
  const greetingNode = homeConfig.greeting_i18n?.[lang] || homeConfig.greeting;
  const ExperienceLabel = lang === 'fr' ? 'Expérience' : 'Experience';
  return (
    <section>
      <Seo
        title={lang === 'fr' ? 'Joseph Giovanni Agbahoungba — Data Scientist en Santé' : 'Joseph Giovanni Agbahoungba — Health Data Scientist'}
        description={
          lang === 'fr'
            ? 'Épidémiologiste et data scientist en santé : automatisation de pipelines ETL/ELT, exploitation de données hospitalières, analyse statistique et visualisation (Python, SQL, Azure, Power BI).'
            : 'Epidemiologist and health data scientist: ETL/ELT pipeline automation, hospital data, statistical analysis and visualization (Python, SQL, Azure, Power BI).'
        }
        canonical={canonical}
        j
