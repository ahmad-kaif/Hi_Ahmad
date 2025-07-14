import React from 'react';
import { FaGithub } from 'react-icons/fa';

const bulletPoints = [
  'These are smaller projects I built while exploring various concepts and tools.',
  'They focus primarily on strengthening my understanding of core fundamentals.',
];

const sideProjects = [
  {
    name: 'Blog App',
    desc: 'Practiced CRUD operations and integrated sentiment analysis.',
    github: 'https://github.com/ahmad-kaif/bloggers_AI_client'
  },
  {
    name: '3JS powered Portfolio ',
    desc: 'Experimented with three.js(click the icon for live link)',
    github: 'https://myportfolio8611.netlify.app/'
  },
  {
    name: 'Multi-Factor Authentication',
    desc: 'Explored OAuth, cookie handling, and authentication flows.',
    github: 'https://github.com/ahmad-kaif/MFA-auth'
  },
  {
    name: 'Question Answer ChatBot',
    desc: 'Experimented with DistilBERT for natural language Q&A.',
    github: 'https://github.com/ahmad-kaif/QA_DistilBERT'
  },
  {
    name: 'EaseAway Travel',
    desc: 'Developed a travel website for a startup to explore design.',
    github: 'https://github.com/ahmad-kaif/Easeaway-Travel'
  },
  {
    name: 'Machine Learning Projects',
    desc: 'Studied ML fundamentals and trained models for diabetes and heart failure prediction.',
    github: 'https://github.com/ahmad-kaif/MachineLearning'
  },
  {
    name: 'Movie Recommendation System',
    desc: 'Built a recommendation engine using basic NLP.',
    github: 'https://github.com/ahmad-kaif/movie-recommender'
  },
  {
    name: 'Deep Learning Projects',
    desc: 'Worked with neural networks and CNNs on various datasets.',
    github: 'https://github.com/ahmad-kaif/DeepLearning'
  },
  {
    name: 'Docker',
    desc: 'Learned Docker fundamentals and explored the basics of CI/CD pipelines.',
    github: 'https://github.com/ahmad-kaif/docker-server'
  },
  {
    name: 'Code Editor',
    desc: 'Attempted to create a collaborative coding environment (incomplete).',
    github: 'https://github.com/ahmad-kaif/Code-Collab'
  },
  {
    name: 'Spotify Clone',
    desc: 'Built a frontend Spotify clone to understand core JavaScript and DOM manipulation.',
    github: 'https://github.com/ahmad-kaif/Spotify_Clone'
  },
  {
    name: 'News App',
    desc: 'Integrated news APIs to display dynamic headlines and articles.',
    github: 'https://github.com/ahmad-kaif/news_laundry'
  },
  {
    name: 'Weather App',
    desc: 'Fetched live weather data using the OpenWeather API.',
    github: 'https://github.com/ahmad-kaif/Weather-App'
  },
  {
    name: 'And many — check GitHub for more',
    desc: '',
    github: 'https://github.com/ahmad-kaif'
  },
];

const SideProjectsPage = () => {
  return (
    <section className="mb-16">
      <h1 className="text-3xl font-semibold mb-6 mt-6">Learning Phase</h1>

      <ul className="list-disc list-inside space-y-3 text-gray-300 mb-10">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Side Projects</h2>
        <ul className="space-y-6 text-gray-300">
          {sideProjects.map((proj, index) => (
            <li key={index} className="flex justify-between items-start">
              <div className="max-w-[85%]">
                <strong className="text-white">{proj.name}</strong>
                {proj.desc && <span>: {proj.desc}</span>}
              </div>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 ml-4 mt-1"
                title="View on GitHub"
              >
                <FaGithub size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SideProjectsPage;
