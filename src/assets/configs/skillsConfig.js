import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiPandas,
  SiScikitlearn,
  SiNumpy,
  SiJupyter,
  SiR,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloudIcon from "@mui/icons-material/Cloud";

const ICON_SIZE = 50;

const skillsConfig = {
  // Compétences principales
  mainSkills: [
    { id: "skills-main-python",   className: "skill-icon", icon: <SiPython size={ICON_SIZE} />,                    text: "Python" },
    { id: "skills-main-r",        className: "skill-icon", icon: <SiR size={ICON_SIZE} />,                         text: "R" },
    { id: "skills-main-sql",      className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />,      text: "SQL" },
    { id: "skills-main-azure",    className: "skill-icon", icon: <CloudIcon sx={{ fontSize: ICON_SIZE }} />,        text: "Azure Databricks" },
    { id: "skills-main-git",      className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />,                     text: "Git" },
    { id: "skills-main-powerbi",  className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />,   text: "Power BI" },
  ],

  // Packages & outils complémentaires
  complementarySkills: [
    // Python ecosystem
    { id: "skills-comp-pandas",     className: "skill-icon", icon: <SiPandas size={ICON_SIZE} />,                  text: "Pandas" },
    { id: "skills-comp-numpy",      className: "skill-icon", icon: <SiNumpy size={ICON_SIZE} />,                   text: "NumPy" },
    { id: "skills-comp-sklearn",    className: "skill-icon", icon: <SiScikitlearn size={ICON_SIZE} />,             text: "Scikit-learn" },
    { id: "skills-comp-jupyter",    className: "skill-icon", icon: <SiJupyter size={ICON_SIZE} />,                 text: "Jupyter" },
    // R ecosystem
    { id: "skills-comp-tidyverse",  className: "skill-icon", icon: <TerminalIcon sx={{ fontSize: ICON_SIZE }} />,  text: "Tidyverse / ggplot2" },
    // Data infra
    { id: "skills-comp-postgres",   className: "skill-icon", icon: <SiPostgresql size={ICON_SIZE} />,              text: "PostgreSQL" },
    { id: "skills-comp-mysql",      className: "skill-icon", icon: <GrMysql size={ICON_SIZE} />,                   text: "MySQL" },
    { id: "skills-comp-docker",     className: "skill-icon", icon: <SiDocker size={ICON_SIZE} />,                  text: "Docker" },
    // Analyse
    { id: "skills-comp-bi",         className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Biostatistics" },
    { id: "skills-comp-pipeline",   className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />,   text: "ETL / Pipeline" },
  ],
};

export default skillsConfig;
