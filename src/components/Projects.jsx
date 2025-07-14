import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: 'ACES',
    desc: 'An AI-powered resume builder and ATS score checker based on job descriptions.',
    link: 'https://resume-builder-gamma-one.vercel.app/',
    github: 'https://github.com/ahmad-kaif/ACES'
  },
  {
    name: 'FlowScrape',
    desc: 'An intelligent visual web scraper builder with a no-code interface.',
    link: 'https://github.com/ahmad-kaif/scrape-flow-v1',
    github: 'https://github.com/ahmad-kaif/scrape-flow-v1'
  },
  {
    name: 'Under Water Object Detection',
    desc: 'A deep learning–based object detection system for sonar imagery.',
    link: 'https://uwodweb.onrender.com/',
    github: 'https://github.com/ahmad-kaif/UnderWaterObjectDetection'
  },
  {
    name: 'ChatArena',
    desc: 'A real-time chat application with a personalized chatbot.',
    link: 'https://chatarena-frpx.onrender.com/',
    github: 'https://github.com/ahmad-kaif/ChatArena_MERN'
  },
  {
    name: 'SkillWise',
    desc: 'A unified platform for students (to learn) and teachers (to teach), featuring live video streaming.',
    link: 'https://skillwise-edtech.onrender.com',
    github: 'https://github.com/ahmad-kaif/SkillWise'
  }
];

export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <ol className="space-y-6 text-gray-300">
        {projects.map((proj, i) => (
          <li key={i} className="flex justify-between items-start">
            <div className="max-w-[85%]">
              <strong>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline hover:text-blue-400 transition"
                >
                  {proj.name}
                </a>
              </strong>
              <span>: {proj.desc}</span>
            </div>
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 ml-4 mt-1"
                title="View on GitHub"
              >
                <FaGithub size={18} />
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
