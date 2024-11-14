export const projects = [
  {
    title: 'Hexagonal architecture API',
    description: 'The project is an API designed to help users find optimal job opportunities, built with a robust TypeScript. The project follows a microservices architecture, ensuring modularity and ease of maintenance, and incorporates Hexagonal Architecture principles, allowing for flexible integrations and clean separation between core logic and external dependencies. Docker is used for containerization, creating a consistent environment across development and production. The app also integrates CI/CD pipelines for automated testing and deployment, along with a seeding mechanism to populate the database with test data, streamlining development and testing. This project highlights the application of modern web development practices for creating reliable and scalable software solutions.',
    link: 'https://github.com/juanfril/A-team-project',
    tags: ['Typescript', 'Express', 'Jest', 'Docker', 'typeorm']
  },
  {
    title: 'Web3 DEX',
    description: 'The project is a Decentralized Exchange (DEX) developed using React and TypeScript to provide a seamless user experience in a Web3 environment. The project is organized with NX for efficient workspace management and uses Storybook for component development and documentation, ensuring consistency across desktop and mobile interfaces. Jest is integrated for rigorous testing, ensuring code quality and reliability. Due to confidentiality, I am unable to share a link to this project.',
    link: '',
    tags: ['Typescript', 'React', 'Jest', 'Redux']
  },
  {
    title: 'Third-party integration',
    description: 'This service, built in Python with Flask, connects the company ecosystem with third-party services. Its goal is to seamlessly integrate any new external partners into the company platform, ensuring a transparent experience for all users. The project follows Hexagonal Architecture principles, facilitating clean and adaptable integrations. Pytest is used extensively for testing, ensuring the reliability and robustness of each integration. Due to confidentiality, I am unable to share a link to this project.',
    link: '',
    tags: ['Python', 'Flask', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Python web-scraping',
    description: 'The "web-scraping" project is a comprehensive solution designed to extract data from the Public Register directory. It features a RESTful API built with Flask, providing a /scrape endpoint that triggers a Scrapy-based web scraper to handle dynamic content and pagination, storing the extracted data in JSON format. The project is deployed on an AWS EC2 instance, configured with the necessary software, and utilizes GitHub Actions for continuous integration and deployment, automating testing, building, and deployment processes. Additionally, a scheduler is set up using cron jobs for daily scraping tasks, with logging implemented for monitoring purposes. The project structure is organized into distinct modules, including app, core, and infra, each containing relevant submodules and components to ensure maintainability and scalability.',
    link: 'https://github.com/juanfril/web-scraping',
    tags: ['Python', 'Scrapy', 'pytest', 'Flask']
  }
]
