import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    Designcom,
    Superpitch,
    Trinity,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Administratrice réseau et sécurité",
      icon: mobile,
    },
    {
      title: "Assistante ingénieur Cybrsécurité",
      icon: backend,
    },
    {
      title: "Chef de projet",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Technicienne Système d’Information (Stage)",
      company_name: "Superpitch",
      icon: Superpitch,
      date: "Décembre 2024 -  Février 2025",
      points: [
        "Création de comptes Linkedin & Gmail (avec les outils GoLogin et Diametry) .",
        "Scraping de données avec des scripts Python générés par IA (ChatGPT / Claude)",
        "Scraping de posts Linkedin à haute viralité (avec Make.com).",
        
      ],
    },
    {
      title: "Développeuse Front-End ( Stage )",
      company_name: "Design.com",
      icon: Designcom,
      date: "Mai 2023 - Août 2023 ",
      points: [
        "Développement d'une application web de gestion de stocks : conception et développement complet de l'interface utilisateur d'une application web destiné à optimiser la gestion des stocks.",
        "Implémentation de fonctionnalités clé : suivi des commandes, la gestion des inventaires et la recherche avancée de produits.",
        "Optimisation du code : pour améliorer les performances UX.",
        "Maîtrise des technologies front-end : utilisation de HTML, CSS et JavaScript pour créer une interface intuitive et responsive. Intégration de données provenant d'une base de données MySQL.",
        "Collaboration en équipe : travail en étroite collaboration avec l'équipe back-end pour assurer une intégration fluide et efficace des différentes composantes de l'application.",
        "Gestion de version : utilisation de Git pour un développement collaboratif et le suivi des modifications apportées au code.",
      ],
    },
    {
      title: "Cofondatrice et Créatrice - TRINITY",
      company_name: "Trinity",
      icon: Trinity,
      date: "Jan 2019 - Jan 2021",
      points: [
        "Création de la marque streetwear et urban brands  .",
        "Développement et gestion de la stratégie digitale sur Instagram et Facebook, avec des campagnes publicitaires ciblées et des collaborations avec des micro-influenceurs.",
        "Organisation et participation à des événements physiques.",
        "Mise en œuvre de stratégies commerciales telles que Account-Based Marketing (ABM), prospection ciblée et actions promotionnelles.",
        "Création de contenus visuels pour les réseaux sociaux et les promotions (utilisation de Canva).",
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "Java: jeu N-reines",
      description:
        "Développement d'un jeu interactif en Java pour résoudre le problème des N-reines en utilisant le backtracking et la programmation orientée objet, avec une interface graphique en Swing/JavaFX.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Réseau et système",
      description:
        "Conception et optimisation du réseau informatique de différentes entreprises dans une ville.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Développment web",
      description:
        "Créer et déployer un portfolio 3D en react.js et three.js.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };
  