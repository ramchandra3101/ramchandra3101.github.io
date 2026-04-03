/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  // ─── Identity ────────────────────────────────────────────────────────────
  title: 'Ramachandra Yerramsetti — Full-Stack & AI Engineer',
  shortTitle: 'Ramachandra Yerramsetti',
  firstName: 'Ramachandra',
  author: 'Ramachandra Yerramsetti',

  // ─── Current status (used in hero typing animation) ──────────────────────
  CurrentPosition: 'Software Engineer',
  CurrentCompany: 'Infosys Public Services',
  CurrentStatus: 'Open to new opportunities',
  Education: 'UConn Alumni — MEng Computer Science (GPA 3.81)',
  University: 'University of Connecticut — MEng Computer Science, 2025',
  Degree: 'MEng in Computer Science',

  // ─── SEO — title shown in browser tab & search results ───────────────────
  // Full title kept short enough for Google (≤60 chars)
  pageTitle: 'Ramachandra Yerramsetti | Full-Stack & AI Engineer',

  // ─── Meta description — the 1-2 sentence elevator pitch Google shows ─────
  // Kept under 160 chars so it doesn't get truncated
  description:
    'Full-Stack Engineer · 4+ yrs · Python, TypeScript, AWS · LLM agent pipelines (LangGraph, RAG) · Currently at Infosys · MEng CS UConn GPA 3.81. Open to new roles.',

  // ─── OG / LinkedIn / Slack unfurl description (can be slightly longer) ───
  ogDescription:
    'Full-Stack Engineer with 4+ years shipping production AI systems at Infosys, UConn Health, TCS, and Cognizant. Specialized in LLM orchestration (LangGraph, RAG), distributed AWS architectures (Lambda, SQS/SNS, Terraform), and FastAPI/TypeScript backends. MEng CS from UConn (GPA 3.81). Open to new opportunities.',

  // ─── Keywords for <meta name="keywords"> ────────────────────────────────
  keywords: [
    'Software Engineer',
    'Full Stack Engineer',
    'AI Engineer',
    'Python',
    'TypeScript',
    'FastAPI',
    'React',
    'Next.js',
    'AWS',
    'Lambda',
    'LangGraph',
    'LangChain',
    'RAG',
    'LLM',
    'Machine Learning',
    'PyTorch',
    'Docker',
    'Node.js',
    'PostgreSQL',
    'DynamoDB',
    'Terraform',
    'REST API',
    'Microservices',
    'Agent Workflows',
    'Model Context Protocol',
    'Hartford CT',
    'Open to work',
  ],

  // ─── OG image (used for LinkedIn/Slack/Twitter card previews) ────────────
  ogImage: '/static/images/avatar.png',

  // ─── Misc ─────────────────────────────────────────────────────────────────
  ResumeURL: '/Ramachandra_Software_Engineer.pdf',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://rcyerramsetti.com',
  email: 'rcyerramsetti@protonmail.com',
  github: 'https://github.com/ramchandra3101',
  x: 'https://x.com/Ramcha_writes',
  twitterHandle: '@Ramcha_writes',
  linkedin: 'https://www.linkedin.com/in/ramachandra-yerramsetti/',
  instagram: 'https://www.instagram.com/rcy_posts/',
}

module.exports = siteMetadata
