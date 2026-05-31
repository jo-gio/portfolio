import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMobileAlt, FaGitAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Joseph Giovanni Agbahoungba</strong>
      </h1>
    ),
    fr: (
      <h1 className="heading">
        Bonjour ! Je suis <strong className="main-name"> Joseph Giovanni Agbahoungba</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "Health Data Scientist",
      "Epidemiologist",
      "Public Health Researcher",
      "Data Engineer",
      "MPH Graduate",
      "Beninese in France 🇧🇯🇫🇷",
    ],
    fr: [
      "Data Scientist en Santé",
      "Épidémiologiste",
      "Chercheur en Santé Publique",
      "Data Engineer",
      "Titulaire d'un Master en Santé Publique",
      "Béninois en France 🇧🇯🇫🇷",
    ],
  },

  about_i18n: {
    en: {
      start:
        "At the crossroads of epidemiology and artificial intelligence, I build data solutions that drive public health decisions — from surveillance pipelines to hospital analytics and LLM-powered health tools.",
      exit:
        "Fluent in Python, R, and Azure Databricks, with a strong focus on maternal and child health, implementation science, and equitable health systems.",
    },
    fr: {
      start:
        "À la croisée de l'épidémiologie et de l'intelligence artificielle, je conçois des solutions data au service de la décision en santé publique : des systèmes de surveillance aux pipelines hospitaliers et aux outils d'IA en santé.",
      exit:
        "Maîtrisant Python, R et Azure Databricks, avec un intérêt marqué pour la santé maternelle et infantile, la recherche interventionnelle et l'équité en santé.",
    },
  },

  workTimeline: [
    {
      id: "work-5",
      title: "Data Engineer & Data Scientist Intern",
      title_i18n: {
        en: "Data Engineer & Data Scientist Intern",
        fr: "Stagiaire Data Engineer & Data Scientist",
      },
      company: "OpenHealth Company",
      description_i18n: {
        en: "Contributing to large-scale health data projects: SYNERG-ID (automated epidemiological surveillance data update in France) and THESORIMED (reference pharmaceutical database).",
        fr: "Contribution à des projets data d'envergure : SYNERG-ID (automatisation de la surveillance épidémiologique en France) et THESORIMED (base pharmaceutique de référence).",
      },
      date: "2026-Present",
      icon: <BiRocket />,
      tags: ["python", "data engineering", "ETL", "health data", "azure databricks"],
    },
    {
      id: "work-4",
      title: "Epidemiologist – Data Manager",
      title_i18n: {
        en: "Epidemiologist – Data Manager",
        fr: "Épidémiologiste – Gestionnaire des données",
      },
      company: "CHU Départemental de l'Ouémé",
      description_i18n: {
        en: "Head of Planning, Monitoring & Evaluation division. Managed health data and supervised epidemiological surveillance at the departmental hospital level.",
        fr: "Chef de la division planification et suivi-évaluation. Gestion des données de santé et supervision de la surveillance épidémiologique.",
      },
      date: "Fév – Août 2025",
      icon: <FaMobileAlt />,
      tags: ["epidemiology", "data management", "health systems", "M&E", "R"],
    },
    {
      id: "work-3",
      title: "Vigie Trauma – Coordination Team",
      title_i18n: {
        en: "Vigie Trauma – Coordination Team",
        fr: "Vigie Trauma – Équipe de coordination",
      },
      company: "IRSP-CAQ",
      description_i18n: {
        en: "Active member of the coordination team for a trauma surveillance program in Benin.",
        fr: "Membre de l'équipe de coordination d'un programme de surveillance des traumatismes au Bénin.",
      },
      date: "Sept 2024 – Août 2025",
      icon: <BsClipboardData />,
      tags: ["surveillance", "coordination", "epidemiology", "public health"],
    },
    {
      id: "work-2",
      title: "Field Researcher – 2PEP4LEP",
      title_i18n: {
        en: "Field Researcher – 2PEP4LEP Project",
        fr: "Enquêteur terrain – Projet 2PEP4LEP",
      },
      company: "CIFRED",
      description_i18n: {
        en: "Field investigator on a leprosy research project in Zou, Benin, working alongside former patients and their contacts.",
        fr: "Enquêteur sur un projet de recherche sur la lèpre dans le Zou au Bénin, auprès d'anciens cas et de leurs contacts.",
      },
      date: "Oct 2024 – Jan 2025",
      icon: <GiCommercialAirplane />,
      tags: ["field research", "leprosy", "neglected tropical diseases", "data collection"],
    },
    {
      id: "work-1",
      title: "Research Assistant",
      title_i18n: {
        en: "Research Assistant",
        fr: "Assistant de recherche",
      },
      company: "COPES-AOC",
      description_i18n: {
        en: "Affiliated with the regional EcoHealth Chair. Supported research on ecosystems and public health, surveillance and health system strengthening.",
        fr: "Affilié à la chaire écosanté régionale. Appui à la recherche sur les liens entre écosystèmes et santé publique.",
      },
      date: "Août 2022 – Juil 2023",
      icon: <AiFillGithub />,
      tags: ["research", "ecohealth", "public health", "west africa"],
    },
    {
      id: "work-0",
      title: "Data Management Volunteer",
      title_i18n: {
        en: "Data Management Volunteer",
        fr: "Volontaire gestionnaire des données",
      },
      company: "PNLLUB",
      description_i18n: {
        en: "Data management volunteer for the National Leprosy and Buruli Ulcer Control Programme, supporting field mission data digitalization.",
        fr: "Bénévole en gestion des données pour le PNLLUB, appui à la digitalisation des outils de collecte lors des missions de terrain.",
      },
      date: "Août – Sept 2022",
      icon: <FaGitAlt />,
      tags: ["data management", "leprosy", "buruli ulcer", "digitalization"],
    },
  ],
};

export default homeConfig;
