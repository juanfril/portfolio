export const projects = [
  {
    id: 'vw-agent-harness',
    category: 'ai',
    featured: true,
    origin: 'Digital Hub Volkswagen',
    title: {
      en: 'Enterprise Agent Orchestration & Harness',
      es: 'Orquestación Agéntica y Harness Corporativo'
    },
    description: {
      en: 'Team-wide agentic orchestration layer and reusable enterprise harness package standardizing agent execution, tool calling, and guardrails, paired with a team telemetry metrics plugin.',
      es: 'Sistema de orquestación agéntica del equipo y paquete corporativo de harness para estandarizar la ejecución de agentes, junto a un plugin de métricas adoptado por todo el equipo.'
    },
    tags: ['Python', 'Agentic AI', 'Harness Package', 'Telemetry Plugin'],
    link: '',
    notAvailableReason: {
      en: 'Internal enterprise package at Digital Hub Volkswagen.',
      es: 'Paquete interno corporativo en Digital Hub Volkswagen.'
    }
  },
  {
    id: 'omniloy-medical-agents',
    category: 'ai',
    featured: true,
    origin: 'OMNILOY',
    title: {
      en: 'Medical LangGraph Agents, BOE RAG & Chrome Extension',
      es: 'Agentes Médicos LangGraph, RAG del BOE y Extensión Chrome'
    },
    description: {
      en: 'Stateful medical agents built with LangGraph, controlled through a dedicated Google Chrome extension, backed by dynamic RAG over official BOE documents, AI speech transcription, and React PoCs.',
      es: 'Agentes médicos con LangGraph controlados mediante una extensión de Google, con pipelines RAG que inyectan documentos del BOE relevantes en contexto, transcripción con IA y PoCs en React.'
    },
    tags: ['LangGraph', 'RAG', 'Python', 'React', 'Chrome Extension', 'Speech AI'],
    link: '',
    notAvailableReason: {
      en: 'Confidential project built during tenure at OMNILOY.',
      es: 'Proyecto confidencial desarrollado en OMNILOY.'
    }
  },
  {
    id: 'vw-tires-platform',
    category: 'fullstack',
    featured: true,
    origin: 'Digital Hub Volkswagen',
    title: {
      en: 'VW Group Tire & Wheel Data Platform',
      es: 'Plataforma de Datos de Neumáticos y Llantas (Grupo VW)'
    },
    description: {
      en: 'Multi-brand data application managing tire and wheel specifications across Volkswagen Group brands, combining modern Angular frontend architecture with scalable Python APIs.',
      es: 'Aplicación de datos para el sistema de neumáticos y llantas de las distintas marcas del Grupo VW, combinando las últimas versiones de Angular en frontend y Python en backend.'
    },
    tags: ['Angular', 'TypeScript', 'Python', 'Data Platform'],
    link: '',
    notAvailableReason: {
      en: 'Private enterprise product for Volkswagen Group brands.',
      es: 'Producto corporativo privado para marcas del Grupo Volkswagen.'
    }
  },
  {
    id: 'hexagonal-api',
    category: 'architecture',
    featured: false,
    origin: 'Open Source',
    title: {
      en: 'Hexagonal Architecture API',
      es: 'API con Arquitectura Hexagonal'
    },
    description: {
      en: 'A modular TypeScript microservice API following Hexagonal Architecture for clean boundaries and flexible integrations. Includes Docker environments, CI/CD pipelines, and automated seeding for testing.',
      es: 'API de microservicios en TypeScript basada en Arquitectura Hexagonal para modularidad e integraciones flexibles. Incluye entornos Docker, pipelines CI/CD y seeding automatizado para tests.'
    },
    tags: ['TypeScript', 'Express', 'Jest', 'Docker', 'TypeORM'],
    link: 'https://github.com/juanfril/A-team-project'
  },
  {
    id: 'python-web-scraping',
    category: 'fullstack',
    featured: false,
    origin: 'Open Source',
    title: {
      en: 'Python Web-Scraping & Flask Pipeline',
      es: 'Pipeline Web-Scraping en Python y Flask'
    },
    description: {
      en: 'A Flask API paired with a Scrapy web scraper extracting structured directory data, deployed on AWS EC2 with GitHub Actions CI/CD and scheduled daily cron jobs.',
      es: 'API en Flask combinada con un scraper en Scrapy para extracción de datos estructurados, desplegada en AWS EC2 con GitHub Actions para CI/CD y tareas diarias programadas.'
    },
    tags: ['Python', 'Scrapy', 'Pytest', 'Flask', 'AWS EC2'],
    link: 'https://github.com/juanfril/web-scraping'
  },
  {
    id: 'web3-dex',
    category: 'architecture',
    featured: false,
    origin: 'Kairos',
    title: {
      en: 'Web3 Decentralized Exchange (DEX)',
      es: 'Exchange Descentralizado Web3 (DEX)'
    },
    description: {
      en: 'A decentralized exchange built with React and TypeScript for seamless cross-chain Web3 UX, structured with NX workspaces, Storybook documentation, and Jest coverage.',
      es: 'DEX construido con React y TypeScript para experiencias Web3 fluidas, organizado con NX, documentación en Storybook y testing en Jest.'
    },
    tags: ['TypeScript', 'React', 'Redux', 'NX', 'Jest'],
    link: '',
    notAvailableReason: {
      en: 'This project is private, and I am unable to share a link to it.',
      es: 'Proyecto privado sin enlace público disponible.'
    }
  },
  {
    id: 'third-party-integration',
    category: 'architecture',
    featured: false,
    origin: 'Jobandtalent',
    title: {
      en: 'Third-Party Integration Service',
      es: 'Servicio de Integración con Terceros'
    },
    description: {
      en: 'A Python Flask service integrating external providers into the core platform using Hexagonal Architecture, PostgreSQL persistence, Docker, and Pytest.',
      es: 'Servicio en Python y Flask para integrar proveedores externos en la plataforma central aplicando Arquitectura Hexagonal, PostgreSQL, Docker y Pytest.'
    },
    tags: ['Python', 'Flask', 'Docker', 'PostgreSQL', 'Pytest'],
    link: '',
    notAvailableReason: {
      en: 'This project is private, and I am unable to share a link to it.',
      es: 'Proyecto privado sin enlace público disponible.'
    }
  }
]
