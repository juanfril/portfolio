export const skillDomains = [
  { id: 'ai', color: '#ff944d' },
  { id: 'frontend', color: '#4c8dff' },
  { id: 'backend', color: '#60a5fa' },
  { id: 'devops', color: '#f59e0b' }
]

export const skillNodes = [
  // AI & Agents cluster (top-left, warm amber glow)
  {
    id: 'langgraph',
    label: 'LangGraph',
    domain: 'ai',
    x: 180,
    y: 118,
    size: 'lg',
    connections: ['python', 'rag', 'agentic', 'transcription'],
    experiences: ['omniloy'],
    detail: {
      en: 'Built stateful multi-step medical AI agents with structured tool routing and clinical workflows.',
      es: 'Desarrollo de agentes médicos con estado y flujos clínicos estructurados.'
    }
  },
  {
    id: 'agentic',
    label: 'Agentic Orchestration',
    domain: 'ai',
    x: 330,
    y: 95,
    size: 'lg',
    connections: ['harness', 'langgraph', 'python', 'observability'],
    experiences: ['vw-digital-hub', 'omniloy'],
    detail: {
      en: 'Designed the team agent orchestration layer at Digital Hub Volkswagen for reliable autonomous engineering workflows.',
      es: 'Diseño del sistema de orquestación agéntica del equipo en Digital Hub Volkswagen para flujos complejos.'
    }
  },
  {
    id: 'harness',
    label: 'Agent Harness',
    domain: 'ai',
    x: 420,
    y: 170,
    size: 'md',
    connections: ['agentic', 'python', 'observability'],
    experiences: ['vw-digital-hub'],
    detail: {
      en: 'Built and packaged the enterprise agent harness library standardizing tooling and execution across teams.',
      es: 'Creación y empaquetado del harness corporativo de agentes para estandarizar ejecución y herramientas.'
    }
  },
  {
    id: 'rag',
    label: 'RAG Pipelines',
    domain: 'ai',
    x: 130,
    y: 222,
    size: 'lg',
    connections: ['langgraph', 'python', 'postgresql'],
    experiences: ['omniloy'],
    detail: {
      en: 'Engineered retrieval pipelines injecting relevant BOE legal documents dynamically into LLM context windows.',
      es: 'Implementación de sistemas RAG para inyectar documentos del BOE relevantes en la ventana de contexto del agente.'
    }
  },
  {
    id: 'transcription',
    label: 'AI Transcription',
    domain: 'ai',
    x: 245,
    y: 235,
    size: 'sm',
    connections: ['langgraph', 'chrome-ext', 'python'],
    experiences: ['omniloy'],
    detail: {
      en: 'Integrated AI speech-to-text transcription pipelines feeding real-time audio context into medical agents.',
      es: 'Integración de sistemas de transcripción con IA para alimentar agentes médicos en tiempo real.'
    }
  },

  // Backend & Data cluster (center-bottom, cobalt/amber bridge)
  {
    id: 'python',
    label: 'Python',
    domain: 'backend',
    x: 455,
    y: 272,
    size: 'xl',
    connections: ['langgraph', 'agentic', 'harness', 'rag', 'postgresql', 'kafka', 'hexagonal', 'angular'],
    experiences: ['vw-digital-hub', 'omniloy', 'jobandtalent'],
    detail: {
      en: 'Primary language across AI engineering, VW Group data backends, Flask microservices, Scrapy pipelines, and agent harnesses.',
      es: 'Lenguaje principal en AI engineering, backends de datos en VW, microservicios Flask, Scrapy y harnesses agénticos.'
    }
  },
  {
    id: 'nodejs',
    label: 'Node.js',
    domain: 'backend',
    x: 345,
    y: 375,
    size: 'md',
    connections: ['typescript', 'hexagonal', 'kafka', 'postgresql'],
    experiences: ['kairos', 'jobandtalent', 'devaway'],
    detail: {
      en: 'Production APIs, microservice integrations, and Express/TypeORM services across SaaS and Web3.',
      es: 'APIs en producción, integración de microservicios y backends Express/TypeORM.'
    }
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL',
    domain: 'backend',
    x: 225,
    y: 350,
    size: 'md',
    connections: ['python', 'nodejs', 'rag', 'hexagonal'],
    experiences: ['kairos', 'jobandtalent'],
    detail: {
      en: 'Relational data modeling, multi-company data migrations (90% success rate), and transactional storage.',
      es: 'Modelado relacional, migraciones multicompany (90% de éxito) y persistencia transaccional.'
    }
  },
  {
    id: 'kafka',
    label: 'Kafka',
    domain: 'backend',
    x: 465,
    y: 412,
    size: 'md',
    connections: ['python', 'nodejs', 'docker', 'hexagonal'],
    experiences: ['jobandtalent'],
    detail: {
      en: 'Event-driven microservice communication enabling reliable, scalable data pipelines across services.',
      es: 'Comunicación orientada a eventos entre microservicios para flujos de datos escalables.'
    }
  },
  {
    id: 'hexagonal',
    label: 'Hexagonal Arch',
    domain: 'backend',
    x: 315,
    y: 458,
    size: 'sm',
    connections: ['python', 'nodejs', 'typescript', 'kafka'],
    experiences: ['jobandtalent'],
    detail: {
      en: 'Clean domain boundaries decoupling business logic from transport, databases, and third-party APIs.',
      es: 'Arquitectura limpia desacoplando la lógica de dominio de infraestructura y servicios externos.'
    }
  },

  // Frontend cluster (right, electric ice-blue)
  {
    id: 'typescript',
    label: 'TypeScript',
    domain: 'frontend',
    x: 625,
    y: 255,
    size: 'xl',
    connections: ['angular', 'react', 'nextjs', 'chrome-ext', 'nodejs', 'testing'],
    experiences: ['vw-digital-hub', 'kairos', 'jobandtalent', 'devaway'],
    detail: {
      en: 'Strict end-to-end typing across Angular, React, Next.js, browser extensions, and Node.js services.',
      es: 'Tipado estricto end-to-end en Angular, React, Next.js, extensiones de navegador y Node.js.'
    }
  },
  {
    id: 'angular',
    label: 'Angular',
    domain: 'frontend',
    x: 745,
    y: 165,
    size: 'lg',
    connections: ['typescript', 'python', 'observability'],
    experiences: ['vw-digital-hub'],
    detail: {
      en: 'Building the Volkswagen Group multi-brand tire & wheel data platform with the latest Angular versions.',
      es: 'Desarrollo de la plataforma de datos de neumáticos y llantas del Grupo VW con las últimas versiones de Angular.'
    }
  },
  {
    id: 'react',
    label: 'React',
    domain: 'frontend',
    x: 765,
    y: 292,
    size: 'lg',
    connections: ['typescript', 'nextjs', 'chrome-ext', 'testing'],
    experiences: ['omniloy', 'kairos', 'jobandtalent', 'devaway'],
    detail: {
      en: 'From rapid AI PoCs at OMNILOY to Web3 DEX interfaces at Kairos and Microfrontends at Jobandtalent.',
      es: 'Desde PoCs rápidas de IA en OMNILOY hasta interfaces DEX Web3 en Kairos y Microfrontends en Jobandtalent.'
    }
  },
  {
    id: 'chrome-ext',
    label: 'Chrome Extensions',
    domain: 'frontend',
    x: 645,
    y: 112,
    size: 'md',
    connections: ['typescript', 'react', 'transcription', 'langgraph'],
    experiences: ['omniloy'],
    detail: {
      en: 'Built a Google browser extension to orchestrate and interact with medical LangGraph agents directly in workflow.',
      es: 'Extensión de Google para operar e interactuar con agentes médicos LangGraph desde el navegador.'
    }
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    domain: 'frontend',
    x: 785,
    y: 400,
    size: 'sm',
    connections: ['react', 'typescript'],
    experiences: ['devaway'],
    detail: {
      en: 'SSR/SSG web applications and full-stack product interfaces built with TypeScript.',
      es: 'Aplicaciones web SSR/SSG e interfaces full-stack en TypeScript.'
    }
  },

  // Cloud & DevEx cluster (top-center-right & bottom-right)
  {
    id: 'observability',
    label: 'Metrics & DevEx',
    domain: 'devops',
    x: 545,
    y: 145,
    size: 'md',
    connections: ['agentic', 'harness', 'angular', 'docker'],
    experiences: ['vw-digital-hub', 'jobandtalent'],
    detail: {
      en: 'Created a team-wide metrics plugin at VW Digital Hub; production monitoring with DataDog & Rollbar.',
      es: 'Creación de un plugin de envío de métricas usado por todo el equipo en VW; observabilidad con DataDog y Rollbar.'
    }
  },
  {
    id: 'docker',
    label: 'Docker & CI/CD',
    domain: 'devops',
    x: 590,
    y: 382,
    size: 'md',
    connections: ['kafka', 'testing', 'observability', 'python'],
    experiences: ['jobandtalent', 'kairos'],
    detail: {
      en: 'Containerized services, GitHub Actions, Codeship automated pipelines, and AWS EC2 deployments.',
      es: 'Contenedores Docker, GitHub Actions, pipelines en Codeship y despliegues en AWS EC2.'
    }
  },
  {
    id: 'testing',
    label: 'Jest · Pytest · Cypress',
    domain: 'devops',
    x: 685,
    y: 428,
    size: 'sm',
    connections: ['typescript', 'react', 'docker'],
    experiences: ['kairos', 'jobandtalent', 'devaway'],
    detail: {
      en: 'Unit, integration, and E2E testing practices raising coverage up to 80% in production repos.',
      es: 'Testing unitario, integración y E2E elevando la cobertura hasta el 80% en producción.'
    }
  }
]
