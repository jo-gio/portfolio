import React from 'react';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import { useLang } from '../utils/i18n';

const UI = {
  en: {
    h1_a: 'Health Data Science ',
    h1_b: 'for ',
    h1_c: 'Public Health Impact',
    sub: 'Epidemiologist and Health Data Scientist — turning health data into insights that strengthen surveillance systems, hospital management, and public health decision-making.',
    bullets: [
      { icon: <RocketLaunchIcon />, label: 'Epidemiology & Surveillance' },
      { icon: <AutoAwesomeIcon />, label: 'Python, R & Azure Databricks' },
      { icon: <SecurityIcon />, label: 'ETL Pipelines & Health AI' },
    ],
    ctaSecondary: 'See Projects',
    seenIn: 'Experience at',
  },
  es: {
    h1_a: 'Data Science en santé ',
    h1_b: 'au service de la ',
    h1_c: 'santé publique',
    sub: 'Épidémiologiste et Data Scientist — transformer les données de santé en leviers concrets pour les systèmes de surveillance, la gestion hospitalière et les politiques publiques.',
    bullets: [
      { icon: <RocketLaunchIcon />, label: 'Épidémiologie & Surveillance' },
      { icon: <AutoAwesomeIcon />, label: 'Python, R & Azure Databricks' },
      { icon: <SecurityIcon />, label: 'Pipelines ETL & IA en santé' },
    ],
    ctaSecondary: 'Voir les projets',
    seenIn: 'Expériences',
  },
};

export default function Hero() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;

  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        color: '#fff',
        py: { xs: 8, md: 12 },
        background: `radial-gradient(1200px 600px at 20% -10%, ${theme.palette.secondary.main}33, transparent 60%),
                     linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0b1220 60%, #08101a 100%)`,
        overflow: 'hidden',
      })}
    >
      {/* subtle glow ornament */}
      <Box sx={{
        position: 'absolute',
        width: 280,
        height: 280,
        right: -80,
        top: -80,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0) 60%)',
        filter: 'blur(6px)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Headline */}
          <Typography variant="h1" sx={{ fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, fontSize: { xs: 36, md: 56 } }}>
            {t.h1_a}
            <Box component="span" sx={{
              background: (th) => `linear-gradient(90deg, ${th.palette.secondary.main}, #7dd3fc)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 24px rgba(125,211,252,.25)'
            }}>
              {t.h1_b}
            </Box>
            {t.h1_c}
          </Typography>

          {/* Subheadline */}
          <Typography sx={{ maxWidth: 900, fontSize: { xs: 16, md: 18 }, color: 'rgba(255,255,255,.86)' }}>
            {t.sub}
          </Typography>

          {/* Proof points */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems="center" justifyContent="center">
            {t.bullets.map((b, i) => (
              <Chip key={i} icon={b.icon} label={b.label} color="default" sx={{
                bgcolor: 'rgba(255,255,255,0.12)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.25)',
                fontWeight: 700,
              }} />
            ))}
          </Stack>

          {/* CTA — "Book a call" supprimé, uniquement "See Projects" */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component="a" href="/projects" variant="outlined" size="large" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>
              {t.ctaSecondary}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
