interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [

  {
    title: 'AI Finance Tracker ',
    description: `HuggingFace smolLM2 integrated Finance Tracker to track finances by just typing a message to bot.`,
    imgSrc: '/static/images/FiananceTracker.jpg',
    href: 'https://github.com/ramchandra3101/FinanceTracker',
  },
  {
    title: 'Dog Breed Detector',
    description: `A simple web app that uses a pre-trained model to detect dog breeds from images.
    The model is trained on the Stanford Dogs Dataset, which contains over 20,000 images of 120 breeds of dogs.`,
    imgSrc: '/static/images/dogbreed.jpg',
    href: 'https://github.com/ramchandra3101/Dog_breed_detection',
  },
  {
    title: ' Cyberinfrastructure Competition',
    description: `GIS-integrated AI dashboard predicting high-demand Citibike stations across NYC using LSTM model, optimizing bike placement with spatial analytics; awarded First Prize in NSF competition. Led an interdisciplinary team of 5 members from statistics and geography domains.`,
    imgSrc: '/static/images/citibike.jpg',
    href: 'https://github.com/ramchandra3101/Cyberinfrastructure-competition'
  },
  {
    title: 'NFL Outcome Prediction',
    description: ` ML model for predicting NFL game outcomes using datasets spanning the last 20 years. Boosted model accuracy by 40\% by integrating curated datasets, with a specific focus on player injury information.`,
    imgSrc: '/static/images/NFL.jpg',
    href: 'https://github.com/ramchandra3101/NFLoutcomes-prediction'
  },
  {
    title: 'Refugee & Immigrant Transitions Surveyor Form',
    description: `Attended AI for Good Hacakthon at San Francisco, We have developed a Full-stack application to detect data from Handwritten survey Form using Gemini Flash 2.0 and keep them in structured data xlsx format`,
    imgSrc: '/static/images/RIT_Hackathon.jpeg',
    href: 'https://github.com/ramchandra3101/RIT_AI_From'
  },
  {
    title: 'LFT Lens',
    description: `Developed a Native Mobile Application to detect Test and control lines from LFT strips and generate Garphs based on pixel intensity`,
    imgSrc: '/static/images/COVID-tests.jpg',
    href: 'https://github.com/ramchandra3101/strip_frontend'
  },



]

export default projectsData
