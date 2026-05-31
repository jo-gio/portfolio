import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import InsightsIcon from '@mui/icons-material/Insights';
import PsychologyIcon from '@mui/icons-material/Psychology';

const ICON_SIZE = 32;

const skillsConfig = {
  categories: [
    {
      id: 'cat-prog',
      icon: <CodeIcon sx={{ fontSize: ICON_SIZE }} />,
      title_i18n: {
        en: 'Programming (OOP & functional)',
        fr: 'Programmation orientée objet et linéaire',
      },
      items: ['Python', 'R', 'SQL', 'JSON', 'Git', 'GitHub', 'Azure DevOps', 'VS Code'],
    },
    {
      id: 'cat-data',
      icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />,
      title_i18n: {
        en: 'Data processing & transformation',
        fr: 'Traitement et transformation des données',
      },
      items: ['Pandas', 'NumPy', 'Requests', 'tidyr', 'stringr', 'readr', 'lubridate', 'DB Browser'],
    },
    {
      id: 'cat-eng',
      icon: <CloudIcon sx={{ fontSize: ICON_SIZE }} />,
      title_i18n: {
        en: 'Data Engineering & Cloud',
        fr: 'Data Engineering & Cloud',
      },
      items: ['PySpark', 'Data Factory', 'Databricks', 'SQL Server', 'Blob Storage', 'Azure', 'REDCap'],
    },
    {
      id: 'cat-viz',
      icon: <InsightsIcon sx={{ fontSize: ICON_SIZE }} />,
      title_i18n: {
        en: 'Statistical analysis & visualization',
        fr: 'Analyse statistique & visualisation',
      },
      items: ['Power BI', 'Plotly', 'Dash', 'Seaborn', 'Graphviz', 'RMarkdown', 'RShiny', 'bibliometrix'],
    },
    {
      id: 'cat-ml',
      icon: <PsychologyIcon sx={{ fontSize: ICON_SIZE }} />,
      title_i18n: {
        en: 'Machine Learning',
        fr: 'Machine Learning',
      },
      items: ['PCA', 'MCA', 'Linear / Logistic / Poisson regression', 'Clustering', 'K-means', 'KNN', 'Random Forest'],
    },
  ],
};

export default skillsConfig;
