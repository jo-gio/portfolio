import React from "react";
import { BsMedium } from "react-icons/bs";

const blogConfig = [
  {
    id: "pub-2",
    title: "Connaissances, attitudes et pratiques des gestantes de Glo-Djigbé sur la prévention du paludisme (2022)",
    category: { en: "Malaria / Maternal Health", es: "Paludisme / Santé maternelle" },
    description_i18n: {
      en: "Cross-sectional study on knowledge, attitudes, and practices of 208 pregnant women in Glo-Djigbé, Benin, regarding gestational malaria prevention. Published in the Revue Marocaine de Santé Publique.",
      es: "Étude transversale sur les connaissances, attitudes et pratiques de 208 femmes enceintes de Glo-Djigbé (Bénin) concernant la prévention du paludisme gestationnel. Publiée dans la Revue Marocaine de Santé Publique.",
    },
    links: [
      { name: "article", url: "https://revues.imist.ma/index.php/RMSP/article/view/42285", icon: <BsMedium /> },
    ],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop",
    target: "_blank",
    date: "2024-06-30",
  },
  {
    id: "pub-1",
    title: "Inégalités dans le dépistage et la prévention du VIH/SIDA : Bénin vs Antilles françaises",
    category: { en: "HIV/AIDS / Health Inequalities", es: "VIH/SIDA / Inégalités de santé" },
    description_i18n: {
      en: "Comparative analysis of inequalities in HIV/AIDS screening and prevention between Benin and the French Caribbean territories, through the lens of African culture.",
      es: "Analyse comparative des inégalités de dépistage et de prévention du VIH/SIDA entre le Bénin et les Antilles françaises, sous l'angle de la culture africaine.",
    },
    links: [
      { name: "article", url: "#", icon: <BsMedium /> },
    ],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop",
    target: "_blank",
    date: "2023-01-01",
  },
];

export default blogConfig;
