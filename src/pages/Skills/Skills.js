import React from 'react';
import { Box, Container, Typography, Chip, Stack, Paper, Grid } from '@mui/material';
import skillsConfig from '../../assets/configs/skillsConfig';
import { useLang } from '../../utils/i18n';

const UI = {
  en: {
    title: 'Skills & Tools',
    subtitle: 'My technical and scientific toolkit, from field data collection to AI pipelines.',
  },
  fr: {
    title: 'Compétences & outils',
    subtitle: 'Ma boîte à outils technique et scientifique, de la collecte de données terrain aux pipelines d\'IA.',
  },
};

export default function Skills() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;
  const categories = skillsConfig.categories || [];

  return (
    <section id="skills">
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack spacing={1} sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, letterSpacing: -0.4 }}>
            {t.title}
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 720, mx: 'auto' }}>
            {t.subtitle}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {categories.map((cat) => {
            const catTitle = cat.title_i18n?.[lang] || cat.title_i18n?.en || '';
            const items = cat.items_i18n?.[lang] || cat.items_i18n?.en || cat.items || [];
            return (
              <Grid key={cat.id} item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={(th) => ({
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    border: `1px solid ${th.palette.divider}`,
                    backgroundColor: th.palette.background.paper,
                    boxShadow: '0 6px 20px rgba(15,18,32,0.06), 0 1px 2px rgba(15,18,32,0.03)',
                    transition: 'transform .2s ease, box-shadow .2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 28px rgba(15,18,32,0.10), 0 3px 10px rgba(15,18,32,0.06)',
                    },
                  })}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                    <Box sx={(th) => ({ color: th.palette.secondary.main, display: 'flex' })}>
                      {cat.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -0.2 }}>
                      {catTitle}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={(th) => ({
                          bgcolor: th.palette.action.hover,
                          border: `1px solid ${th.palette.divider}`,
                          fontWeight: 600,
                        })}
                      />
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
