import React, { useMemo } from 'react';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FooterItems from './FooterItems';
import { useLang } from '../../utils/i18n';
import { withUtm } from '../../utils/withUtm';
const COPY = {
  en: {
    headline: "Let's turn health data into impact",
    sub: "Epidemiology, data engineering and AI for public health.",
    cta: "Contact me",
    projects: "View Projects",
    subject: "Contact — Portfolio",
  },
  fr: {
    headline: "Faisons parler les données de santé",
    sub: "Épidémiologie, ingénierie des données et IA au service de la santé publique.",
    cta: "Me contacter",
    projects: "Voir les projets",
    subject: "Contact — Portfolio",
  },
};
export default function Footer() {
  const [lang] = useLang();
  const t = COPY[lang] || COPY.en;
  const EMAIL = 'gioagbahoungba@gmail.com';
  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(t.subject);
    return withUtm(`mailto:${EMAIL}?subject=${subject}`, 'footer_cta');
  }, [t.subject]);
  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', mt: 6 }}>
      <Container maxWidth="lg" sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
          {t.headline}
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 2 }}>
          {t.sub}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <Button
            href={emailHref}
            variant="contained"
            color="secondary"
            aria-label={t.cta}
          >
            {t.cta}
          </Button>
          <Button
            component={RouterLink}
            to="/projects"
            variant="outlined"
            sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}
          >
            {t.projects}
          </Button>
        </Stack>
        <FooterItems />
        <Typography variant="caption" sx={{ display: 'block', mt: 2, opacity: 0.75 }}>
          © {new Date().getFullYear()} Joseph Giovanni Agbahoungba
        </Typography>
      </Container>
    </Box>
  );
}
