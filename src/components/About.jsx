import React from 'react';

export default function About() {
  return (
    <section className="mb-16">
      <h1 className="text-3xl md:text-3xl font-semibold mb-4 mt-6">Hi, I am Ahmad Kaif</h1>
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>A full-stack developer based in Gurugram India, currently exploring AI agents</li>
        <li>
          You can find me{' '}
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LeetCoding
          </a>{' '}
          when I'm not building on{' '}
          <a
            href="https://github.com/ahmad-kaif"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>I enjoy backend development with a focus on scalability and performance</li>
        <li>I love solving real-world problems through technology</li>
        <li>I also enjoy writing and creating videos</li>
        <li>Currently pursuing a Master of Computer Applications (3rd year) at NIT Jamshedpur</li>
        <li>Feel free to reach out if you're interested in collaborating</li>
      </ul>
    </section>
  );
}
