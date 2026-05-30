import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import React from "react";

const projectConfig = [
  {
    id: "project-4",
    title: "Breast Cancer World Dashboard",
    category: { en: "Data Visualization", es: "Visualisation de données" },
    description_i18n: {
      en: "An interactive dashboard exploring breast cancer statistics at a global level, built with Python.",
      es: "Tableau de bord interactif explorant les statistiques mondiales sur le cancer du sein, développé en Python.",
    },
    links: [
      { name: "repo", url: "https://github.com/jo-gio/dashboard-breast-cancer-world", icon: <AiFillGithub /> },
      { name: "fork", url: "https://github.com/jo-gio/dashboard-breast-cancer-world/fork", icon: <BiGitRepoForked /> },
      { name: "subscription", url: "https://github.com/jo-gio/dashboard-breast-cancer-world/subscription", icon: <AiFillEye /> },
    ],
    image: "https://opengraph.githubassets.com/1/jo-gio/dashboard-breast-cancer-world",
    target: "_blank",
  },
  {
    id: "project-3",
    title: "ICU Mortality Analysis",
    category: { en: "Health Data Analysis", es: "Analyse de données de santé" },
    description_i18n: {
      en: "Statistical analysis of mortality in intensive care units using R, exploring clinical risk factors.",
      es: "Analyse statistique de la mortalité en unités de soins intensifs avec R, explorant les facteurs de risque cliniques.",
    },
    links: [
      { name: "repo", url: "https://github.com/jo-gio/icu-mortality-analysis", icon: <AiFillGithub /> },
      { name: "fork", url: "https://github.com/jo-gio/icu-mortality-analysis/fork", icon: <BiGitRepoForked /> },
      { name: "subscription", url: "https://github.com/jo-gio/icu-mortality-analysis/subscription", icon: <AiFillEye /> },
    ],
    image: "https://opengraph.githubassets.com/1/jo-gio/icu-mortality-analysis",
    target: "_blank",
  },
  {
    id: "project-2",
    title: "Intima-Media Analysis",
    category: { en: "Epidemiology / R", es: "Épidémiologie / R" },
    description_i18n: {
      en: "Analysis of intima-media thickness data as a cardiovascular risk marker, conducted in R.",
      es: "Analyse de l'épaisseur intima-média comme marqueur de risque cardiovasculaire, réalisée en R.",
    },
    links: [
      { name: "repo", url: "https://github.com/jo-gio/intima-media-analysis", icon: <AiFillGithub /> },
      { name: "fork", url: "https://github.com/jo-gio/intima-media-analysis/fork", icon: <BiGitRepoForked /> },
      { name: "subscription", url: "https://github.com/jo-gio/intima-media-analysis/subscription", icon: <AiFillEye /> },
    ],
    image: "https://opengraph.githubassets.com/1/jo-gio/intima-media-analysis",
    target: "_blank",
  },
  {
    id: "project-1",
    title: "Yogurt Consumer Preference Study",
    category: { en: "Consumer Data Analysis", es: "Analyse de données consommateurs" },
    description_i18n: {
      en: "Study of customer preferences for several yogurt brands based on sensory and price data, using R.",
      es: "Étude des préférences des consommateurs pour plusieurs yaourts à partir de données sensorielles et de prix, en R.",
    },
    links: [
      { name: "repo", url: "https://github.com/jo-gio/yaourt-data-analysis", icon: <AiFillGithub /> },
      { name: "fork", url: "https://github.com/jo-gio/yaourt-data-analysis/fork", icon: <BiGitRepoForked /> },
      { name: "subscription", url: "https://github.com/jo-gio/yaourt-data-analysis/subscription", icon: <AiFillEye /> },
    ],
    image: "https://opengraph.githubassets.com/1/jo-gio/yaourt-data-analysis",
    target: "_blank",
  },
];

export default projectConfig;
